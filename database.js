import { Commands } from "./commands.js";
import { question, closePrompt } from "./prompt.js";
import { deleteAllData, deleteData, searchData, showData } from "./dataStore.js";
import { inputData } from "./inputData.js";
import { editData } from "./editData.js";

async function main() {
  console.log("========= Test Database ==========")
  while (true) {

    const command = (await question("Command >> ")).trim().toLowerCase();

    switch (command) {
      // help
      case Commands.HELP:
        console.log("all commands :")
        console.log("-- help")
        console.log("-- add")
        console.log("-- show")
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

      // show
      case Commands.SHOW:
        showData();
        break;

      // search
      case Commands.SEARCH:
        const query = await question("Enter ID or name to Search: ");
        searchData(query);
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
