import { readFileSync, existsSync } from "fs";
import { FILE_NAME } from "./constants.js";

export const displayData = () => {
  if (!existsSync(FILE_NAME)) {
    console.log("No data file found");
    return;
  }

  try {
    const fileContent = readFileSync(FILE_NAME, "utf-8");
    const parsed = JSON.parse(fileContent);
    console.log("\nCurrent data in output.json");
    console.log(JSON.stringify(parsed, null, 2));
  } catch (error) {
    console.error("Error reading or parsing file:", error);
  }
}