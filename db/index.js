//MODULES
	//Import connection	
    const connection = require("./connection");

module.exports = {
    getDepartments(){
        return connection.query("SELECT * FROM departments")
    },
    getRoles(){
        return connection.query("SELECT * FROM roles")
    },
    getEmployees(){
        return connection.query("SELECT * FROM employees")
    },

    createDepartment(data) {
        console.log('Creating a new department...')
        console.log(`The ${data.name} department has been created \n`)
        return connection.query(
            "INSERT INTO departments SET ?", data
        );
    },

    deleteDepartment(data) {
        console.log('Deleting department...')

        return connection.query(
            "DELETE FROM departments WHERE id=?", data
        );
    },

    // createRole(data) {
    //     connection.query(
    //         "INSERT INTO roles SET ?", 
    //         {
    //             title: data.title,
    //             salary: data.salary,
    //             department_id: data.department_id,
    //         }
    //     //   , function(err) {
    //     //     if (err) throw err;
    //     //   }
    //     );
    // }

}