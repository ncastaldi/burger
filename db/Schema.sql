-- Drop database
DROP DATABASE IF EXISTS burgers_db;

-- Create database
CREATE DATABASE burgers_db;

-- Use database
USE burgers_db;

-- Create tables
CREATE TABLE burgers (
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);