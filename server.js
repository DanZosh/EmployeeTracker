//DEPENDENCIES
// Import the mysql package
const mysql = require('mysql');
// Import the inquirer package
const inquirer = require("inquirer");
// Import console.table
const cTable = require('console.table');
//Import art
const art = require("./art")
    /* and now run */ art()


	// Create the connection object
	const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '6Japan9!',
	database: "employees_db",
	});
	// Run the connection
	connection.connect((err) => {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
	connection.end();
	});
