import numpy as np
from skimage import io, util
import os

"""
When run, this program searches whatever folder it's in for any .png files
with the dimensions of an FEGBA portrait sheet (128 wide by 112 tall),
and produces copies cropped to the upper-left 96 wide by 80 tall, the area
containing the actual portrait, and with the background color (identified
from the top-right pixel, unused area above the minimug) turned transparent
"""

def trim(height,width,startShape=None):
    for filename in os.listdir():
        if filename[len(filename)-4:]==".png" and filename[len(filename)-9:]!="_trim.png":
            img=io.imread(filename)
            if startShape==None or (img.shape[0]==startShape[0] and img.shape[1]==startShape[1]):
                background=img[0,img.shape[1]-1,:]
                img=img[0:height,0:width,:]
                if(img.shape[2]==3):
                    img=np.append(img, np.zeros((height,width,1)),axis=2)
                print(img.shape)
                for r in range(height):
                    for c in range(width):
                        if img[r][c][0]==background[0] and img[r][c][1]==background[1] and img[r][c][2]==background[2]:
                            img[r][c]=[0,0,0,0]
                        else:
                            img[r][c][3]=255
            img=img.astype(np.uint8)
            print(filename[:len(filename)-4]+"_trim.png")
            io.imsave(filename[:len(filename)-4]+"_trim.png",img)


trim(80,96,[112,128])
