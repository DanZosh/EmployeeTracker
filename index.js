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
				'13. Remove department',
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

				case '13. Remove department':
					removeDepartments_13();
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
		message: 'What is the name of the new department?'
		}
	)
	.then((results) => {
		
	db
	.createDepartment(results);
	startQuestions();
	});
}

function removeDepartments_13(){
	console.log("\n\n OK, let's remove a Department!");
	// let currentDepartments = []
	//get the departments and store in `currentDepartments`
	db
	.getDepartments()
	.then( (departments) => {
		// //WHAT DOES OUR RAW DATA LOOK LIKE
		// 	console.log("raw: ")
		// 	console.log(departments)

			//REMOVE THE DATA FROM THE ROWDATAPACKET
			// currentDepartments = JSON.stringify(departments)
			// 	console.log("stringified: ")
			// 	console.log(currentDepartments)
			//stringified is not as effective as map because while we're getting the objects out of RowDataPacket, we really need to transform the object to have keys of value and name for inquirer to work. so we'd have to map or do a for loop on the array to change the key names anyway.
		const departmentChoices = departments.map((boop) => ({
			value:boop.id, //`value` is what gets returned in an object where the key is prompt.name and the value is boop.id when the user selects from the list provided, the list provided, though, is the `name`
			name:boop.name
		}))
		// //WHAT DOES OUR RAW DATA LOOK LIKE
		// console.log( "mapped: ")
		// console.log(departmentChoices)
	inquirer
	.prompt([
		{
		type:'list',
		name: 'department_id',
		message: 'Select a department to be removed.',
		choices:departmentChoices
		}
	])
	.then((results) => {
		// console.log("results =")
		// console.log(results)

		//GET THE NAME OF THE REMOVED DEPARTMENT TO ALERT THE USER
		let deletedNameArr = departmentChoices.filter((anObject) => {
			if (anObject.value == results.department_id){
				return(anObject)
			}
		})
		let deletedName = (deletedNameArr[0].name)
		// console.log(deletedName)
	db
	.deleteDepartment(results.department_id);
	console.log(`The ${deletedName} department has been deleted \n`)
	startQuestions();
	});
})
}
