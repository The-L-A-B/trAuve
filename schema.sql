-- Drops the trAuve if it exists currently --
DROP DATABASE IF EXISTS trauve;
-- Creates the "trauve" database --
CREATE DATABASE trauve;

USE trauve;

CREATE TABLE Product (
    id int AUTO_INCREMENT NOT NULL,
    type varchar(255) NOT NULL,
    price int NOT NULL, 
    name varchar( 255 ) NOT NULL,
    description varchar(255) NOT NULL,
    size varchar( 255 ) NOT NULL,
    quantity int NOT NULL,
    PRIMARY KEY (id)
)