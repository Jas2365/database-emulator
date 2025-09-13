import { loadData, saveData, searchData } from "./dataStore.js";
import { question } from "./prompt.js"

export const editData = async () => {
  const idInput = await question('Enter Id of entry to edit: ');
  const data = loadData();
  const index = data.findIndex(entry => entry.id == idInput);

  if (index < 0) {
    console.log("No Entry found for Id:", idInput);
    return;
  }
  const entry = data[index];

  const name = (await question(`Enter new name (or press Enter to keep "${entry.name}"): `)).trim();
  const ageInput = (await question(`Enter new age (or press Enter to keep "${entry.age}"): `)).trim();

  if (name) entry.name = name;
  if (ageInput) {
    const age = parseInt(ageInput, 10);
    if (!isNaN(age) && age >= 0) {
      entry.age = age;
    } else {
      console.log("Invalid age");
    }
  }

  data[index] = entry;
  saveData(data);
  console.log("Entry Updated:", entry)

}