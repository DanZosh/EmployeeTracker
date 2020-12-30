//MODULES
	//Import connection	
    const connection = require("./connection");

module.exports = {

    getEmployees_1(){
    //     return connection.query("SELECT * FROM employees ")
    // },
        return connection.query("SELECT e.id, e.first_name, e.last_name, r.title, r.salary, d.name,CONCAT(m.first_name, ' ', m.last_name) AS Manager FROM  employees e LEFT JOIN roles r on e.role_id = r.id LEFT JOIN departments d on r.department_id = d.id LEFT JOIN employees m on e.manager_id = m.id;")
    },

    getEmployees_byDept_2(data){
        // return connection.query("SELECT * FROM employees WHERE role_id = ?", data)
        return connection.query("SELECT * FROM employees INNER JOIN roles on employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id WHERE role_id IN (SELECT id FROM roles WHERE department_id = ?)", data)
    },

    viewEmployees_byManager_3(data){
        return connection.query("SELECT * FROM employees INNER JOIN roles on employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id  WHERE manager_id = ?", data)
    },
    getManagers(){
        return connection.query("SELECT * FROM employees WHERE manager_id IS NULL")
    },
    createEmployee_4(data){
        // console.log("from Create Employee:")
        // console.log(data)
        connection.query(
            "INSERT INTO employees SET ?", data
        );
    },
    deleteEmployee_5(data){
        return connection.query("DELETE FROM employees WHERE id = ?", data)
    },
    reviseEmployeeRole_6(data){
        return connection.query("UPDATE employees SET ? WHERE ?", data)
        // the argument `data` should follow the format   [{role_id:var1},{id:var2}]
    },


    getRoles_8(){
        return connection.query("SELECT * FROM roles INNER JOIN departments ON roles.department_id = departments.id")
    },
    createRole_9(data) {
        console.log("Ceating new Roll...")
        console.log(data)
        connection.query(
            "INSERT INTO roles SET ?", data
        );
    },
    deleteRole_10(data){
        return connection.query("DELETE FROM roles WHERE id = ?", data)
    },
    getDepartments_11(){
        return connection.query("SELECT * FROM departments")
    },
    createDepartment_12(data) {
        console.log('Creating a new department...')
        console.log(`The ${data.name} department has been created \n`)
        return connection.query(
            "INSERT INTO departments SET ?", data
        );
    },

    deleteDepartment_13(data) {
        console.log('Deleting department...')

        return connection.query(
            "DELETE FROM departments WHERE id=?", data
        );
    },



}