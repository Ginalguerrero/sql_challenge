const mysql = require("mysql2");
const cTable = require('console.table');
require("dotenv").config();


const chalk = require("chalk");
const queries = require("./queries");

class QueryDB {
  constructor() {
    this.connection = mysql
      .createConnection(
        {
          host: "localhost",
          user: process.env.USER_DB,
          password: process.env.PASSWORD_DB,
          database: process.env.DATABASE
        },
        console.log("Connected!")
      )
      .promise();

  }

  async queryAllDepartments() {
    const [rows] = await this.connection.query(queries.allDepartments);

    console.log(chalk.bgBlue("---ALL DEPARTMENTS---"));
    console.table(rows);
  }

  async queryAllRoles() {
    const [rows] = await this.connection.query(queries.allRoles);
    console.log(chalk.bgBlue("---ALL ROLES---"));

    console.table(rows);
  }

  async queryAllEmployees() {
    const [rows] = await this.connection.query(queries.allEmployees);
    console.log(chalk.bgBlue("---ALL EMPLOYEES---"));
    console.table(rows);
  }

  async addToDB(key, data) {
    await this.connection.query(queries[`add${key}`], data);
    console.log(chalk.bgGreen(`Added ${key} successfully!`))
  }

  async addDepartment(data) {
    this.addToDB('Department', data);
  }

  async addRole(data) {
    this.addToDB('Role', data);
  }

  async addEmployee(data) {
    this.addToDB('Employee', data);
  }

  async updateEmployeeRole(data) {
    await this.connection.query(queries.updateEmployeeRole, data);
    console.log(chalk.bgGreen('Updated employee role successfully!'));
  }
}

const queryDB = new QueryDB();

module.exports = queryDB;
