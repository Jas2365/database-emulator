import { question } from "./prompt.js";
import { loadData, saveData } from "./dataStore.js";
import { UniqueId } from "./utils.js";

export async function inputData() {
  const name = await question("Enter Name: ");
  if (name.trim().toLowerCase() === "back") {
    return;
  }

  let ageInput = await question("Enter Age: ");
  let age = parseInt(ageInput, 10);
  while (isNaN(age) || age < 0) {
    ageInput = await question("Enter Age: ");
    age = parseInt(ageInput, 10);
  }

  const data = loadData();
  const id = UniqueId();
  const entry = { id, name, age };
  data.push(entry);
  saveData(data);
}
