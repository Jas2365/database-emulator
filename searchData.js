import { loadData } from "./dataStore.js";
import { question } from "./prompt.js";
import { isAlphanumeric } from "./utils.js";

/**
 * @param {string|number} query - ID (number) or name (string)
 * @returns {Object} - Matching entries
 */
export async function searchData() {
  const query = (await question("Enter ID: ")).toUpperCase().trim();
  if (!isAlphanumeric(query)) return {};
  const data = loadData();

  if (!data.length) {
    console.log("No data avaliable.");
    return {};
  }

  const results = data.find(entry => { return entry.id == query })
  if (!results) {
    console.log("No matching entry found for:", query);
  } else {
    console.log("Search Results:");
    console.log(results)
  }
  return results;
};
