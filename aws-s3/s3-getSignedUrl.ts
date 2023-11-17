import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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

app.post("/s3-getSignedUrl", async function (req, res) {
  const fileKeys: Array<string> = req.body.fileKeys;
  if (
    s3Client !== undefined &&
    process.env.S3_BUCKET_NAME !== undefined &&
    fileKeys !== undefined
  ) {
    try {
      const tempUrls: string[] = await Promise.all(
        fileKeys.map(async (filename: string) => {
          return await getSignedUrl(
            s3Client,
            new GetObjectCommand({
              Bucket: process.env.S3_BUCKET_NAME,
              Key: filename,
            }),
            // valid duration of the url
            { expiresIn: 3600 }
          );
        })
      );

      res.status(200).send({
        tempUrls: tempUrls,
      });
    } catch (e) {
      res.status(500).send("Error getting signed url of files");
    }
  } else {
    res.status(400).send("Bad request");
  }
});

app.listen(3004, () => {
  console.log("Server running on port 3004...");
});
