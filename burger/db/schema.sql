-- found a cool trick online to save time, use if not after create database instead of asking to delete if exists
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured tinyint default false,
    PRIMARY KEY (id)
);