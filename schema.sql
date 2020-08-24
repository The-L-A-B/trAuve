-- Drops the trAuve if it exists currently --
DROP DATABASE IF EXISTS 'trauve';
-- Creates the "trauve" database --
CREATE DATABASE 'trauve';


CREATE TABLE 'trauve' (
    'id' Int(11) AUTO_INCREMENT NOT NULL,
    'type' VARCHAR( 255 ) NOT NULL,
    'price' Int (11), 
    'name' VARCHAR( 255 ) NOT NULL,
    'size' VARCHAR( 255 ) NOT NULL,
)