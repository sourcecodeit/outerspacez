#!/bin/bash

# Ensure ImageMagick is installed
if ! command -v convert &> /dev/null
then
    echo "ImageMagick could not be found. Please install ImageMagick to use this script."
    exit 1
fi

# Loop through all webp files in the current directory
for file in *.webp; do
    # Check if there are actually webp files
    if [ "$file" == "*.webp" ]; then
        echo "No .webp files found in the current directory."
        exit 1
    fi

    # Extract filename without extension
    filename="${file%.*}"

    # Convert webp to png
    convert "$file" "${filename}.png"

    echo "Converted $file to ${filename}.png"
done

echo "Conversion complete."

