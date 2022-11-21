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
        { name: "View departments", value: listDepartments },
        { name: "View roles", value: listRoles },
        { name: "View employees", value: listEmployees },

        { name: "Add department", value: addDepartment },
        { name: "Add role", value: addRole },
        { name: "Add employee", value: addEmployee },

        { name: "Update employee role", value: updateEmployeeRole },

        { name: "Exit", value: process.exit }
      ]
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
  await queryDB.queryAllEmployees();
}

async function addDepartment() {
  const data = await inquirer.prompt({
    name: "name",
    message: "Enter the department name: ",
    validate: answer => (answer?.trim() ? true : "Enter something...")
  });
  console.log(data);
  await queryDB.addDepartment([data.name]);
}

async function addRole() {
  const data = await inquirer.prompt([
    {
      name: "title",
      message: "Enter the role title: ",
      validate: answer => (answer?.trim() ? true : "Enter something...")
    },
    {
      name: "salary",
      message: "Enter the role salary: ",
      validate: answer => (answer?.trim() ? true : "Enter something...")
    },
    {
      name: "department_id",
      message: "Enter the role department_id: ",
      validate: answer => (answer?.trim() ? true : "Enter something...")
    }
  ]);
  await queryDB.addRole([data.title, Number(data.salary), Number(data.department_id)]);
}

async function addEmployee() {
  const data = await inquirer.prompt([
    {
      name: "first_name",
      message: "Enter the employee first name: ",
      validate: answer => (answer?.trim() ? true : "Enter something...")
    },
    {
      name: "last_name",
      message: "Enter the employee last name: ",
      validate: answer => (answer?.trim() ? true : "Enter something...")
    },
    {
      name: "role_id",
      message: "Enter the employee role id: ",
      validate: answer => (answer?.trim() ? true : "Enter something...")
    },
    {
      name: "manager_id",
      message: "Enter the employee manager id"
    }
  ]);

  await queryDB.addEmployee([
    data.first_name,
    data.last_name,
    Number(data.role_id),
    Number(data.manager_id)
  ]);
}

async function updateEmployeeRole() {
  const data = await inquirer.prompt([{
    name: "role_id",
    message: "What's the new role id?"
  },
  {
    name: "id",
    message:"What is the employee id?"
  }]);

  await queryDB.updateEmployeeRole([Number(data.role_id), Number(data.id)])
}
console.log(chalk.magenta("EMPLOYEE TRACKER"));
menu();
