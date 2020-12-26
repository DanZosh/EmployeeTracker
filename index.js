//DEPENDENCIES
//NPM PACKAGES
	// Import the mysql package
	const mysql = require('mysql');
	// Import the inquirer package
	const inquirer = require("inquirer");
	// Import console.table
	const cTable = require('console.table');


//MODULES
	//Import art	
	const art = require("./art")
	//Import connection	
	const connection = require("./db/connection")


	const startMenu = [
		{
			type: 'list',
			name: 'startMenu',
			message: 'WHAT WOULD YOU LIKE TO DO?',
			choices:[
				'View all employees',
				'View all employees by department',
				'View all employees by manager',
				'Add employee',
				'Remove employee',
				'Update employee role',
				'Update employee manager',
				'View all roles',
				'Add roles',
				'Remove roles',
				'View all departments',
				'Add department',
				'Remove department',
				'QUIT'
			]
		},
	]
	console.log(startMenu)


	inquirer
		.prompt(startMenu).then((response) => {
			console.log('success');
			console.log(response);
			
});