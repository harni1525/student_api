CREATE DATABASE  IF NOT EXISTS `studentmanagement1` ;
USE `studentmanagement1`;

DROP TABLE IF EXISTS `studentdetails`;

CREATE TABLE `studentdetails` (
  `studentdetailsid` bigint NOT NULL AUTO_INCREMENT,
  `studentname` text NOT NULL,
  `branch` text NOT NULL,
  `gender` text NOT NULL,
  PRIMARY KEY (`studentdetailsid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
