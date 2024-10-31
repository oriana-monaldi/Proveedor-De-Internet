USE `internet_db`;

-- Insertar datos en la tabla Cliente
INSERT INTO `Cliente` (`apellido`, `dni`, `nombre`, `telefono`) VALUES
('Perez', 12345678, 'Juan', 1155551234),
('Gomez', 87654321, 'Ana', 1144445678),
('Lopez', 23456789, 'Carlos', 1133334567),
('Martinez', 98765432, 'Maria', 1122223456);

-- Insertar datos en la tabla Servicio
INSERT INTO `Servicio` (`cantidadMegas`, `nombre`) VALUES
(50, 'Internet Hogar 50MB'),
(100, 'Internet Hogar 100MB'),
(300, 'Internet Fibra 300MB'),
(1000, 'Internet Premium 1GB');

-- Insertar datos en la tabla Provincia
INSERT INTO `Provincia` (`nombre`) VALUES
('Buenos Aires'),
('Cordoba'),
('Santa Fe'),
('Mendoza');

-- Insertar datos en la tabla Localidad
INSERT INTO `Localidad` (`codigoPostal`, `nombre`, `provinciaID`) VALUES
(1406, 'Caballito', 1),
(5000, 'Cordoba', 2),
(2000, 'Rosario', 3),
(5500, 'Mendoza', 4);

-- Insertar datos en la tabla Conexion
INSERT INTO `Conexion` (`fechaAlta`, `numero`, `clienteID`, `servicioID`) VALUES
('2024-01-15', 10001, 1, 1),
('2024-02-10', 10002, 2, 2),
('2024-03-05', 10003, 3, 3),
('2024-04-20', 10004, 4, 4);

-- Insertar datos en la tabla Domicilio
INSERT INTO `Domicilio` (`calle`, `departamento`, `numero`, `piso`, `localidadID`, `conexionID`) VALUES
(1234, 'A', 101, '1', 1, 1),
(5678, 'B', 202, '2', 2, 2),
(9101, 'C', 303, '3', 3, 3),
(1121, 'D', 404, '4', 4, 4);

-- Insertar datos en la tabla Empleado
INSERT INTO `Empleado` (`apellido`, `legajo`, `nombre`) VALUES
('Diaz', 1010, 'Carlos'),
('Sanchez', 1020, 'Lucia'),
('Fernandez', 1030, 'Jorge'),
('Ramirez', 1040, 'Laura');

-- Insertar datos en la tabla Visita
INSERT INTO `Visita` (`fecha`, `hora`, `observacion`, `visitaEstado`, `conexionID`, `tecnicoID`) VALUES
('2024-05-10', '10:00:00', 'Instalacion inicial', 'Programada', 1, 1),
('2024-06-12', '12:30:00', 'Revision tecnica', 'Resuelta', 2, 2),
('2024-07-08', '15:00:00', 'Mantenimiento preventivo', 'Reprogramada', 3, 3),
('2024-08-01', '09:30:00', 'Soporte tecnico en domicilio', 'Resuelta', 4, 4);

-- Insertar datos en la tabla SoporteTecnico
INSERT INTO `SoporteTecnico` (`fecha`, `hora`, `motivo`, `numeroOperacion`, `conexionID`, `operadorID`) VALUES
('2024-09-05', '11:00:00', 'Problemas de conectividad', 5001, 1, 1),
('2024-09-10', '14:15:00', 'Velocidad lenta', 5002, 2, 2),
('2024-09-20', '16:30:00', 'Interrupcion en el servicio', 5003, 3, 3),
('2024-10-01', '10:45:00', 'Asesoramiento sobre plan', 5004, 4, 4);


