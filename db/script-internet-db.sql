-- MySQL Script
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `internet_db` DEFAULT CHARACTER SET utf8;
USE `internet_db`;

-- Tabla Cliente
CREATE TABLE IF NOT EXISTS `Cliente` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `apellido` VARCHAR(45) NOT NULL,
  `dni` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

-- Tabla Servicio
CREATE TABLE IF NOT EXISTS `Servicio` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `cantidadMegas` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

-- Tabla Conexion
CREATE TABLE IF NOT EXISTS `Conexion` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `fechaAlta` DATE NOT NULL,
  `numero` INT NOT NULL,
  `clienteID` INT NOT NULL,
  `servicioID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Conexion_Cliente_idx` (`clienteID`),
  INDEX `fk_Conexion_Servicio1_idx` (`servicioID`),
  FOREIGN KEY (`clienteID`) REFERENCES `Cliente` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`servicioID`) REFERENCES `Servicio` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla Provincia
CREATE TABLE IF NOT EXISTS `Provincia` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

-- Tabla Localidad
CREATE TABLE IF NOT EXISTS `Localidad` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `codigoPostal` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `provinciaID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Localidad_Provincia1_idx` (`provinciaID`),
  FOREIGN KEY (`provinciaID`) REFERENCES `Provincia` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla Domicilio
CREATE TABLE IF NOT EXISTS `Domicilio` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `calle` INT NOT NULL,
  `departamento` VARCHAR(45) NULL,
  `numero` INT NOT NULL,
  `piso` VARCHAR(45) NULL,
  `localidadID` INT NOT NULL,
  `conexionID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Domicilio_Localidad1_idx` (`localidadID`),
  INDEX `fk_Domicilio_Conexion1_idx` (`conexionID`),
  FOREIGN KEY (`localidadID`) REFERENCES `Localidad` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`conexionID`) REFERENCES `Conexion` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla Empleado
CREATE TABLE IF NOT EXISTS `Empleado` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `apellido` VARCHAR(45) NOT NULL,
  `legajo` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

-- Tabla Visita
CREATE TABLE IF NOT EXISTS `Visita` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `observacion` VARCHAR(45) NOT NULL,
  `visitaEstado` ENUM('Programada', 'Resuelta', 'Reprogramada') NOT NULL,
  `conexionID` INT NOT NULL,
  `tecnicoID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Visita_Conexion1_idx` (`conexionID`),
  INDEX `fk_Visita_Empleado1_idx` (`tecnicoID`),
  FOREIGN KEY (`conexionID`) REFERENCES `Conexion` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`tecnicoID`) REFERENCES `Empleado` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Tabla SoporteTecnico
CREATE TABLE IF NOT EXISTS `SoporteTecnico` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `motivo` VARCHAR(45) NOT NULL,
  `numeroOperacion` INT NOT NULL,
  `conexionID` INT NOT NULL,
  `operadorID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_SoporteTecnico_Conexion1_idx` (`conexionID`),
  INDEX `fk_SoporteTecnico_Empleado1_idx` (`operadorID`),
  FOREIGN KEY (`conexionID`) REFERENCES `Conexion` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`operadorID`) REFERENCES `Empleado` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
