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
	//Import db folder	
	const db = require("./db");
const connection = require('./db/connection');



function startQuestions(){

	const startMenu = [
		{
			type: 'list',
			name: 'startMenu',
			message: 'WHAT WOULD YOU LIKE TO DO?',
			choices:[
				'1. View all employees',
				// '2. View all employees by department',
				// '3. View all employees by manager',
				// '4. Add employee',
				// '5. Remove employee',
				// '6. Update employee role',
				// '7. Update employee manager',
				'8. View all roles',
				// '9. Add roles',
				// '10. Remove roles',
				'11. View all departments',
				'12. Add department',
				// '13. Remove department',
				'14. QUIT \n \n'
			]
		}];
	inquirer
		.prompt(startMenu)
		.then((response) => {
			// console.log('success');
			// console.log(response.startMenu);
			switch(response.startMenu){
				case '1. View all employees':
					viewEmployees_1();
					break;
				
				case '8. View all roles':
					viewRoles_8();
					break;

				// case '9. Add roles':
				// 	addRoles_9();
				// 	break;

				case '11. View all departments':
					viewDepartments_11();
					break;

				case '12. Add department':
					addDepartments_12();
					break;
				
				default:
					connection.end();

					}
			}
		);	
}
startQuestions();

function viewEmployees_1(){
	console.log("\n\n Here are the roles:");
		db
		.getEmployees()
		.then((results) =>{
		console.table(results);
		startQuestions();
		});
	}
	function viewRoles_8(){
		console.log("\n\n Here are the roles:");
		db
		.getRoles()
		.then((results) => {
		console.table(results);
		startQuestions();
		});
	}
	
	// function addRoles_9(){
	// 	createRole()
	
	// }

function viewDepartments_11(){
	console.log("\n\n Here are the departments:");
	db
	.getDepartments()
	.then((results) =>{
	console.table(results);
	startQuestions();
	});
}
function addDepartments_12(){
	console.log("\n\n Lets add a new Department!");
	inquirer
	.prompt({
		type:'input',
		name: 'name',
		message: 'What is the name of the department?'
		}
	)
	.then((results) => {
		
	db
	.createDepartment(results);
	startQuestions();
	});
}




