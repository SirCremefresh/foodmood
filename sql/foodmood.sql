-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 05. Jan 2017 um 14:33
-- Server-Version: 10.1.16-MariaDB
-- PHP-Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `foodmood`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `groupinvite`
--

CREATE TABLE `groupinvite` (
  `inviteID` int(255) NOT NULL,
  `userID` int(255) NOT NULL,
  `groupID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `groupinvite`
--

INSERT INTO `groupinvite` (`inviteID`, `userID`, `groupID`) VALUES
(17, 14, 2);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `groups`
--

CREATE TABLE `groups` (
  `groupID` int(255) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Beschreibung` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `groups`
--

INSERT INTO `groups` (`groupID`, `Name`, `Beschreibung`) VALUES
(1, 'Coole Gangster', 'Hallo wir sind coole Gangster!!!'),
(2, 'Gruppe 2', 'Gruppe 2');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `groupsuser`
--

CREATE TABLE `groupsuser` (
  `userID` int(255) NOT NULL,
  `groupID` int(255) NOT NULL,
  `admin` tinyint(1) NOT NULL COMMENT 'TRUE / FALSE',
  `joinDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `groupsuser`
--

INSERT INTO `groupsuser` (`userID`, `groupID`, `admin`, `joinDate`) VALUES
(1, 1, 1, '2016-12-16 12:48:15'),
(1, 2, 1, '2016-12-16 07:16:53'),
(2, 2, 1, '2016-12-16 07:16:24'),
(3, 1, 1, '2016-12-16 07:17:03'),
(3, 2, 1, '2016-12-16 07:17:31'),
(4, 2, 0, '2016-12-16 07:25:26'),
(5, 2, 0, '2016-12-16 07:25:32'),
(6, 2, 0, '2016-12-16 07:25:36'),
(7, 2, 0, '2016-12-16 07:25:42'),
(8, 2, 0, '2016-12-16 07:25:46'),
(9, 2, 0, '2016-12-16 07:27:50'),
(10, 2, 0, '2016-12-16 07:27:56'),
(11, 2, 0, '2016-12-16 07:28:02'),
(12, 2, 0, '2016-12-16 07:28:07'),
(14, 1, 0, '2016-12-16 14:47:25');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `logs`
--

CREATE TABLE `logs` (
  `logID` int(255) NOT NULL,
  `userID` varchar(40) NOT NULL,
  `type` varchar(6) NOT NULL COMMENT 'LOGIN / LOGOUT',
  `ip` varchar(60) NOT NULL,
  `sessionKey` varchar(60) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `menu`
--

CREATE TABLE `menu` (
  `menuID` int(11) NOT NULL,
  `groupID` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `menu`
--

INSERT INTO `menu` (`menuID`, `groupID`, `title`, `description`) VALUES
(1, 1, 'sdf', 'sd'),
(2, 1, 'Hallo', 'Saaalihoi'),
(3, 1, '', ''),
(4, 1, '', ''),
(5, 1, '', ''),
(6, 1, '', ''),
(7, 2, 'Name', 'Beschreibung'),
(8, 2, 'Name', 'Desc'),
(9, 2, 'ABC', 'ABC');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `menuplan`
--

CREATE TABLE `menuplan` (
  `groupID` int(255) NOT NULL,
  `week` int(5) NOT NULL,
  `monday` int(255) NOT NULL,
  `tuesday` int(255) NOT NULL,
  `wednesday` int(255) NOT NULL,
  `thursday` int(255) NOT NULL,
  `friday` int(255) NOT NULL,
  `saturday` int(255) NOT NULL,
  `sunday` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `menuplan`
--

INSERT INTO `menuplan` (`groupID`, `week`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `session`
--

CREATE TABLE `session` (
  `userID` varchar(40) NOT NULL,
  `sessionKey` varchar(120) NOT NULL,
  `ip` varchar(60) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `session`
--

INSERT INTO `session` (`userID`, `sessionKey`, `ip`, `datetime`) VALUES
('1', '31bd3a74-6ddd-43a9-8e4d-580a24dba3f1', '::1', '2016-12-16 12:25:02'),
('10', 'f53ff7fb-fc16-42c0-83e4-18c99da9e348', '::1', '2016-12-16 07:26:57'),
('11', '6e94b650-e8f2-4731-942e-0408a5682b6b', '::1', '2016-12-16 07:27:09'),
('12', '08d15c04-3119-4e5f-98b6-db1f2298ad3d', '::1', '2016-12-16 07:27:17'),
('13', 'c4e969ee-cfba-48b1-8e3c-8c921f40ce11', '::1', '2016-12-16 07:55:45'),
('14', '860a0e33-a7d0-4d5f-a7c3-e6d84e8e2aec', '::1', '2016-12-19 08:13:46'),
('15', '13146394-7827-4fa2-92cd-ee049b537943', '::1', '2016-12-23 07:32:29'),
('2', '4683cfc5-801a-45ac-a009-bc19ba9e6c3e', '::1', '2016-12-23 07:36:30'),
('3', 'c9ff0198-c33b-448f-b0a5-5fc0481ce188', '::1', '2016-12-23 07:47:40'),
('4', 'abaa2559-99a4-4212-82ac-048d4bb5c930', '::1', '2016-12-16 07:23:58'),
('5', 'c55a0ccb-d5f5-4099-993e-96967468b6e4', '::1', '2016-12-16 07:24:12'),
('6', 'bb1bfd57-e082-44f3-958c-abe22b2dd2fd', '::1', '2016-12-16 07:24:24'),
('7', '7c9d0324-d47b-4ae9-ad68-e9d4d2cbd690', '::1', '2016-12-16 07:24:33'),
('8', '229b123a-90af-45f4-828e-acdd9e7ff061', '::1', '2016-12-16 07:50:34'),
('9', '0d38f4bb-0b49-4909-bb2c-7d77a67ba43b', '::1', '2016-12-16 07:26:47');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `userID` int(255) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(80) NOT NULL COMMENT 'MD5 Hashed',
  `berechtigung` int(255) NOT NULL COMMENT 'ADMIN / USER',
  `name` varchar(40) DEFAULT NULL,
  `lastname` varchar(40) DEFAULT NULL,
  `adress` varchar(40) DEFAULT NULL,
  `phone` varchar(40) DEFAULT NULL COMMENT 'Private Telefon- oder Handynummer',
  `mail` varchar(120) DEFAULT NULL COMMENT 'Private E-Mail Adresse',
  `status` varchar(400) DEFAULT NULL COMMENT 'Status kann selbst gesetzt und formatiert werden'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`userID`, `username`, `password`, `berechtigung`, `name`, `lastname`, `adress`, `phone`, `mail`, `status`) VALUES
(1, 'DonatoPot', 'Donato', 0, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Pot', 'Pot', 0, 'Pottie', 'Potter', 'Potstreet 10', '0000000', 'pot@dot.com', 'Hey Mami!!!!'),
(3, 'DonatoPotato', 'password', 0, 'Donato', 'Wolfibserg', NULL, NULL, NULL, NULL),
(4, 'A', 'AAAAAAA', 0, 'A', 'A', NULL, NULL, NULL, NULL),
(5, 'B', 'BBBBBBB', 0, 'B', 'B', NULL, NULL, NULL, NULL),
(6, 'C', 'CCCCCCC', 0, 'C', 'C', NULL, NULL, NULL, NULL),
(7, 'D', 'DDDDDDD', 0, 'D', 'D', NULL, NULL, NULL, NULL),
(8, 'E', 'EEEEEEE', 0, 'E', 'E', NULL, NULL, NULL, NULL),
(9, 'F', 'FFFFFFF', 0, 'F', 'F', NULL, NULL, NULL, NULL),
(10, 'G', 'GGGGGGG', 0, 'G', 'G', NULL, NULL, NULL, NULL),
(11, 'H', 'HHHHHHH', 0, 'H', 'H', NULL, NULL, NULL, NULL),
(12, 'I', 'IIIIIII', 0, 'I', 'I', NULL, NULL, NULL, NULL),
(13, 'J', 'JJJJJJJ', 0, 'J', 'J', NULL, NULL, NULL, NULL),
(14, 'Nichtgian420', '123456789', 0, 'Nicht', 'Mami', NULL, NULL, NULL, NULL),
(15, 'HerrMüller', '1234567', 0, 'Müller', 'Franzose', NULL, NULL, NULL, NULL);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `groupinvite`
--
ALTER TABLE `groupinvite`
  ADD PRIMARY KEY (`inviteID`);

--
-- Indizes für die Tabelle `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`groupID`);

--
-- Indizes für die Tabelle `groupsuser`
--
ALTER TABLE `groupsuser`
  ADD PRIMARY KEY (`userID`,`groupID`);

--
-- Indizes für die Tabelle `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`logID`);

--
-- Indizes für die Tabelle `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menuID`);

--
-- Indizes für die Tabelle `menuplan`
--
ALTER TABLE `menuplan`
  ADD PRIMARY KEY (`groupID`);

--
-- Indizes für die Tabelle `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `sessionKey` (`sessionKey`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `groupinvite`
--
ALTER TABLE `groupinvite`
  MODIFY `inviteID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT für Tabelle `groups`
--
ALTER TABLE `groups`
  MODIFY `groupID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT für Tabelle `logs`
--
ALTER TABLE `logs`
  MODIFY `logID` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `menu`
--
ALTER TABLE `menu`
  MODIFY `menuID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
