import { writeFileSync, readFileSync, existsSync } from "fs";
import { FILE_NAME } from "./constants.js";

export const loadData = () => {
  if (!existsSync(FILE_NAME)) return [];
  try {
    const data = JSON.parse(readFileSync(FILE_NAME, "utf-8"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export const saveData = (data) => {
  try {
    writeFileSync(FILE_NAME, JSON.stringify(data, null, 2));
    console.log("\nData successfully saved to", FILE_NAME);
  } catch (error) {
    console.log("Error saving data:", error);
  }
}
