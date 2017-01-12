-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 12. Jan 2017 um 10:40
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
-- Tabellenstruktur für Tabelle `groupinvite`
--

CREATE TABLE `groupinvite` (
  `inviteID` int(255) NOT NULL,
  `userID` int(255) NOT NULL,
  `groupID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(1, '1', '1Description'),
(2, '2', '2decription');

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
(1, 1, 1, '2017-01-12 07:29:30'),
(1, 2, 1, '2017-01-12 07:30:27'),
(2, 2, 1, '2017-01-12 07:30:09');

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
(1, 1, 'Menu1', 'MESU1DESC'),
(2, 2, 'Test2', 'Test2Desc'),
(3, 2, 'TEst3', 'Test3 BEschreuibunbgasd'),
(4, 2, 'Menu243', 'kjahsdjhfkjask fahsjkdhfks jdjfhasjd fjdh fshdkfa sdkf aksjdfhagsd f'),
(5, 2, 'dfg', 'gsdfsg'),
(6, 2, 'eqrwsdfa', 'sdfasdfasdfasdf da df sd f sdfasd f asd fasdf as'),
(7, 2, 'ssdafa', 'sdfasd sa fas df asd');

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
(1, 2, 1, 1, 1, 1, 1, 1, 1),
(2, 2, 2, 2, 2, 2, 2, 2, 2);

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
('1', '1528a93e-9411-4d11-87ba-2dcdaf37cf53', '::1', '2017-01-12 08:06:54'),
('2', 'f20b38fd-039b-4b9b-96ef-cdec84dfe6b3', '::1', '2017-01-12 08:05:10');

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
(1, 'Donato', '1234567', 0, 'Donato', 'Donato', NULL, NULL, NULL, NULL),
(2, 'Jonas', '1234567', 0, 'Jonas', 'Jonas', NULL, NULL, NULL, NULL);

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
  ADD PRIMARY KEY (`groupID`),
  ADD UNIQUE KEY `Name` (`Name`);

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
  MODIFY `inviteID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
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
  MODIFY `menuID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
