#!/bin/bash
image_dir='images'
thumb_dir='thumbs'
resizedim='300x'
for file in $(ls images)
do
	convert -resize "$resizedim" "$image_dir/$file" "$thumb_dir/$file"
done