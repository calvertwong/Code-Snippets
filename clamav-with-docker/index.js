const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "/filescanner/uploads/" });
const app = express();
const { spawn } = require("child_process");

app.post(
  "/file-upload",
  upload.array("single"),
  async function (req, res) {
    let numOfInfectedFiles = 0;
    let infectedFileNames = [];

    // check if file is in the payload TODO in multer middleware
    let filePathChain = req.files.map((fileObj) => fileObj.path);
    try {
      const child = spawn("clamscan", filePathChain);
 
      child.stdout.on("data", (data) => {
        // data has to be converted to a string
        const outputArray = data.toString().split(" ");

        // when the file is not infected, the output will be: /directory/path/to/file <space> OK, hence the outputArray will have the size of 2
        // if the file is infected, the output will be: /directory/path/to/file <space> "virus name" <space> "FOUND", hence the outputArray will have the size of 3
        if (outputArray.length > 2 && outputArray.length <= 3) {
          numOfInfectedFiles++;
          infectedFileNames.push(outputArray[0]);
        }
      });
      // data has to be converted to a string
      child.stderr.on("data", (data) => console.log("stderr   " + data.toString()));
      //error has to be converted to a string
      child.on("error", (error) => console.log("error    " + error.toString()));
      child.on("close", () => {
          res.status(200).json({
            infectedFileNames: infectedFileNames,
            numOfInfectedFiles: numOfInfectedFiles,
          });
      });
    } catch (e) {
      // e has to be converted to a string
      res.status(400).send({
        message: e.toString(),
      });
    }
  }
);

app.listen(3000, () => {
  console.log("Server running on 3000...");
});
