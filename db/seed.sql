-- Creates new rows containing data in all named columns for `department`--
INSERT INTO departments (name)
VALUES ("Sales");

-- Creates new rows containing data in all named columns for `role`--
INSERT INTO roles (title, salary, department_id)
VALUES ("ManagerS", 100000, 1),("ManagerA", 100000, 16),("ManagerM", 100000, 17),("ManagerE", 100000, 18), ("Proll_1S", 50000, 1),("Proll_1A", 50000, 16),("Proll_1M", 50000, 17),("Proll_1E", 50000, 18);


-- Creates new rows containing data in all named columns for `employee` --
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Dan", "Maier", 2, 4);