//MODULES
	//Import connection	
    const connection = require("./connection");

module.exports = {

    getEmployees_1(){
        return connection.query("SELECT * FROM employees")
    },

    getEmployees_byDept2(data){
        // return connection.query("SELECT * FROM employees WHERE role_id = ?", data)
        return connection.query("SELECT * FROM employees WHERE role_id IN (SELECT id FROM roles WHERE department_id = ?)", data)
    },

    // viewEmployees_byManager3(){
    //     return connection.query("SELECT * FROM employees WHERE manager_id = ?", data)
    // },


    getManagers(){
        return connection.query("SELECT * FROM employees WHERE manager_id IS NULL")
    },

    createEmployee_2(data){
        console.log("from Create Employee:")
        console.log(data)
        connection.query(
            "INSERT INTO employees SET ?", data
        );
    },

    getRoles_8(){
        return connection.query("SELECT * FROM roles")
    },
    createRole_9(data) {
        console.log("from Create Roll:")
        console.log(data)
        connection.query(
            "INSERT INTO roles SET ?", data
        );
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