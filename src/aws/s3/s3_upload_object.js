import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
import path from "path";
import fs from "fs";

const file = "../../assets/transactions.json";

const fileStream = fs.createReadStream(file);

export const uploadParams = {
    Bucket: "sample-data-s3-lambda-practice",
    Key: path.basename(file),
    Body: fileStream
};

export const run = async() => {
    try {
        const data = await s3Client.send(new PutObjectCommand(uploadParams));
        console.log("SUCCESS: ", data);
        return data;
    } catch(err) {
        console.log("NO UPLOAD (ERR): ", err);
    }
};

run();