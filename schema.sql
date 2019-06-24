CREATE DATABASE cowlist;

USE cowlist;
CREATE TABLE cows (
  id INT NOT NULL,
  name VARCHAR(200),
  description VARCHAR(500),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < ./schema.sql
 *  to create the database and the tables.*/

