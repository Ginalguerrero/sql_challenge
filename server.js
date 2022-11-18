const inquirer = require("inquirer");
const chalk = require("chalk");


async function menu() {
  const {action} = await inquirer.createPromptModule({
    name: "action",
    message: "Select a operation: ",
    type: list,
    choices: [
      "View departments",
      "View roles",
      "View employees",
      inquirer.Separator(),
      "Add department",
      "Add role",
      "Add employee",
      inquirer.Separator(),
      "Update employee role",
      inquirer.Separator(),
      "Exit"
    ]
  })

}

console.log(chalk.magenta("EMPLOYEE TRACKER"))





function displayDepartments() {
  console.log("Not IMPLEMENTED");
}

function displayRoles() {
  console.log("Not IMPLEMENTED");
}

function displayEmployees() {
  console.log("Not IMPLEMENTED");
}

function addDepartment() {
  console.log("Not IMPLEMENTED");
}

function addRole() {
  console.log("Not IMPLEMENTED");
}

function addEmployee() {
  console.log("Not IMPLEMENTED");
}

function editEmployeeRole() {
  console.log("Not IMPLEMENTED");
}
getOperation();
