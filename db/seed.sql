-- Creates new rows containing data in all named columns for `department`--
INSERT INTO departments (name)
VALUES ("Sales"), ("Marketing"), ("Accounting"), ("Engineering");
SELECT * FROM departments;

-- Creates new rows containing data in all named columns for `role`--
INSERT INTO roles (title, salary, department_id)
VALUES ("ManagerS", 100000, 1),("ManagerA", 100000, 2),("ManagerM", 100000, 3),("ManagerE", 100000, 4), ("Proll_1S", 50000, 1),("Proll_1A", 50000, 2),("Proll_1M", 50000, 3),("Proll_1E", 50000, 4);
SELECT * FROM roles;

-- Creates new rows containing data in all named columns for `employee` --
INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Aan", "Aaier", 1), ("Ban", "Baier", 2), ("Can", "Caier", 3), ("Dan", "Daier", 4);
SELECT * FROM employees;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Aain", "Arow", 5, 1), ("Bain", "Brow", 6, 2), ("Cain", "Crow", 7, 3), ("Dain", "Drow", 8, 4);
SELECT * FROM employees;