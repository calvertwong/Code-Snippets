# A sample code that can be used to remove images within a pdf file (technically the existing image got replaced with a transparent image that is very small)
import fitz
import sys

# Reference: https://github.com/pymupdf/PyMuPDF-Utilities/blob/c80d3e8d7900451e4fa796407706e0c07caefcd3/examples/replace-image/replace.py#L18
def img_replace(page, xref, filename=None, stream=None, pixmap=None):
    if bool(filename) + bool(stream) + bool(pixmap) != 1:
        raise ValueError("Exactly one of filename/stream/pixmap must be given")
    doc = page.parent  # the owning document
    new_xref = page.insert_image(
        page.rect, filename=filename, stream=stream, pixmap=pixmap
    )
    doc.xref_copy(new_xref, xref)  # copy over new to old
    last_contents_xref = page.get_contents()[-1]
    doc.update_stream(last_contents_xref, b" ")

# get first argument of the execution command 
filename = sys.argv[1]

### READ IN PDF
print(filename)
# open pdf
doc = fitz.open(filename)
# Go to the last page of pdf
page = doc[doc.page_count-1]
# find images on page
images = page.get_images()
# perform this if at least one image exists
if len(images) != 0:
    item = images[0]
    old_xref = item[0]

    pix = fitz.Pixmap(fitz.csGRAY, (0, 0, 1, 1), 1)
    pix.clear_with()
    img_replace(page, old_xref, pixmap=pix)

    page.clean_contents()
    doc.save("New_" + filename, garbage=3, deflate=True)
    print("Image removed!!!")
