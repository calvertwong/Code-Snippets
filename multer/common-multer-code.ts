import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import format from "date-fns/format";

const storage = multer.diskStorage({
  destination: function (_, __, callback) {
    callback(null, UPLOAD_LOCATION_REPLACE_THIS);
  },
  filename: function (req, file, callback) {
    callback(null, `${format(new Date(), "yyyyMMddHHmmss")}_${req.body.SOME_ID_IF_NEEDED}_${file.originalname}`);
  }
});

const fileFilter = (_: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
  // Allow PDF only
  if (file.mimetype !== "application/pdf") {
     callback(new Error("PDF file format only!"));
   } else {
    callback(null, true);
   }
};

export const upload = multer({ storage: storage, fileFilter: fileFilter });

// if storing file locally is not desired, store file in buffer
const memoryStorage = multer.memoryStorage()
export const uploadMemory = multer({storage: memoryStorage, fileFilter: fileFilter})
