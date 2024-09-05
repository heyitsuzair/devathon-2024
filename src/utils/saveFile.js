"use server";

import { constants } from "@/config";
import fs from "fs";
import path from "path";
import generateUUID from "./generateUUID";

/**
 * Save a file to the server with a timestamp appended to the filename
 * @param {string} filePath - The directory path where the file should be saved
 * @param {string} base64Data - The Base64 encoded data of the file
 * @returns {Promise<Object>} - The result of the save operation
 */
export default async function saveFile(filePath, base64Data) {
  try {
    // Resolve absolute path
    const absolutePath = path.join(process.cwd(), "public", filePath);

    // Ensure the directory exists
    if (!fs.existsSync(absolutePath)) {
      await fs.promises.mkdir(absolutePath, { recursive: true });
    }

    // Decode the Base64 data
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length < 3) {
      throw new Error("Invalid base64 data format");
    }
    const fileExtension = matches[1].split("/")[1];
    const fileData = Buffer.from(matches[2], "base64");

    // Generate a unique file name using a UUID and original extension
    const uniqueId = generateUUID();
    const fileNameWithExtension = `${uniqueId}.${fileExtension}`;
    const fullFilePath = path.join(absolutePath, fileNameWithExtension);

    // Save the file
    await fs.promises.writeFile(fullFilePath, fileData);
    console.log("File Saved");

    return {
      success: true,
      data: constants.SUCCESS.FILE_SAVED,
      payload: path.join(filePath, fileNameWithExtension),
    };
  } catch (error) {
    console.error("Error saving file:", error);

    return {
      success: false,
      data: constants.ERROR.FILE_NOT_SAVED,
    };
  }
}
