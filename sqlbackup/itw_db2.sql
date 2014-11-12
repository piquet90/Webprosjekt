-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 12. Nov, 2014 16:01 PM
-- Server-versjon: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `itw_db`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `jobs`
--

CREATE TABLE IF NOT EXISTS `jobs` (
`id` int(11) NOT NULL,
  `uid` int(10) NOT NULL,
  `simple` int(10) NOT NULL,
  `medium` int(10) NOT NULL,
  `hard` int(10) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dataark for tabell `jobs`
--

INSERT INTO `jobs` (`id`, `uid`, `simple`, `medium`, `hard`) VALUES
(1, 21, 1415290034, 0, 0),
(5, 3, 1415291135, 0, 0),
(6, 20, 1415804176, 1415803846, 1415803898);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`uid` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `fornavn` varchar(20) NOT NULL,
  `etternavn` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `saldo` int(11) NOT NULL,
  `xp` int(11) NOT NULL,
  `hwlevel` int(11) NOT NULL,
  `coid` varchar(25) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Dataark for tabell `users`
--

INSERT INTO `users` (`uid`, `username`, `password`, `fornavn`, `etternavn`, `email`, `saldo`, `xp`, `hwlevel`, `coid`) VALUES
(3, 'admin', '781f357c35df1fef3138f6d29670365a', 'fornavnedmin', 'etternavnadmin', 'admin@admin.com', 1337, 1337, 1337, 'ADMIN LEGION'),
(20, 'rudiwyu', '4e2a19c179102bdaacd7633aa3a5ae27', 'rudi', 'yu', 'rudiwyu@gmail.com', 6900, 50000, 0, 'Solo Developer'),
(21, 'audunbru', '781f357c35df1fef3138f6d29670365a', 'audun', 'brustad', 'aud@dum.bru', 1000, 1, 1, 'Solo Developer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`uid`), ADD UNIQUE KEY `uid` (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
