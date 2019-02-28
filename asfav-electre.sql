-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2019 at 02:44 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asfav-electre`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_asisten`
--

CREATE TABLE `tb_asisten` (
  `npm_asisten` varchar(10) NOT NULL,
  `nama_asisten` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_bobot`
--

CREATE TABLE `tb_bobot` (
  `kode_bobot` varchar(2) NOT NULL,
  `nama_bobot` varchar(20) NOT NULL,
  `nilai_bobot` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_matkul`
--

CREATE TABLE `tb_matkul` (
  `kode_matkul` varchar(5) NOT NULL,
  `npm_asisten` varchar(10) NOT NULL,
  `nama_matkul` varchar(100) NOT NULL,
  `prodi` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_polling`
--

CREATE TABLE `tb_polling` (
  `kode_matkul` varchar(5) NOT NULL,
  `npm_asisten` varchar(10) NOT NULL,
  `prakiran` varchar(10) NOT NULL,
  `penguasaan_materi` int(2) NOT NULL,
  `public_speaking` int(2) NOT NULL,
  `keterampilan` int(2) NOT NULL,
  `kedisiplinan` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_presensi`
--

CREATE TABLE `tb_presensi` (
  `npm_asisten` varchar(10) NOT NULL,
  `kode_matkul` varchar(5) NOT NULL,
  `jumlah_presensi` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_asisten`
--
ALTER TABLE `tb_asisten`
  ADD PRIMARY KEY (`npm_asisten`) USING BTREE;

--
-- Indexes for table `tb_matkul`
--
ALTER TABLE `tb_matkul`
  ADD PRIMARY KEY (`kode_matkul`) USING BTREE;

--
-- Indexes for table `tb_polling`
--
ALTER TABLE `tb_polling`
  ADD KEY `npm_asisten` (`npm_asisten`),
  ADD KEY `kode_matkul` (`kode_matkul`);

--
-- Indexes for table `tb_presensi`
--
ALTER TABLE `tb_presensi`
  ADD KEY `npm_asisten` (`npm_asisten`),
  ADD KEY `kode_matkul` (`kode_matkul`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_polling`
--
ALTER TABLE `tb_polling`
  ADD CONSTRAINT `tb_polling_ibfk_1` FOREIGN KEY (`npm_asisten`) REFERENCES `tb_asisten` (`npm_asisten`),
  ADD CONSTRAINT `tb_polling_ibfk_2` FOREIGN KEY (`kode_matkul`) REFERENCES `tb_matkul` (`kode_matkul`);

--
-- Constraints for table `tb_presensi`
--
ALTER TABLE `tb_presensi`
  ADD CONSTRAINT `tb_presensi_ibfk_1` FOREIGN KEY (`npm_asisten`) REFERENCES `tb_asisten` (`npm_asisten`),
  ADD CONSTRAINT `tb_presensi_ibfk_2` FOREIGN KEY (`kode_matkul`) REFERENCES `tb_matkul` (`kode_matkul`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
