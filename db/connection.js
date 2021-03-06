//DEPENDENCIES
//NPM PACKAGES
	// Import the mysql package
    const mysql = require('mysql');

    //NODE PACKAGES
	// Import the utils package
    const util = require('util');


// Create the connection object
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'enter your password',
    database: "employees_db",
    });

    // // Run the connection
    // connection.connect((err) => {
    // if (err) throw err;
    // console.log('connected as id ' + connection.threadId);
    // connection.end();
    // });

    connection.connect()
    connection.query = util.promisify(connection.query);

    module.exports = connection;
