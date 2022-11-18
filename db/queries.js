const queries = {
    allDepartments: `SELECT dep.id, dep.name FROM departments dep;`,
    allRoles: `
    SELECT rol.title,
           rol.id, 
           dep.department, 
           rol.salary 
    FROM roles rol
    LEFT JOIN departments dep on rol.department_id = dep.id;`,
    allEmployees: `
    SELECT emp.id,
           emp.first_name,
           emp.last_name,
           rol.title,
           dep.department,
           rol.salary,
           CONCAT(man.first_name, ' ', man.last_name)
    FROM employees emp
    LEFT JOIN roles rol on emp.role_id = rol.id
    LEFT JOIN departments dep on rol.department_id = dep.id
    LEFT JOIN employees man on emp.manager_id = man.id;`,
    addDepartment: `INSERT INTO departments (name) VALUES ?`,
    addRole: `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
    addEmployee: `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`,
    updateEmployeeRole: `UPDATE employees set role_id = ? WHERE id = ?`
  };
  
  module.exports = queries;
  