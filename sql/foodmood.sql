-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 02. Dez 2016 um 21:56
-- Server-Version: 10.1.19-MariaDB
-- PHP-Version: 7.0.13

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
-- Tabellenstruktur für Tabelle `groups`
--

CREATE TABLE `groups` (
  `group-id` int(255) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Beschreibung` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `groups`
--

INSERT INTO `groups` (`group-id`, `Name`, `Beschreibung`) VALUES
(1, 'Coole Gangster', 'Hallo wir sind coole Gangster!!!');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `groupsuser`
--

CREATE TABLE `groupsuser` (
  `user-id` int(255) NOT NULL,
  `group-id` int(255) NOT NULL,
  `admin` tinyint(1) NOT NULL COMMENT 'TRUE / FALSE',
  `joinDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `groupsuser`
--

INSERT INTO `groupsuser` (`user-id`, `group-id`, `admin`, `joinDate`) VALUES
(2, 1, 0, '2016-12-02 07:12:23');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `logs`
--

CREATE TABLE `logs` (
  `log-id` int(255) NOT NULL,
  `user-id` varchar(40) NOT NULL,
  `type` varchar(6) NOT NULL COMMENT 'LOGIN / LOGOUT',
  `ip` varchar(60) NOT NULL,
  `sessionKey` varchar(60) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
('1', 'b86254ba-8bb1-4e10-ab98-f1ee277b3e92', '::1', '2016-12-02 20:38:05'),
('2', '7734e0d6-f088-4ab9-a5de-cc5c67fb781f', '::1', '2016-12-02 20:46:29');

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
  `IBAN` varchar(300) DEFAULT NULL COMMENT 'Bankverbindung bei Rechnungsstellung',
  `status` varchar(400) DEFAULT NULL COMMENT 'Status kann selbst gesetzt und formatiert werden'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`userID`, `username`, `password`, `berechtigung`, `name`, `lastname`, `adress`, `phone`, `mail`, `IBAN`, `status`) VALUES
(1, 'DonatoPot', 'Donato', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Pot', 'Pot', 0, 'Pottie', 'Potter', 'Potstreet 10', '0000000', 'pot@dot.com', '1234Gehim5678', 'Hey Mami!!!!');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group-id`);

--
-- Indizes für die Tabelle `groupsuser`
--
ALTER TABLE `groupsuser`
  ADD PRIMARY KEY (`user-id`,`group-id`);

--
-- Indizes für die Tabelle `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`log-id`);

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
-- AUTO_INCREMENT für Tabelle `groups`
--
ALTER TABLE `groups`
  MODIFY `group-id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT für Tabelle `logs`
--
ALTER TABLE `logs`
  MODIFY `log-id` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
