-- MySQL Script generated by MySQL Workbench
-- Mon Sep  5 13:32:09 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`ALUMNO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`ALUMNO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`ALUMNO` (
  `IDENTIFICACION` INT NOT NULL AUTO_INCREMENT,
  `NOMBRE` TEXT(20) NOT NULL,
  `APELLIDO` TEXT(20) NOT NULL,
  `CURSO` TEXT(20) NOT NULL,
  PRIMARY KEY (`IDENTIFICACION`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`MATERIA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`MATERIA` ;

CREATE TABLE IF NOT EXISTS `mydb`.`MATERIA` (
  `CODIGO_MATERIA` INT NOT NULL,
  `NOMBRE` TEXT(20) NULL,
  `VERSION` INT NULL,
  `GRADO` INT NULL,
  `ALUMNO_IDENTIFICACION` INT NOT NULL,
  PRIMARY KEY (`CODIGO_MATERIA`),
  INDEX `fk_MATERIA_ALUMNO1_idx` (`ALUMNO_IDENTIFICACION` ASC) VISIBLE,
  CONSTRAINT `fk_MATERIA_ALUMNO1`
    FOREIGN KEY (`ALUMNO_IDENTIFICACION`)
    REFERENCES `mydb`.`ALUMNO` (`IDENTIFICACION`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`PROFESOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`PROFESOR` ;

CREATE TABLE IF NOT EXISTS `mydb`.`PROFESOR` (
  `CODIGO_PROFESOR` INT NOT NULL,
  `NOMBRE` TEXT(20) NULL,
  `APELLIDO` TEXT(20) NULL,
  `MATERIA_CODIGO_MATERIA` INT NOT NULL,
  PRIMARY KEY (`CODIGO_PROFESOR`),
  INDEX `fk_PROFESOR_MATERIA_idx` (`MATERIA_CODIGO_MATERIA` ASC) VISIBLE,
  CONSTRAINT `fk_PROFESOR_MATERIA`
    FOREIGN KEY (`MATERIA_CODIGO_MATERIA`)
    REFERENCES `mydb`.`MATERIA` (`CODIGO_MATERIA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
