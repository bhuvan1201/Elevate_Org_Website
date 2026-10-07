#!/bin/zsh
# Convert local videos into web-ready H.264/AAC MP4 files without changing originals.
setopt NO_UNSET PIPE_FAIL

usage() {
  cat <<'HELP'
Usage:
  ./optimize-elevate-videos.sh [INPUT_FOLDER] [OUTPUT_FOLDER] [options]

Defaults:
  Input:    ~/Desktop/ELEVATE-New-Videos
  Output:   ~/Desktop/ELEVATE-Web-Videos
  Quality:  CRF 26 (lower values give higher quality and larger files)
  Max size: 1920 pixels along the longest side; smaller videos are not enlarged
  Audio:    preserved as AAC; frame rate is preserved

Options:
  --crf NUMBER       H.264 quality, 0–51 (default: 26).
  --max-size NUMBER  Maximum width/height (default: 1920; 0 disables the cap).
  --fps NUMBER       Limit frame rate without increasing it (e.g. 30).
  --preset NAME      veryfast, fast, medium, or slow (default: medium).
  --mute             Remove audio for silent/background clips.
  -h, --help         Show this help.

Examples:
  ./optimize-elevate-videos.sh
  ./optimize-elevate-videos.sh ./new-videos ./src/assets/events/optimized-videos
  ./optimize-elevate-videos.sh ./new-videos ./mp4 --crf 28 --max-size 1280 --fps 30
  ./optimize-elevate-videos.sh ./hero-videos ./mp4 --mute

MOV, MP4, M4V, and WebM files are found recursively. Outputs use H.264 video,
AAC audio, and MP4 fast-start for streaming. Originals and existing outputs are
kept. HDR footage requires FFmpeg's zscale and tonemap filters for SDR conversion;
if these are unavailable, that file is reported as a failure.
Requires ffmpeg and ffprobe (install with: brew install ffmpeg).
HELP
}

crf=26
max_size=1920
fps_cap=0
preset=medium
mute=0
typeset -a folders files output_names encoder_options
folders=()
files=()
output_names=()

while (( $# > 0 )); do
  case "$1" in
    -h|--help) usage; exit 0 ;;
    --crf|--max-size|--fps)
      option="$1"
      if (( $# < 2 )) || [[ "$2" != <-> ]]; then
        print -u2 -- "Error: $option requires a non-negative integer."
        exit 1
      fi
      case "$option" in
        --crf) crf="$2" ;;
        --max-size) max_size="$2" ;;
        --fps)
          fps_cap="$2"
          if (( fps_cap < 1 )); then print -u2 -- "Error: --fps must be at least 1."; exit 1; fi
          ;;
      esac
      shift 2
      ;;
    --preset)
      if (( $# < 2 )); then print -u2 -- "Error: --preset requires a name."; exit 1; fi
      case "$2" in
        veryfast|fast|medium|slow) preset="$2" ;;
        *) print -u2 -- "Error: preset must be veryfast, fast, medium, or slow."; exit 1 ;;
      esac
      shift 2
      ;;
    --mute) mute=1; shift ;;
    --) shift; folders+=("$@"); break ;;
    -*) print -u2 -- "Error: unknown option '$1'. Use --help."; exit 1 ;;
    *) folders+=("$1"); shift ;;
  esac
done

if (( ${#folders} > 2 || crf > 51 )); then
  print -u2 -- "Error: provide at most two folders and a CRF between 0 and 51."
  exit 1
fi

if (( max_size == 1 )); then
  print -u2 -- "Error: --max-size must be 0 or at least 2 pixels for H.264 video."
  exit 1
fi

input_dir="${folders[1]:-$HOME/Desktop/ELEVATE-New-Videos}"
output_dir="${folders[2]:-$HOME/Desktop/ELEVATE-Web-Videos}"

if [[ ! -d "$input_dir" ]]; then
  print -u2 -- "Error: input folder does not exist: $input_dir"
  print -u2 -- "Create it and add MOV/MP4 videos, or pass an existing input folder."
  exit 1
fi
for dependency in ffmpeg ffprobe shasum; do
  if ! command -v "$dependency" >/dev/null 2>&1; then
    print -u2 -- "Error: required command '$dependency' is missing."
    [[ "$dependency" == ffmpeg || "$dependency" == ffprobe ]] && print -u2 -- "Install them with: brew install ffmpeg"
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

work_dir=$(mktemp -d "$output_dir/.elevate-video.XXXXXX") || exit 1
trap 'rm -rf -- "$work_dir"' EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

# Read NUL-delimited paths so spaces and special characters are handled safely.
find "$input_dir" -path "$output_dir" -prune -o -type f \( -iname '*.mov' -o -iname '*.mp4' -o -iname '*.m4v' -o -iname '*.webm' \) -print0 > "$work_dir/files" || exit 1
while IFS= read -r -d '' source_file; do
  files+=("$source_file")
done < "$work_dir/files"

if (( ${#files} == 0 )); then
  print -- "No MOV, MP4, M4V, or WebM videos found in: $input_dir"
  exit 0
fi

# Plan names for the entire batch before writing any output. Flattening into one
# output folder is convenient for imports; duplicate normalized names get hashes.
typeset -A name_counts
for source_file in "${files[@]}"; do
  filename="${source_file:t}"
  stem="${filename%.*}"
  clean_name=$(printf '%s' "$stem" | LC_ALL=C tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')
  clean_name="${clean_name:-video}"
  output_names+=("$clean_name")
  name_counts[$clean_name]=$(( ${name_counts[$clean_name]:-0} + 1 ))
done

encoders=$(ffmpeg -hide_banner -encoders 2>/dev/null) || exit 1
if [[ "$encoders" != *libx264* || "$encoders" != *" aac "* ]]; then
  print -u2 -- "Error: FFmpeg needs libx264 and AAC encoders for website MP4 output."
  exit 1
fi
available_filters=$(ffmpeg -hide_banner -filters 2>/dev/null) || exit 1
encoder_options=(-c:v libx264 -preset "$preset" -crf "$crf" -pix_fmt yuv420p -movflags +faststart -map_metadata -1 -map_chapters -1)
if (( mute )); then
  encoder_options+=(-an)
else
  encoder_options+=(-map '0:a:0?' -c:a aac -b:a 128k)
fi
converted=0
skipped=0
failed=0
original_bytes=0
optimized_bytes=0

print -- "Converting ${#files} videos (CRF $crf, maximum side $max_size px)."
print -- "Output: $output_dir"

for (( index=1; index<=${#files}; index++ )); do
  source_file="${files[$index]}"
  clean_name="${output_names[$index]}"
  relative_name="${source_file#$input_dir/}"
  if (( name_counts[$clean_name] > 1 )); then
    digest=$(printf '%s' "$relative_name" | shasum -a 256) || exit 1
    clean_name+="-${digest[1,12]}"
  fi
  destination="$output_dir/$clean_name.mp4"

  if [[ -e "$destination" ]]; then
    print -- "SKIP: $relative_name (already exists: $clean_name.mp4)"
    (( skipped++ ))
    continue
  fi

  if ! video_info=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height,color_transfer -of default=noprint_wrappers=1 "$source_file" 2>"$work_dir/error"); then
    print -u2 -- "FAIL: $relative_name (could not read video)"
    cat "$work_dir/error" >&2
    (( failed++ ))
    continue
  fi
  video_width=$(printf '%s\n' "$video_info" | awk -F= '$1 == "width" {print $2}')
  video_height=$(printf '%s\n' "$video_info" | awk -F= '$1 == "height" {print $2}')
  transfer=$(printf '%s\n' "$video_info" | awk -F= '$1 == "color_transfer" {print $2}')
  if [[ "$video_width" != <-> || "$video_height" != <-> ]] || (( video_width < 2 || video_height < 2 )); then
    print -u2 -- "FAIL: $relative_name (no valid video stream)"
    (( failed++ ))
    continue
  fi

  video_filter=""
  typeset -a color_options
  color_options=()
  if [[ "$transfer" == smpte2084 || "$transfer" == arib-std-b67 ]]; then
    if [[ "$available_filters" != *zscale* || "$available_filters" != *tonemap* ]]; then
      print -u2 -- "FAIL: $relative_name is HDR; this FFmpeg build lacks HDR-to-SDR filters."
      print -u2 -- "Export an SDR copy first, or use an FFmpeg build with zscale/libzimg support."
      (( failed++ ))
      continue
    fi
    video_filter="zscale=transfer=linear:npl=100,format=gbrpf32le,zscale=primaries=bt709,tonemap=tonemap=hable:desat=0,zscale=transfer=bt709:matrix=bt709:range=limited,format=yuv420p,"
    color_options=(-color_primaries bt709 -color_trc bt709 -colorspace bt709 -color_range tv)
  fi

  if (( max_size > 0 )); then
    video_filter+="scale=w='min(iw,$max_size)':h='min(ih,$max_size)':force_original_aspect_ratio=decrease:force_divisible_by=2:reset_sar=1"
  else
    video_filter+="scale=w='trunc(iw/2)*2':h='trunc(ih/2)*2':force_original_aspect_ratio=decrease:force_divisible_by=2:reset_sar=1"
  fi
  if (( fps_cap > 0 )); then
    video_filter+=",fps=fps='min(source_fps,$fps_cap)'"
  fi

  temporary_output="$work_dir/$index.mp4"
  print -- "PROCESS: $relative_name"
  if ! ffmpeg -nostdin -hide_banner -loglevel error -n -i "$source_file" -map 0:v:0 -vf "$video_filter" "${encoder_options[@]}" "${color_options[@]}" "$temporary_output" 2>"$work_dir/error" || [[ ! -s "$temporary_output" ]]; then
    print -u2 -- "FAIL: $relative_name (video conversion failed)"
    cat "$work_dir/error" >&2
    (( failed++ ))
    continue
  fi
  if ! ffprobe -v error "$temporary_output" >/dev/null 2>"$work_dir/error"; then
    print -u2 -- "FAIL: $relative_name (output validation failed)"
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
  print -- "OK: $relative_name -> $clean_name.mp4 ($source_size -> $output_size bytes)"
done

print -- "Finished: $converted converted, $skipped skipped, $failed failed."
if (( original_bytes > 0 )); then
  awk -v original="$original_bytes" -v optimized="$optimized_bytes" 'BEGIN { printf "Converted batch: %.1f MB -> %.1f MB (%+.1f%% size reduction).\n", original/1048576, optimized/1048576, 100*(original-optimized)/original }'
fi
print -- "Original videos are unchanged. Add the MP4 imports to the relevant page when ready."
(( failed == 0 ))
