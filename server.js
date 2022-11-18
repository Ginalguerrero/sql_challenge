const inquirer = require("inquirer");
const chalk = require("chalk");
const queryDB = require("./db/QueryDB");

async function menu() {
  try {
    const { action } = await inquirer.prompt({
      name: "action",
      message: "Select a operation: ",
      type: "list",
      choices: [
        { name: "View departments", value: listDepartments},
        { name: "View roles", value: queryDB.queryAllRoles },
        { name: "View employees", value: queryDB.queryAllEmployees },

        { name: "Add department", value: queryDB.addDepartment },
        { name: "Add role", value: queryDB.addRole },
        { name: "Add employee", value: queryDB.addEmployee },

        { name: "Update employee role", value: queryDB.updateEmployeeRole },

        { name: "Exit", value: process.exit },
      ],
    });
    await action();
    menu();
  } catch (err) {
    console.log(chalk.bgRed(err));
  }
}

console.log(chalk.magenta("EMPLOYEE TRACKER"));
menu();
