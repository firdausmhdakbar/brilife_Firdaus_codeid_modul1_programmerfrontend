-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Jul 2020 pada 02.17
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_keluarga_berencana`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `list_kontrasepsi`
--

CREATE TABLE `list_kontrasepsi` (
  `id_kontrasepsi` int(11) NOT NULL,
  `nama_kontrasepsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `list_kontrasepsi`
--

INSERT INTO `list_kontrasepsi` (`id_kontrasepsi`, `nama_kontrasepsi`) VALUES
(1, 'Pil'),
(2, 'Kondom'),
(3, 'IUD'),
(4, 'Kondom Junior'),
(5, 'New Era');

-- --------------------------------------------------------

--
-- Struktur dari tabel `list_pemakai_kontrasepsi`
--

CREATE TABLE `list_pemakai_kontrasepsi` (
  `id_list` int(11) NOT NULL,
  `jumlah_pemakai` int(11) DEFAULT NULL,
  `kontrasepsi_id_kontrasepsi` int(11) NOT NULL,
  `propinsi_id_propinsi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `list_pemakai_kontrasepsi`
--

INSERT INTO `list_pemakai_kontrasepsi` (`id_list`, `jumlah_pemakai`, `kontrasepsi_id_kontrasepsi`, `propinsi_id_propinsi`) VALUES
(1, 50, 1, 1),
(2, 66, 2, 1),
(3, 25, 3, 1),
(4, 100, 1, 2),
(5, 75, 2, 2),
(6, 50, 3, 2),
(7, 40, 2, 3),
(8, 65, 2, 3),
(9, 90, 1, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `list_propinsi`
--

CREATE TABLE `list_propinsi` (
  `id_propinsi` int(11) NOT NULL,
  `nama_propinsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `list_propinsi`
--

INSERT INTO `list_propinsi` (`id_propinsi`, `nama_propinsi`) VALUES
(1, 'Aceh'),
(2, 'Sumatera Utara'),
(3, 'Sumatera Barat'),
(4, 'Riau'),
(5, 'Kepulauan Riau'),
(6, 'Jambi'),
(7, 'Bangka Belitung'),
(8, 'Sumatera Selatan'),
(9, 'Lampung'),
(11, 'Bandung');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `list_kontrasepsi`
--
ALTER TABLE `list_kontrasepsi`
  ADD PRIMARY KEY (`id_kontrasepsi`);

--
-- Indeks untuk tabel `list_pemakai_kontrasepsi`
--
ALTER TABLE `list_pemakai_kontrasepsi`
  ADD PRIMARY KEY (`id_list`),
  ADD KEY `FKbi6bfpaoqeatqmi2jgr15yq99` (`kontrasepsi_id_kontrasepsi`),
  ADD KEY `FKr3wsesiiojgilg0fcodke0g4a` (`propinsi_id_propinsi`);

--
-- Indeks untuk tabel `list_propinsi`
--
ALTER TABLE `list_propinsi`
  ADD PRIMARY KEY (`id_propinsi`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `list_kontrasepsi`
--
ALTER TABLE `list_kontrasepsi`
  MODIFY `id_kontrasepsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `list_pemakai_kontrasepsi`
--
ALTER TABLE `list_pemakai_kontrasepsi`
  MODIFY `id_list` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `list_propinsi`
--
ALTER TABLE `list_propinsi`
  MODIFY `id_propinsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `list_pemakai_kontrasepsi`
--
ALTER TABLE `list_pemakai_kontrasepsi`
  ADD CONSTRAINT `FKbi6bfpaoqeatqmi2jgr15yq99` FOREIGN KEY (`kontrasepsi_id_kontrasepsi`) REFERENCES `list_kontrasepsi` (`id_kontrasepsi`),
  ADD CONSTRAINT `FKr3wsesiiojgilg0fcodke0g4a` FOREIGN KEY (`propinsi_id_propinsi`) REFERENCES `list_propinsi` (`id_propinsi`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
