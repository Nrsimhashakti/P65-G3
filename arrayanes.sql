-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-09-2021 a las 21:48:48
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arrayanes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion`
--

DROP TABLE IF EXISTS `cotizacion`;
CREATE TABLE IF NOT EXISTS `cotizacion` (
  `id_cotizacion` int(11) NOT NULL,
  `nombre` varchar(11) NOT NULL,
  `apellido` varchar(11) NOT NULL,
  `correo` varchar(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `num_personas` int(11) NOT NULL,
  `evento` varchar(11) NOT NULL,
  `tipo_evento` varchar(11) NOT NULL,
  `area` varchar(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `comida` varchar(11) NOT NULL,
  `bebidas` varchar(11) NOT NULL,
  `grupo_musica` varchar(11) NOT NULL,
  `adicionales` varchar(100) NOT NULL,
  `id_socio` int(10) NOT NULL,
  PRIMARY KEY (`id_cotizacion`),
  KEY `id_socio` (`id_socio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

DROP TABLE IF EXISTS `empleado`;
CREATE TABLE IF NOT EXISTS `empleado` (
  `id_empleado` int(10) NOT NULL,
  `documento` int(11) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `id_socio` int(10) NOT NULL,
  `id_cotizacion` int(10) NOT NULL,
  `id_reserva` int(10) NOT NULL,
  PRIMARY KEY (`id_empleado`),
  KEY `id_socio` (`id_socio`),
  KEY `id_cotizacion` (`id_cotizacion`,`id_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `documento`, `rol`, `contraseña`, `id_socio`, `id_cotizacion`, `id_reserva`) VALUES
(1, 652655, 'admin', 'admon154', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

DROP TABLE IF EXISTS `reserva`;
CREATE TABLE IF NOT EXISTS `reserva` (
  `id_reserva` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  `num_personas` int(11) NOT NULL,
  `evento` varchar(100) NOT NULL,
  `tipo_evento` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `comida` varchar(100) NOT NULL,
  `bebidas` varchar(100) NOT NULL,
  `grupo_musical` varchar(100) NOT NULL,
  `adicionales` varchar(500) NOT NULL,
  `id_socio` int(10) NOT NULL,
  `id_cotizacion` int(11) NOT NULL,
  PRIMARY KEY (`id_reserva`),
  KEY `reserva_ibfk_2` (`id_cotizacion`),
  KEY `id_socio` (`id_socio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socio`
--

DROP TABLE IF EXISTS `socio`;
CREATE TABLE IF NOT EXISTS `socio` (
  `id_socio` int(10) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `cedula` int(100) NOT NULL,
  `contraseña` text NOT NULL,
  `id_cotizacion` int(10) NOT NULL,
  `id_reserva` int(10) NOT NULL,
  `id_empleado` int(10) NOT NULL,
  PRIMARY KEY (`id_socio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `socio`
--

INSERT INTO `socio` (`id_socio`, `nombre`, `apellido`, `telefono`, `correo`, `cedula`, `contraseña`, `id_cotizacion`, `id_reserva`, `id_empleado`) VALUES
(1, 'laura', 'castañeda', 465415, 'aed@gmail.com', 546846, 'soc1', 1, 1, 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  ADD CONSTRAINT `cotizacion_ibfk_1` FOREIGN KEY (`id_socio`) REFERENCES `socio` (`id_socio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`id_socio`) REFERENCES `socio` (`id_socio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`id_cotizacion`) REFERENCES `cotizacion` (`id_cotizacion`),
  ADD CONSTRAINT `reserva_ibfk_3` FOREIGN KEY (`id_socio`) REFERENCES `socio` (`id_socio`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
