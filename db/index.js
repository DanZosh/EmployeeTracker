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
        console.log("Create Role 9")
        // connection.query(
            // "INSERT INTO roles SET ?", 
            // {
            //     title: data.title,
            //     salary: data.salary,
            //     department_id: data.department_id,
            // }
        //   , function(err) {
        //     if (err) throw err;
        //   }
        // );
    }

}