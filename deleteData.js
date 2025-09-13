import { loadData, saveData } from "./dataStore.js";
import { question } from "./prompt.js";

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
