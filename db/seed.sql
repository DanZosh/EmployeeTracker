-- Creates new rows containing data in all named columns for `department`--
INSERT INTO department (name)
VALUES ("Sales");

-- Creates new rows containing data in all named columns for `role`--
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 100000, 1);

-- Creates new rows containing data in all named columns for `employee` --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dan", "Maier", 2, 4);