const mysql = require("mysql2");
require("dotenv").config();

const queries = require("./queries.js");
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
    return rows;
  }

  async queryAllRoles() {
    const [rows] = await this.connection.query(queries.allRoles);
    return rows;
  }

  async queryAllEmployees() {
    const [rows] = await this.connection.query(queries.allEmployees);
    return rows;
  }

  async addToDB(key, data) {
    await this.connection.query(queries[key], data);
  }

  async updateEmployeeRole(data) {
    await this.connection.query(queries.updateEmployeeRole, data);
  }
}

const queryDB = new QueryDB();

module.exports = queryDB;
