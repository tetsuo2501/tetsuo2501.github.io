#!/bin/bash
image_dir='images'
thumb_dir='thumbs'
resizedim='300x'

rm "$thumb_dir/*"
mkdir "$thumb_dir"

for file in $(ls images)
do
	convert -resize "$resizedim" "$image_dir/$file" "$thumb_dir/$file"
done