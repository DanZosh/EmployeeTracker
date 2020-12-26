-- Drops the employees_db if it exists currently --
DROP DATABASE IF EXISTS employees_db;
-- Creates the "employees_db" database --
CREATE DATABASE employees_db;
-- Makes it so all of the following code will affect employees_db --
USE employees_db;

-- department TABLE
-- Creates the table "people" within employees_db --
CREATE TABLE department (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT(11) AUTO_INCREMENT NOT NULL,
-- Makes a string column called "name" which cannot contain null --
name VARCHAR(30) NOT NULL,
-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id)
);

SELECT * FROM department;

-- role TABLE
-- Creates the table "role" within employees_db --
CREATE TABLE role (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT(11) AUTO_INCREMENT NOT NULL,
-- Makes a string column called "title" which cannot contain null --
title VARCHAR(30) NOT NULL,
-- Makes an integer column called "salary" which cannot contain null --
salary DECIMAL(10,2) NOT NULL,
-- Makes an integer column called "department_id" which cannot contain null --
department_id INT(11) NOT NULL,
-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id)
);

SELECT * FROM role;

-- role TABLE
-- Creates the table "employee" within employees_db --
CREATE TABLE employee (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT(11) AUTO_INCREMENT NOT NULL,
-- Makes a string column called "first_name" which cannot contain null --
first_name VARCHAR(30) NOT NULL,
-- Makes a string column called "last_name" which cannot contain null --
last_name VARCHAR(30) NOT NULL,
-- Makes an integer column called "role_id" which cannot contain null --
role_id INT(11) NOT NULL,
-- Makes an integer column called "manager_id" which cannot contain null --
manager_id INT(11),
-- Sets id as this table's primary key which means all data contained within it will be unique --
PRIMARY KEY (id)
);

SELECT * FROM employee;