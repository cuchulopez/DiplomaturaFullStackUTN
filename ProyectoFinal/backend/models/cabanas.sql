/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `cabanas` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cabanas`;

CREATE TABLE IF NOT EXISTS `imagenes` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL DEFAULT '0',
  `imagen_id` varchar(250) NOT NULL DEFAULT '0',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` (`id`, `descripcion`, `imagen_id`) VALUES
	(2, 'Imagen 2', 'x54pedyaccgoree11vgl'),
	(1, 'Imagen 1', 'xh9cjxn7x2nolgqz5mkg'),
	(4, 'Imagen 3', 'zth2kvcona9lftyll852'),
	(5, 'Imagen 4', 'eeshoryfy6r0c0o202ck');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `precios` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `nro_depto` tinyint(3) unsigned DEFAULT 0,
  `precio` tinyint(3) unsigned DEFAULT 0,
  `quincena` tinyint(3) unsigned DEFAULT 0,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `precios` DISABLE KEYS */;
/*!40000 ALTER TABLE `precios` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `servicios` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `icono` varchar(30) NOT NULL DEFAULT 'fas fa-question',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` (`id`, `titulo`, `descripcion`, `icono`) VALUES
	(2, 'Segundo2', 'Segundo Expedita veritatis consequuntur nihil tempore laudantium vitae denat pactaExpedita veritatis consequuntur nihil tempore laudantium vitae denat pacta', 'fas fa-coffee'),
	(3, 'Tercero3', 'Tercero3 Expedita veritatis consequuntur nihil tempore lauExpedita veritatis consequuntur nihil tempore laudantium vitae denat pactaExpedita veritatis consequuntur nihil tempore laudantium vitae denat pactadantium vitae denat pacta', 'fas fa-wifi'),
	(4, 'Cuarto', 'Cuarto Expedita veritatis consequuntur nihil tempore laudantium vitae denat pactaExpedita veritatis consequuntur nihil tempore laudantium vitae denat pacta.', 'fas fa-umbrella-beach'),
	(5, 'Bicis', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis aut sunt officia rem vel, labore voluptatibus! Saepe, aperiam architecto?', 'fas fa-biking'),
	(13, 'Quinto', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga voluptas, molestiae sit blanditiis ullam voluptates error amet. Neque temporibus nostrum quod rem accusantium soluta, commodi iure mollitia incidunt qui?', 'fas fa-beer'),
	(14, 'Cuarto', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi deserunt vel. Repellendus explicabo, numquam assumenda corporis consectetur commodi aperiam nostrum modi facilis, nihil fugiat iure nulla sapiente doloremque perferendis?', 'fas fa-caravan'),
	(18, 'Otros', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores magni id repellendus voluptatum libero quaerat placeat cum! Odio ex amet sapiente quisquam iusto veritatis est natus quibusdam quas a quae, nulla nihil quis dignissimos debitis. Deserunt officia nulla corrupti aliquam.', 'fas fa-water');
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usr` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `isAdmin` char(1) NOT NULL DEFAULT '0',
  KEY `Índice 1` (`id_usr`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id_usr`, `user`, `password`, `isAdmin`) VALUES
	(1, 'admin', '81dc9bdb52d04dc20036dbd8313ed055', 'S');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
