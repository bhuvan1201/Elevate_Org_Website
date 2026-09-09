#!/bin/zsh

INPUT="$HOME/Desktop/ELEVATE-New-Photos"
OUTPUT="$HOME/Desktop/ELEVATE-WebP"
MAX_WIDTH=1920
QUALITY=80

mkdir -p "$OUTPUT"

echo ""
echo "======================================"
echo "   ELEVATE Image Optimizer"
echo "======================================"
echo ""

find "$INPUT" -type f \( \
  -iname "*.jpg" -o \
  -iname "*.jpeg" -o \
  -iname "*.png" \
\) | while IFS= read -r file; do

  filename=$(basename "$file")
  name="${filename%.*}"

  # Make filename website friendly
  clean_name=$(echo "$name" \
    | tr '[:upper:]' '[:lower:]' \
    | sed 's/ /-/g' \
    | sed 's/[^a-z0-9_-]//g' \
    | sed 's/--*/-/g')

  output="$OUTPUT/$clean_name.webp"

  width=$(sips -g pixelWidth "$file" 2>/dev/null | awk '/pixelWidth/ {print $2}')

  echo "Processing: $filename"

  tempdir=$(mktemp -d)
  temp="$tempdir/$filename"

  cp "$file" "$temp"

  if [[ "$width" =~ ^[0-9]+$ ]] && (( width > MAX_WIDTH )); then
    echo "  Resizing: ${width}px → ${MAX_WIDTH}px"
    sips --resampleWidth "$MAX_WIDTH" "$temp" >/dev/null
  else
    echo "  Size OK: ${width}px"
  fi

  cwebp -quiet -q "$QUALITY" "$temp" -o "$output"

  if [[ -f "$output" ]]; then
    original_size=$(du -h "$file" | awk '{print $1}')
    optimized_size=$(du -h "$output" | awk '{print $1}')

    echo "  Original:  $original_size"
    echo "  Optimized: $optimized_size"
    echo "  ✓ $clean_name.webp"
  else
    echo "  ✗ Conversion failed"
  fi

  rm -rf "$tempdir"

  echo ""
done

echo "======================================"
echo "Optimization complete!"
echo ""
echo "Files saved to:"
echo "$OUTPUT"
echo "======================================"