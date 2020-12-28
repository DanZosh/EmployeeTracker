-- Drops the employees_db if it exists currently --
DROP DATABASE IF EXISTS employees_db;
-- Creates the "employees_db" database --
CREATE DATABASE employees_db;
-- Makes it so all of the following code will affect employees_db --
USE employees_db;

-- departments TABLE
-- Creates the table "departments" within employees_db --
CREATE TABLE departments (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT(11) AUTO_INCREMENT NOT NULL,
-- Makes a string column called "name" which cannot contain null --
name VARCHAR(30) NOT NULL,
-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id)
);

SELECT * FROM departments;

-- roles TABLE
-- Creates the table "roles" within employees_db --
CREATE TABLE roles (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT(11) AUTO_INCREMENT NOT NULL,
-- Makes a string column called "title" which cannot contain null --
title VARCHAR(30) NOT NULL,
-- Makes an integer column called "salary" which cannot contain null --
salary DECIMAL(10,2) NOT NULL,
-- Makes an integer column called "department_id" which cannot contain null --
department_id INT(11) NOT NULL,
-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id),
-- Set foreign key to the department key
FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- DROP TABLE roles;

SELECT * FROM roles;

-- employees TABLE
-- Creates the table "employee" within employees_db --
CREATE TABLE employees (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT(11) AUTO_INCREMENT NOT NULL,
-- Makes a string column called "first_name" which cannot contain null --
first_name VARCHAR(30) NOT NULL,
-- Makes a string column called "last_name" which cannot contain null --
last_name VARCHAR(30) NOT NULL,
-- Makes an integer column called "role_id" which cannot contain null --
role_id INT(11) NOT NULL,
-- Makes an integer column called "manager_id" which can contain null --
manager_id INT(11),
-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id),
-- Set foreign key to the department key
FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
-- Makes an integer column called "manager_id" which cannot contain null --
FOREIGN KEY(manager_id)
    REFERENCES employees (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- DROP TABLE employees;

SELECT * FROM employees;
