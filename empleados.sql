-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2022 a las 04:32:27
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_password` varchar(500) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `user_app` varchar(50) NOT NULL,
  `user_apm` varchar(50) NOT NULL,
  `user_tel` bigint(20) NOT NULL,
  `user_dir` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_mail`, `user_password`, `admin`, `user_app`, `user_apm`, `user_tel`, `user_dir`) VALUES
(1, 'Mauricio', 'maury_cp@hotmail.com', '123456789', 1, 'Castillo', 'Palma', 4411297247, 'Calle dios del sol sn'),
(3, '33333', 'admin@admin.com', 'admin', 1, '', '', 0, ''),
(4, 'Luis Jorge', 'ljorge@hotmail.com', 'pass1', 0, 'Martinez', 'Perez', 1567888765, 'Calle 123'),
(8, 'Test', 'test@hotmail.com', 'test', 0, 'ap1', 'ap2', 4411999999, 'Calle dios del sol s/n'),
(9, 'Test2', 'test2@hotmail.com', 'test2', 0, 'ap1', 'ap2', 4411999999, 'Querétaro'),
(10, 'Mauricio', 'test@hotmail.com', '123456789o', 0, 'ap1', 'Castillo', 1111111111, 'Querétaro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
