-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2018 at 05:09 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moderator`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(20) NOT NULL,
  `url` varchar(500) NOT NULL,
  `score` varchar(10) NOT NULL,
  `magnitude` varchar(10) NOT NULL,
  `reviewed` int(50) NOT NULL DEFAULT '0',
  `scholar_score` float(10,3) DEFAULT '0.000',
  `daily_count` int(50) NOT NULL DEFAULT '1',
  `lifetime_count` int(50) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `url`, `score`, `magnitude`, `reviewed`, `scholar_score`, `daily_count`, `lifetime_count`) VALUES
(5, 'https://code.djangoproject.com/wiki/Reports', '0.10000000', '8.30000019', 2, 1.500, 2, 4),
(7, 'https://code.djangoproject.com/wiki', '0', '9.69999980', 6, 0.833, 4, 6),
(8, 'https://localhost/moderator/check.php', '0', '0', 0, 2.000, 0, 0),
(9, 'https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/monk-and-welcome-problem/', '0', '3.59999990', 0, 0.000, 2, 9),
(10, 'http://localhost/phpmyadmin/sql.php?db=moderator&token=666a95682079a2e003667c2466e3c3c3&goto=db_structure.php&table=info&pos=0', '0', '0', 0, 3.000, 0, 0),
(11, 'https://mail.google.com/mail/u/0/', '0', '0.20000000', 0, 0.000, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `scholars`
--

CREATE TABLE `scholars` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `articles_reviewed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scholars`
--

INSERT INTO `scholars` (`id`, `username`, `password`, `name`, `articles_reviewed`) VALUES
(1, 'baqir', 'baqir', 'Baqir Khan', 18),
(2, 'hamzah', 'hamzah', 'hamzah khan', 3),
(3, 'ashar', 'ashar', 'ashar shahid', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scholars`
--
ALTER TABLE `scholars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `scholars`
--
ALTER TABLE `scholars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `trending` ON SCHEDULE EVERY 1 DAY STARTS '2018-06-26 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO UPDATE info SET daily_count=0 WHERE 1$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
