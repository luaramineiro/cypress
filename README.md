# Database Testing (SQL) in Cypress

## MySQL Database setup

We need to create the database to execute the test scenarios.

1. Install mysql in your machine
2. Log into MySQL as root `mysql -u root -p`
3. Create a new database user `mysqladmin -u root password 'secretpassword'`
4. Alter the user permissions `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'secretpassword';`
5. Create a new database `CREATE DATABASE db_name;`
6. Create a procedure

```
DELIMITER //

CREATE PROCEDURE GetAllPeople()
BEGIN
 SELECT * FROM People;
END //

DELIMITER ;
```

7. Quit MySQL using `\q`

## Screenshots

Scenario 1

![Scenario 1](/images/scenario1.png)

Scenario 2

![Scenario 2](/images/scenario2.png)

Scenario 3

![Scenario 3](/images/scenario3.png)

Scenario 4

![Scenario 4](/images/scenario4.png)