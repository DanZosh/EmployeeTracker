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
				'4. Add employee',
				// '5. Remove employee',
				// '6. Update employee role',
				// '7. Update employee manager',
				'8. View all roles',
				'9. Add roles',
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

				case '4. Add employee':
					addEmployees_4();
					break;
				
				case '8. View all roles':
					viewRoles_8();
					break;
				case '9. Add roles':
					addRoles_9();
					break;
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
		.getEmployees_1()
		.then((results) =>{
		console.table(results);
		startQuestions();
		});
	}


	// 4. Add employee

	function addEmployees_4(){
		console.log("\n\n OK, let's add an Employee!");
	db
	.getRoles_8()
	.then( (roles) => {
		console.log("raw roles")
		console.log(roles)
		
		const rolesChoices = roles.map((boop) => ({
			value:boop.id, 
			name:boop.title
		}))
		

	db
	.getEmployees_1()
	.then( (managers) => {
		console.log("raw managers")
		console.log(managers)
		
		const managersChoices = managers.map((boop) => ({
			value:boop.id, 
			name:boop.first_name+' '+boop.last_name
		}))
//ADD A NULL OBJECT IN CASE THE EMPLOYEE HAS NO MANAGER
		const nullObj = {
			value:null, 
			name:null
		};
		managersChoices.push(nullObj);
		console.log(managersChoices);
	inquirer
	.prompt([
		{
		type:'input',
		name: 'first_name',
		message: "What is the employee's first name"
		},
		{
		type:'input',
		name: 'last_name',
		message: "What is the employee's last name",
		},
		{
		type:'list',
		name: 'role_id',
		message: 'Select the role in which they will serve.',
		choices:rolesChoices
		},
		// {
		// type:'list',
		// name: 'managerBoolean',
		// message: "What is the employee's last name",
		// choices:["yes","no"]
		// },
		{
		type:'list',
		name: 'manager_id',
		message: "Select the manager serving the employee, select null if not applicable.",
		choices:managersChoices
		}
	])
	
	.then((results) => {
		console.log("Raw input results:")
		console.log(results)

		resultsObject = {
			first_name:results.first_name,
			last_name: results.last_name,
			role_id: results.role_id,
			manager_id:results.manager_id
		}


		// //GET THE NAME OF THE ROLE TO ALERT THE USER
		let roleNameArr = rolesChoices.filter((anObject) => {
			if (anObject.value == results.role_id){
				return(anObject)
			}
		})
		let roleName = (roleNameArr[0].name)
		console.log(roleName)
	db
	.createEmployee_2(resultsObject);
	console.log(`The employee ${results.first_name} ${results.last_name} has been added as ${roleName}. \n`)
	//OPPORTUNITY TO FLEX HERE, ADD BACK THE ROLL

	startQuestions();
		});
	});
});

}




















	function viewRoles_8(){
		console.log("\n\n Here are the roles:");
		db
		.getRoles_8()
		.then((results) => {
		console.table(results);
		startQuestions();
		});
	}
	
	function addRoles_9(){
		console.log("\n\n OK, let's add a Role!");
	db
	.getDepartments_11()
	.then( (departments) => {
		
		const departmentChoices = departments.map((boop) => ({
			value:boop.id, 
			name:boop.name
		}))

	inquirer
	.prompt([
		{
		type:'input',
		name: 'roleTitle',
		message: 'What is the role Title.'
		},
		{
		type:'input',
		name: 'roleSalary',
		message: 'what is the salary of the role.',
		},
		{
		type:'list',
		name: 'department_id',
		message: 'Select the department to which the role will be added.',
		choices:departmentChoices
		},
	]
	)
	
	.then((results) => {
		console.log("Raw input results:")
		console.log(results)

		resultsObject = {
			title:results.roleTitle,
			salary: results.roleSalary,
			department_id:results.department_id
		}


		//GET THE NAME OF THE REMOVED DEPARTMENT TO ALERT THE USER
		let deptNameArr = departmentChoices.filter((anObject) => {
			if (anObject.value == results.department_id){
				return(anObject)
			}
		})
		let deptName = (deptNameArr[0].name)
		// console.log(deptName)
	db
	.createRole_9(resultsObject);
	console.log(`The role ${results.roleTitle} with a salary of $${results.roleSalary} has been added to the ${deptName} department. \n`)

	startQuestions();
	});
})
}










function viewDepartments_11(){
	console.log("\n\n Here are the departments:");
	db
	.getDepartments_11()
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
	.createDepartment_12(results);
	startQuestions();
	});
}

function removeDepartments_13(){
	console.log("\n\n OK, let's remove a Department!");
	// let currentDepartments = []
	//get the departments and store in `currentDepartments`
	db
	.getDepartments_11()
	.then( (departments) => {
		// //WHAT DOES OUR RAW DATA LOOK LIKE
		// 	console.log("raw: ")
		// 	console.log(departments)

			//REMOVE THE DATA FROM THE RowDataPacket
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
		let deptNameArr = departmentChoices.filter((anObject) => {
			if (anObject.value == results.department_id){
				return(anObject)
			}
		})
		let deletedName = (deptNameArr[0].name)
		// console.log(deletedName)
	db
	.deleteDepartment_13(results.department_id);
	console.log(`The ${deletedName} department has been deleted \n`)
	startQuestions();
	});
})
};
