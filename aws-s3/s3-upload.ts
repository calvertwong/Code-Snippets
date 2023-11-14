import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

const s3Client =
  process.env.AWS_REGION !== undefined &&
  process.env.AWS_ACCESS_KEY !== undefined &&
  process.env.AWS_SECRET_ACCESS_KEY !== undefined
    ? new S3Client({
        region: process.env.AWS_REGION || "",
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY || "",
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
        },
      })
    : undefined;

app.post("/s3-upload", upload.array("documents"), async function (req, res) {
  if (
    s3Client !== undefined &&
    process.env.S3_BUCKET_NAME !== undefined &&
    req.files !== undefined
  ) {
    try {
      const uploadToS3Calls = (req.files as Array<Express.Multer.File>).map(async (file) => {
        const params: PutObjectCommandInput = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: file.originalname,
          Body: file.buffer,
          ContentType: file.mimetype,
        };

        return await s3Client.send(new PutObjectCommand(params))
      })
    
      const uploadToS3Responses = await Promise.allSettled(uploadToS3Calls)

      const uploadedFiles: string[] = []
      const notUploadedFiles: string[] = []

      for(let i=0;i<uploadToS3Responses.length;i++) {
        if(uploadToS3Responses[i].status === "fulfilled") {
          uploadedFiles.push((req.files as Array<Express.Multer.File>)[i].originalname)
        } else {
          notUploadedFiles.push((req.files as Array<Express.Multer.File>)[i].originalname)
        }
      }
      res.status(200).send({
        message: notUploadedFiles.length !== 0 ? "Some files were uploaded successfully" : "Files uploaded successfully",
        uploadedFiles: uploadedFiles,
        notUploadedFiles: notUploadedFiles,
      });
    } catch (e) {
      res.status(500).send("Error uploading files");
    }
  } else {
    res.status(400).send("Bad request")
  }
});

app.listen(process.env.SERVER_PORT, () => {console.log(`Server running on port ${process.env.SERVER_PORT}...`)})
