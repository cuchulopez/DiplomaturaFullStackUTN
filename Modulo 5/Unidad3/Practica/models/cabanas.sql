/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `cabanas` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cabanas`;

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(10) unsigned NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `trabajo` tinyint(4) NOT NULL,
  `edad` tinyint(3) unsigned NOT NULL,
  `salario` int(11) NOT NULL,
  `mail` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  KEY `id_empleado` (`id_emp`),
  KEY `FK_trabajo` (`trabajo`),
  CONSTRAINT `FK_trabajo` FOREIGN KEY (`trabajo`) REFERENCES `trabajo` (`id_trabajo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`) VALUES
	(1, 'Roberto', 'Luis', 1, 35, 100000, 'roberto@bignet.com'),
	(2, 'Daniel', 'Gutierrez', 1, 34, 900000, 'daniel@bignet.com'),
	(3, 'Ana', 'Dharma', 2, 27, 90000, 'ana@bignet.com'),
	(4, 'Maria', 'Anchor', 2, 26, 85000, 'mary@bignet.com'),
	(5, 'Jimena', 'Cazado', 3, 32, 110000, 'jimena@bignet.com'),
	(6, 'Monica', 'Sanchez', 4, 30, 90000, 'monica@bignet.com'),
	(7, 'Alicia', 'Simlai', 4, 27, 70000, 'alicia@bignet.com'),
	(8, 'Jose', 'Iriarte', 4, 27, 72000, 'jose@bignet.com'),
	(9, 'Miguel', 'Harper', 5, 36, 120000, 'miguel@bignet.com'),
	(10, 'Hernan', 'Rosso', 6, 33, 90000, 'hernan@bignet.com'),
	(11, 'Pablo', 'Simon', 6, 43, 85000, 'ps@bignet.com'),
	(12, 'Arturo', 'Hernandez', 6, 32, 75000, 'arturo@bignet.com'),
	(13, 'Pedro', 'Campeon', 7, 36, 220000, 'pedro@bignet.com'),
	(14, 'Sabrina', 'Allende', 8, 32, 200000, 'sabrina@bignet.com'),
	(15, 'Mariano', 'Dharma', 9, 28, 300000, 'mariano@bignet.com'),
	(16, 'Alfred', 'Fernandez', 10, 31, 75000, 'af@bignet.com'),
	(17, 'Juan', 'Agüero', 10, 36, 85000, 'juan@bignet.com'),
	(18, 'Eduardo', 'Sacan', 10, 25, 85000, 'eddi@bignet.com'),
	(19, 'Alejandro', 'Nanda', 10, 32, 70000, 'alenanda@bignet.com'),
	(20, 'Juan', 'Hagan', 12, 32, 120000, 'juan_hagan@bignet.com'),
	(21, 'Gonzalo', 'Pillai', 12, 32, 110000, 'g_pillai@bignet.com');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `trabajo` (
  `id_trabajo` tinyint(4) NOT NULL,
  `trabajo` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  KEY `id_trabajo` (`id_trabajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

/*!40000 ALTER TABLE `trabajo` DISABLE KEYS */;
INSERT INTO `trabajo` (`id_trabajo`, `trabajo`) VALUES
	(1, 'Administrador de sistemas'),
	(2, 'Desarrollador Web'),
	(3, 'Diseñador Web'),
	(4, 'Ejecutivo de ventas'),
	(5, 'Ejecutivo de Ventas Senior'),
	(6, 'Especialista Multimedia'),
	(7, 'Gerente de finanzas'),
	(8, 'Gerente de Soporte tecnico'),
	(9, 'Presidente'),
	(10, 'Programador'),
	(12, 'Programador Senior');
/*!40000 ALTER TABLE `trabajo` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
