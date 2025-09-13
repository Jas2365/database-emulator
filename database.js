import { Commands } from "./commands.js";
import { question, closePrompt } from "./prompt.js";
import { inputData } from "./inputData.js";
import { editData } from "./editData.js";
import { deleteAllData, deleteData } from "./deleteData.js";
import { displayData } from "./displayData.js";
import { searchData } from "./searchData.js";

async function main() {
  console.log("========= Test Database ==========")
  while (true) {

    const command = (await question("Database >> ")).trim().toLowerCase();

    switch (command) {
      // help
      case Commands.HELP:
        console.log("all commands :")
        console.log("-- help")
        console.log("-- add")
        console.log("-- display")
        console.log("-- search")
        console.log("-- delete")
        console.log("   -- delete_all")
        console.log("-- edit")
        console.log("-- exit")
        break;

      // add
      case Commands.ADD:
        await inputData();
        break;

      // display
      case Commands.DISPLAY:
        displayData();
        break;

      // search
      case Commands.SEARCH:
        await searchData();
        break;

      // delete
      case Commands.DELETE:
        await deleteData();
        break;

      // delete all
      case Commands.DELETE_ALL:
        await deleteAllData();
        break;

      // edit
      case Commands.EDIT:
        await editData();
        break;

      // exit
      case Commands.EXIT:
        closePrompt();
        break;

      default:
        console.log("Unknown Command:", command)
        break;

    }
  }
}

main();
