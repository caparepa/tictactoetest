-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.19 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for tictactoe
DROP DATABASE IF EXISTS `tictactoe`;
CREATE DATABASE IF NOT EXISTS `tictactoe` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tictactoe`;

-- Dumping structure for table tictactoe.match
DROP TABLE IF EXISTS `match`;
CREATE TABLE IF NOT EXISTS `match` (
                                     `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
                                     `match_round` tinyint(3) unsigned NOT NULL DEFAULT '1',
                                     `match_status` varchar(50) DEFAULT 'IN_PROGRESS',
                                     `current_player` char(1) DEFAULT 'X',
                                     `match_winner` char(1) DEFAULT NULL,
                                     `cell_a1` char(1) DEFAULT NULL,
                                     `cell_a2` char(1) DEFAULT NULL,
                                     `cell_a3` char(1) DEFAULT NULL,
                                     `cell_b1` char(1) DEFAULT NULL,
                                     `cell_b2` char(1) DEFAULT NULL,
                                     `cell_b3` char(1) DEFAULT NULL,
                                     `cell_c1` char(1) DEFAULT NULL,
                                     `cell_c2` char(1) DEFAULT NULL,
                                     `cell_c3` char(1) DEFAULT NULL,
                                     PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
