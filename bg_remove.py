import sys
from rembg import remove
from PIL import Image

def remove_bg(input_path, output_path):
    with open(input_path, 'rb') as i:
        with open(output_path, 'wb') as o:
            input_data = i.read()
            output_data = remove(input_data)
            o.write(output_data)

remove_bg('/home/kali/.gemini/antigravity/brain/2143431d-8c18-4104-bf66-bc19652e7450/media__1771967994104.jpg', 'public/spinner1.png')
remove_bg('/home/kali/.gemini/antigravity/brain/2143431d-8c18-4104-bf66-bc19652e7450/media__1771967994108.jpg', 'public/spinner2.png')
