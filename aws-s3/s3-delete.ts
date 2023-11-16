import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import {
  S3Client,
  DeleteObjectsCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const checkFileExists = async (fileKeys: string[]) => {
  if (s3Client !== undefined) {
    const headObjectCalls = fileKeys.map(async (fileKey) => {
      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileKey,
      };

      return await s3Client.send(new HeadObjectCommand(params));
    });

    const notDeletedFiles: string[] = [];
    const headObjectResponses = await Promise.allSettled(headObjectCalls);

    headObjectResponses.map((response, index) => {
      if (response.status === "fulfilled") {
        notDeletedFiles.push(fileKeys[index]);
      }
    });
    return notDeletedFiles;
  } else {
    return [];
  }
};

app.post("/s3-delete", async function (req, res) {
  const fileKeys: Array<string> = req.body.fileKeys;
  const deleteObjects = fileKeys.map((fileKey) => {
    return {
      Key: fileKey,
    };
  });
  if (
    s3Client !== undefined &&
    process.env.S3_BUCKET_NAME !== undefined &&
    fileKeys !== undefined
  ) {
    try {
      const deleteCommand = new DeleteObjectsCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Delete: {
          Objects: deleteObjects,
        },
      });

      const deleteFilesResponse = await s3Client.send(deleteCommand);

      // extra step to check if files still exist
      const existingFiles = await checkFileExists(fileKeys);

      res.status(200).send({
        message:
          existingFiles.length === 0
            ? "Files deleted successfully"
            : "Some files were not deleted successfully",
        deletedFiles: deleteFilesResponse.Deleted?.map(file => file.Key),
        notDeletedFiles: existingFiles,
      });
    } catch (e) {
      res.status(500).send("Error deleting files");
    }
  } else {
    res.status(400).send("Bad request");
  }
});

app.listen(3003, () => {
  console.log("Server running on port 3003...");
});
