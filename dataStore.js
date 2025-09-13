import { writeFileSync, readFileSync, existsSync } from "fs";
import { question } from "./prompt.js";
import { type } from "os";

const FILE_NAME = "output.json";

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

export const showData = () => {
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

/**
 * @param {string|number} query - ID (number) or name (string)
 * @returns {Object} - Matching entries
 */
export const searchData = (query) => {
  const data = loadData();

  if (!data.length) {
    console.log("No data avaliable.");
    return {};
  }
  const results = data.find(entry => { return entry.id === query })
  if (results <= 0) {
    console.log("No matching entry found for:", query);
  } else {
    console.log("Search Results:");
    console.log(results)
  }
  return results;
};

export const deleteData = async () => {
  let id = await question("Enter Id to delete: ");

  const data = loadData();
  const newData = data.filter(entry => entry.id !== id);

  if (data.length === newData.length) {
    console.log("No entry foud with ID:", id)
  } else {
    saveData(newData);
    console.log("Entry with ID", id, "Deleted")
  }
}
export const deleteAllData = async () => {
  let choice = await question("This will delete all data(y/n): ");
  if (choice.trim().toLowerCase() !== 'y') {
    console.log("Returned")
    return;
  }
  saveData([]);
  console.log("All Deleted")
}
