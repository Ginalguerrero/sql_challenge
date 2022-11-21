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
        { name: "View roles", value: listRoles },
        { name: "View employees", value: listEmployees },

        { name: "Add department", value: addDepartment },
        { name: "Add role", value: addRole },
        { name: "Add employee", value: addEmployee },

        { name: "Update employee role", value: updateEmployeeRole },

        { name: "Exit", value: process.exit },
      ],
    });
    await action();
    menu();
  } catch (err) {
    console.log(chalk.bgRed(err));
  }
}

async function listDepartments() {
  await queryDB.queryAllDepartments();
}


async function listRoles() {
  await queryDB.queryAllRoles();
}

async function listEmployees() {
  await queryDB.queryAllEmployees()
}

async function addDepartment() {
  const  data = await inquirer.prompt({
    name: "name",
    message: "Enter the department name: ",
    validate: () => answer?.trim() ? true: "Enter something..."
  })
  await queryDB.addDepartment(data);
}

async function addRole() {
  const data = await inquirer.prompt([{
    name: "title",
    message: "Enter the role title: ",
    validate: () => answer?.trim() ? true: "Enter something..."
  },
  {
    name: "salary",
    message: "Enter the role salary: ",
    validate: () => answer?.trim() ? true: "Enter something..."
  },{
    name: "department_id",
    message: "Enter the role department_id: ",
    validate: () => answer?.trim() ? true: "Enter something..."
  },
])
  await queryDB.addRole(data)
}

async function addEmployee() {
  const data = await inquirer.prompt([{
    name: "first_name",
    message: "Enter the employee first name: ",
    validate: () => answer?.trim() ? true: "Enter something..."
  },
  {
    name: "last_name",
    message: "Enter the employee last name: ",
    validate: () => answer?.trim() ? true: "Enter something..."
  },{
    name: "role_id",
    message: "Enter the employee role id: ",
    validate: () => answer?.trim() ? true: "Enter something..."
  }, {
    name: "manager_id",
    message: "Enter the emplotee manager id"
  }
])

  await queryDB.addEmployee(data)
}


function updateEmployeeRole(){
  const data = inquirer.prompt()
}
console.log(chalk.magenta("EMPLOYEE TRACKER"));
menu();
