//MODULES
	//Import connection	
    const connection = require("./connection");

module.exports = {
    getDepartments_11(){
        return connection.query("SELECT * FROM departments")
    },
    getRoles_8(){
        return connection.query("SELECT * FROM roles")
    },
    getEmployees_1(){
        return connection.query("SELECT * FROM employees")
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

    createRole_9(data) {
        console.log("from Create Roll:")
        console.log(data)
        connection.query(
            "INSERT INTO roles SET ?", data
        );
    }

}