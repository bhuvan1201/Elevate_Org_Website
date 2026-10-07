#!/bin/zsh
# Convert JPEG/PNG batches into WebP assets without changing the originals.
setopt NO_UNSET PIPE_FAIL

usage() {
  cat <<'HELP'
Usage:
  ./optimize-elevate-images.sh [INPUT_FOLDER] [OUTPUT_FOLDER] [options]

Defaults:
  Input:    ~/Desktop/ELEVATE-New-Photos
  Output:   ~/Desktop/ELEVATE-WebP
  Quality:  80 (0–100)
  Max size: 1920 pixels along the longest side; smaller images are not enlarged

Options:
  --quality NUMBER   Set WebP quality (default: 80).
  --max-size NUMBER  Maximum width/height (default: 1920; 0 keeps original size).
  --lossless         Use lossless WebP for logos, graphics, or flyers.
                     Combine with --max-size 0 to retain original pixels.
  -h, --help         Show this help.

Examples:
  ./optimize-elevate-images.sh
  ./optimize-elevate-images.sh ./new-photos ./src/assets/events/optimized
  ./optimize-elevate-images.sh ./new-photos ./webp --quality 85 --max-size 1600
  ./optimize-elevate-images.sh ./graphics ./webp --lossless --max-size 0

JPG, JPEG, and PNG files are found recursively, including uppercase extensions.
Outputs use lowercase, website-friendly filenames. Name collisions get a stable
suffix. Existing WebP files are skipped, never overwritten. Originals are kept.
Videos and other file formats are not processed.
Requires macOS sips and cwebp (install cwebp with: brew install webp).
HELP
}

quality=80
max_size=1920
lossless=0
typeset -a folders files output_names encoder_options
folders=()
files=()
output_names=()

while (( $# > 0 )); do
  case "$1" in
    -h|--help) usage; exit 0 ;;
    --quality|--max-size)
      option="$1"
      if (( $# < 2 )) || [[ "$2" != <-> ]]; then
        print -u2 -- "Error: $option requires a non-negative integer."
        exit 1
      fi
      if [[ "$option" == --quality ]]; then quality="$2"; else max_size="$2"; fi
      shift 2
      ;;
    --lossless) lossless=1; shift ;;
    --) shift; folders+=("$@"); break ;;
    -*) print -u2 -- "Error: unknown option '$1'. Use --help."; exit 1 ;;
    *) folders+=("$1"); shift ;;
  esac
done

if (( ${#folders} > 2 || quality > 100 )); then
  print -u2 -- "Error: provide at most two folders and a quality between 0 and 100."
  exit 1
fi

input_dir="${folders[1]:-$HOME/Desktop/ELEVATE-New-Photos}"
output_dir="${folders[2]:-$HOME/Desktop/ELEVATE-WebP}"

if [[ ! -d "$input_dir" ]]; then
  print -u2 -- "Error: input folder does not exist: $input_dir"
  print -u2 -- "Create it and add JPG/PNG images, or pass an existing input folder."
  exit 1
fi
for dependency in cwebp sips shasum; do
  if ! command -v "$dependency" >/dev/null 2>&1; then
    print -u2 -- "Error: required command '$dependency' is missing."
    [[ "$dependency" == cwebp ]] && print -u2 -- "Install it with: brew install webp"
    exit 1
  fi
done

input_dir=$(cd -- "$input_dir" && pwd -P) || exit 1
mkdir -p -- "$output_dir" || exit 1
output_dir=$(cd -- "$output_dir" && pwd -P) || exit 1
if [[ "$input_dir" == "$output_dir" ]]; then
  print -u2 -- "Error: choose separate input and output folders."
  exit 1
fi

work_dir=$(mktemp -d "$output_dir/.elevate-webp.XXXXXX") || exit 1
trap 'rm -rf -- "$work_dir"' EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

# Read NUL-delimited paths so spaces and special characters are handled safely.
find "$input_dir" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 > "$work_dir/files" || exit 1
while IFS= read -r -d '' source_file; do
  files+=("$source_file")
done < "$work_dir/files"

if (( ${#files} == 0 )); then
  print -- "No JPG, JPEG, or PNG images found in: $input_dir"
  exit 0
fi

# Plan names for the entire batch before writing any output. Flattening into one
# output folder is convenient for imports; duplicate normalized names get hashes.
typeset -A name_counts
for source_file in "${files[@]}"; do
  filename="${source_file:t}"
  stem="${filename%.*}"
  clean_name=$(printf '%s' "$stem" | LC_ALL=C tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')
  clean_name="${clean_name:-image}"
  output_names+=("$clean_name")
  name_counts[$clean_name]=$(( ${name_counts[$clean_name]:-0} + 1 ))
done

encoder_options=(-quiet -q "$quality" -m 6 -alpha_q 100 -metadata icc,exif)
(( lossless )) && encoder_options+=(-lossless -exact)
converted=0
skipped=0
failed=0
original_bytes=0
optimized_bytes=0

print -- "Converting ${#files} images (quality $quality, maximum side $max_size px)."
print -- "Output: $output_dir"

for (( index=1; index<=${#files}; index++ )); do
  source_file="${files[$index]}"
  clean_name="${output_names[$index]}"
  relative_name="${source_file#$input_dir/}"
  if (( name_counts[$clean_name] > 1 )); then
    digest=$(printf '%s' "$relative_name" | shasum -a 256) || exit 1
    clean_name+="-${digest[1,12]}"
  fi
  destination="$output_dir/$clean_name.webp"

  if [[ -e "$destination" ]]; then
    print -- "SKIP: $relative_name (already exists: $clean_name.webp)"
    (( skipped++ ))
    continue
  fi

  if ! dimensions=$(sips -g pixelWidth -g pixelHeight "$source_file" 2>"$work_dir/error"); then
    print -u2 -- "FAIL: $relative_name (could not read image dimensions)"
    cat "$work_dir/error" >&2
    (( failed++ ))
    continue
  fi
  image_width=$(printf '%s\n' "$dimensions" | awk '/pixelWidth:/ {print $2}')
  image_height=$(printf '%s\n' "$dimensions" | awk '/pixelHeight:/ {print $2}')
  if [[ "$image_width" != <-> || "$image_height" != <-> ]] || (( image_width < 1 || image_height < 1 )); then
    print -u2 -- "FAIL: $relative_name (invalid or unreadable image dimensions)"
    (( failed++ ))
    continue
  fi

  typeset -a resize_options
  resize_options=()
  if (( max_size > 0 && (image_width > max_size || image_height > max_size) )); then
    if (( image_width >= image_height )); then
      resize_options=(-resize "$max_size" 0)
    else
      resize_options=(-resize 0 "$max_size")
    fi
  fi

  temporary_output="$work_dir/$index.webp"
  if ! cwebp "${encoder_options[@]}" "${resize_options[@]}" "$source_file" -o "$temporary_output" 2>"$work_dir/error" || [[ ! -s "$temporary_output" ]]; then
    print -u2 -- "FAIL: $relative_name (WebP conversion failed)"
    cat "$work_dir/error" >&2
    (( failed++ ))
    continue
  fi

  # A hard link publishes the finished file atomically and cannot replace an
  # existing destination, even if another process wrote it during conversion.
  if ! ln "$temporary_output" "$destination" 2>"$work_dir/error"; then
    if [[ -e "$destination" ]]; then
      print -- "SKIP: $relative_name (output appeared during conversion)"
      (( skipped++ ))
    else
      print -u2 -- "FAIL: $relative_name (could not save output)"
      cat "$work_dir/error" >&2
      (( failed++ ))
    fi
    continue
  fi

  source_size=$(wc -c < "$source_file" | tr -d '[:space:]')
  output_size=$(wc -c < "$destination" | tr -d '[:space:]')
  (( original_bytes += source_size, optimized_bytes += output_size, converted++ ))
  print -- "OK: $relative_name -> $clean_name.webp ($source_size -> $output_size bytes)"
done

print -- "Finished: $converted converted, $skipped skipped, $failed failed."
if (( original_bytes > 0 )); then
  awk -v original="$original_bytes" -v optimized="$optimized_bytes" 'BEGIN { printf "Converted batch: %.1f MB -> %.1f MB (%+.1f%% size reduction).\n", original/1048576, optimized/1048576, 100*(original-optimized)/original }'
fi
print -- "Original images are unchanged. Add the WebP imports to the relevant page when ready."
(( failed == 0 ))
