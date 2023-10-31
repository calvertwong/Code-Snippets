# A sample code that can be used to remove images within a pdf file (not tested for other types of file)
import fitz

doc = fitz.open("test.pdf")

# focus on the last page of the pdf
page = doc[len(doc)-1]
imgName = "Im1"
img = b"/%s Do" % imgName.encode()
page.clean_contents()
xref=page.get_contents()[0]
cont=page.read_contents().splitlines()

for i in range(len(cont)):
    str = cont[i].decode("utf-8") 
    if cont[i] == img or '16 Tf' in str:
            cont[i] = b""
doc.update_stream(xref, b"\n".join(cont))
page.clean_contents()
doc.save("output.pdf", garbage=3, deflate=True)
