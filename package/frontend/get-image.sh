base_link="https://ipfs.io/ipfs/bafybeihlond74ij2vbzyuagma2uxtv2b7e4nmty6ujxbapqopsarzy3yo4/"
image_count=100
folder_name="images"


# Create a folder if it doesn't exist
mkdir -p "$folder_name"

for i in $(seq 1 "$image_count")
do
    link="${base_link}${i}.png"
    filename="${folder_name}/$i.png"

    if curl -o "$filename" "$link"; then
        echo "Image $i saved successfully!"
    else
        echo "Failed to download image $i"
    fi
done