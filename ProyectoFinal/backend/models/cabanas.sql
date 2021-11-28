-- --------------------------------------------------------
-- Host:                         192.168.100.21
-- Versión del servidor:         10.6.5-MariaDB-1:10.6.5+maria~focal - mariadb.org binary distribution
-- SO del servidor:              debian-linux-gnu
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para cabanas
CREATE DATABASE IF NOT EXISTS `cabanas` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cabanas`;

-- Volcando estructura para tabla cabanas.imagenes
CREATE TABLE IF NOT EXISTS `imagenes` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL DEFAULT '0',
  `imagen_id` varchar(250) NOT NULL DEFAULT '0',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cabanas.imagenes: ~2 rows (aproximadamente)
DELETE FROM `imagenes`;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` (`id`, `descripcion`, `imagen_id`) VALUES
	(2, 'pic3', 'x54pedyaccgoree11vgl'),
	(1, 'pic2', 'whaobtcqjalu4rvcurka'),
	(4, 'img4', 'zth2kvcona9lftyll852'),
	(5, 'img1', 'eeshoryfy6r0c0o202ck');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;

-- Volcando estructura para tabla cabanas.precios
CREATE TABLE IF NOT EXISTS `precios` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `nro_depto` tinyint(3) unsigned DEFAULT 0,
  `precio` tinyint(3) unsigned DEFAULT 0,
  `quincena` tinyint(3) unsigned DEFAULT 0,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cabanas.precios: ~0 rows (aproximadamente)
DELETE FROM `precios`;
/*!40000 ALTER TABLE `precios` DISABLE KEYS */;
/*!40000 ALTER TABLE `precios` ENABLE KEYS */;

-- Volcando estructura para tabla cabanas.servicios
CREATE TABLE IF NOT EXISTS `servicios` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `icono` varchar(30) NOT NULL DEFAULT 'fas fa-question',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cabanas.servicios: ~6 rows (aproximadamente)
DELETE FROM `servicios`;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` (`id`, `titulo`, `descripcion`, `icono`) VALUES
	(2, 'Segundo2', 'Segundo Expedita veritatis consequuntur nihil tempore laudantium vitae denat pactaExpedita veritatis consequuntur nihil tempore laudantium vitae denat pacta', 'fas fa-coffee'),
	(3, 'Tercero3', 'Tercero3 Expedita veritatis consequuntur nihil tempore lauExpedita veritatis consequuntur nihil tempore laudantium vitae denat pactaExpedita veritatis consequuntur nihil tempore laudantium vitae denat pactadantium vitae denat pacta', 'fas fa-wifi'),
	(4, 'Cuarto', 'Cuarto Expedita veritatis consequuntur nihil tempore laudantium vitae denat pactaExpedita veritatis consequuntur nihil tempore laudantium vitae denat pacta.', 'fas fa-umbrella-beach'),
	(5, 'Bicis', 'Alquiler de bicicletas', 'fas fa-biking'),
	(13, 'Quinto', 'QuintO', 'fab fa-android'),
	(14, 'Cuarto', 'Cuarto 4', 'fab fa-android'),
	(18, 'Algo3', 'Algo3', 'fas fa-question');
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;

-- Volcando estructura para tabla cabanas.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usr` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `isAdmin` char(1) NOT NULL DEFAULT '0',
  KEY `Índice 1` (`id_usr`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla cabanas.usuarios: ~0 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id_usr`, `user`, `password`, `isAdmin`) VALUES
	(1, 'admin', '81dc9bdb52d04dc20036dbd8313ed055', 'S');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
