const inquirer = require("inquirer");
const chalk = require("chalk");


async function getOperation() {
  try {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "What do you wish to do?",
      choices: [
        "View departments",
        "View roles",
        "View employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee role",
      ],
    });

    const index = choices.findIndex(action);
    switch (index) {
      case 0:
        displayDepartments();
        break;
      case 1:
        displayRoles();
        break;
      case 2:
        displayEmployees();
        break;
      case 3:
        addDepartment();
        break;
      case 4:
        addRole();
        break;
      case 5:
        addEmployee();
        break;
      case 6:
        editEmployeeRole();
        break;
      default:
        console.log("Invalid");
        getOperation();
    }
  } catch (err) {
    console.log(err);
  }
}


async function menu() {
  const {category} = await inquirer.prompt([{
    name: "",
    message: "Select a category:",
    choices = ['Department', 'Role', 'Employee', 'Quit']
}])
  operations[category]()
}

console.log(chalk.magenta("EMPLOYEE TRACKER")





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
