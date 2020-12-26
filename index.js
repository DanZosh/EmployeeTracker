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
	const db = require("./db")

db.getDepartments().then((results) =>
	console.table(results)
)

// function startQuestions(){

// 	const startMenu = [
// 		{
// 			type: 'list',
// 			name: 'startMenu',
// 			message: 'WHAT WOULD YOU LIKE TO DO?',
// 			choices:[
// 				'1. View all employees',
// 				'2. View all employees by department',
// 				'3. View all employees by manager',
// 				'4. Add employee',
// 				'5. Remove employee',
// 				'6. Update employee role',
// 				'7. Update employee manager',
// 				'8. View all roles',
// 				'9. Add roles',
// 				'10. Remove roles',
// 				'11. View all departments',
// 				'12. Add department',
// 				'13. Remove department',
// 				'14. QUIT'
// 			]
// 		}];
// 	inquirer
// 		.prompt(startMenu)
// 		.then((response) => {
// 			// console.log('success');
// 			console.log(response);
// 			console.log(startMenu[0]);
// 			switch(response){
// 				case startMenu[0]:
// 					// function question1(){
// 						console.log("here are the employees");
// 						break;
				
// 				case startMenu[1]:
// 					// question2(){
// 						console.log("here are the departments");
// 						break;
// 					}
// 			}
// 		);	
// }

// startQuestions()