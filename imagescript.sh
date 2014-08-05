#!/bin/bash
image_dir='images'
thumb_dir='thumbs'
resizedim='300x'
for file in $(ls images)
do
	rm "$thumb_dir/$file"
	mkdir "$thumb_dir"
	convert -resize "$resizedim" "$image_dir/$file" "$thumb_dir/$file"
done