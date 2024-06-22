#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let conditions = true;
console.log("AlishhShahid - Todo-List Application");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            message: "Enter your new task :",
            type: "input",
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task}  Task added in Todo-List successfully`);
    let addmoreTask = await inquirer.prompt([
        {
            name: "addmore",
            message: "Do you want to add more task ?",
            type: "confirm",
            default: "false",
        }
    ]);
    conditions = addmoreTask.addmore;
}
console.log("Your updated Todo-List ", todolist);
