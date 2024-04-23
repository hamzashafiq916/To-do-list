#! /usr/bin/env node


import inquirer from "inquirer";

let todolist: string[] = [];
let while_condition: boolean = true;

while (while_condition === true) {
  // -----------------options------------------------------
  let option = await inquirer.prompt([
    {
      type: "list",
      name: "user_option",
      message: "select an options",
      choices: ["Add", "remove"],
    },
  ]);

  //----------------------Add-------------------------------
  if (option.user_option === "Add") {
    let ans = await inquirer.prompt([
      {
        type: "input",
        name: "user_answer",
        message: "write something to add in the task list.",
      },
    ]);

    if (ans.user_answer !== ``) {
      todolist.push(ans.user_answer);
      console.log(todolist);
    } else {
      console.log("please write something to add in the todolist");
    }
  }
  // ---------------------------Remove-----------------------
  else if (option.user_option === "remove") {
    let removechoice = await inquirer.prompt([
      {
        type: "list",
        name: "removeitem",
        message: "select item to remove",
        choices: todolist,
      },
    ]);

    let indextoremove = todolist.indexOf(removechoice.removeitem);

    if (indextoremove >= 0) {
      todolist.splice(indextoremove, 1);
      console.log(`you removed : `, removechoice.removeitem);
      console.log(todolist);
    }
  }
  //--------------------------------confirmation-------------------------------------

  let user_ans = await inquirer.prompt([
    {
      type: "confirm",
      name: "selection",
      message: "Do you want to continue?",
      default: true,
    },
  ]);

  if (user_ans.selection === false) {
    while_condition = false;
  }
}
console.log(`Thankyou for using to do list`);
