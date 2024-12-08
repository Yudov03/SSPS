CREATE DATABASE IF NOT EXISTS SPSS; -- Tạo database với tên SPS
USE SPSS;
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE Printer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ip VARCHAR(15) NOT NULL,
    location VARCHAR(255) NOT NULL,
    status ENUM('D', 'E') DEFAULT 'D', -- D: Disabled, E: Enabled
    lastUsed DATETIME,
    `condition` ENUM('U', 'M', 'B', 'R'), -- U: Unavailable, M: Maintenance, B: Busy, R: Ready
    description TEXT
);
CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    pageBalance INT DEFAULT 0
);
CREATE TABLE Configuration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    defaultPageLimit INT DEFAULT 100,
    allowedFileTypes TEXT,
    lastChangeDate DATETIME DEFAULT CURRENT_TIMESTAMP
);