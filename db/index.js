//MODULES
	//Import connection	
    const connection = require("./connection");

module.exports = {

    getEmployees_1(){
        return connection.query("SELECT * FROM employees")
    },
    getManagers(){
        //ATTEMPT1
        // return connection.query("SELECT * FROM employees WHERE title LIKE %manager%")
        //ATTEMPT2
        return connection.query("SELECT id, CONCAT(first_name, ' ', last_name) AS name FROM employee WHERE id IN (SELECT manager_id FROM employee WHERE manager_id IS NOT NULL GROUP BY manager_id")
        // FOR TESTING
        return connection.query("SELECT * FROM employees")
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