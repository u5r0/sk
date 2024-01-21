-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 24, 2022 at 11:59 AM
-- Server version: 8.0.30-0ubuntu0.22.04.1
-- PHP Version: 7.4.32

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soin`
--

-- --------------------------------------------------------

--
-- Table structure for table `dummy`
--

CREATE TABLE `products` (
  `id` varchar(200) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `brand` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dummy`
--

INSERT INTO `products` (`id`, `product_name`, `category`, `brand`) VALUES
('1', 'product-1', 'smartphones', 'Samsung'),
('2', 'product-1', 'smartphones', 'Samsung'),
('3', 'product-1', 'smartphones', 'Samsung'),
('4', 'product-1', 'smartphones', 'Samsung'),
('5', 'product-1', 'smartphones', 'Samsung'),
('6', 'product-1', 'smartphones', 'Samsung'),
('7', 'product-1', 'smartphones', 'Samsung'),
('8', 'product-1', 'smartphones', 'Samsung'),
('9', 'product-1', 'smartphones', 'Samsung'),
('10', 'product-1', 'smartphones', 'Samsung'),
('11', 'product-1', 'smartphones', 'Samsung'),
('12', 'product-1', 'smartphones', 'Samsung'),
('13', 'product-1', 'smartphones', 'Samsung'),
('14', 'product-1', 'smartphones', 'Samsung'),
('15', 'product-1', 'smartphones', 'Samsung'),
('16', 'product-1', 'smartphones', 'Apple'),
('17', 'product-1', 'laptops', 'Apple'),
('18', 'product-1', 'laptops', 'Apple'),
('19', 'product-1', 'laptops', 'Apple'),
('20', 'product-1', 'laptops', 'Apple'),
('21', 'product-2', 'fragrances', 'OPPO'),
('22', 'product-2', 'fragrances', 'OPPO'),
('23', 'product-2', 'fragrances', 'OPPO'),
('24', 'product-2', 'fragrances', 'OPPO'),
('25', 'product-2', 'fragrances', 'OPPO'),
('26', 'product-2', 'fragrances', 'OPPO'),
('27', 'product-2', 'fragrances', 'OPPO'),
('28', 'product-2', 'fragrances', 'OPPO'),
('29', 'product-2', 'fragrances', 'OPPO'),
('30', 'product-2', 'fragrances', 'OPPO'),
('31', 'product-3', 'skincare', 'Huawei'),
('32', 'product-3', 'skincare', 'Huawei'),
('33', 'product-3', 'skincare', 'Huawei'),
('34', 'product-3', 'skincare', 'Huawei'),
('35', 'product-3', 'skincare', 'Huawei'),
('36', 'product-3', 'skincare', 'Huawei'),
('37', 'product-3', 'skincare', 'Huawei'),
('38', 'product-3', 'skincare', 'Huawei'),
('39', 'product-3', 'skincare', 'Huawei'),
('40', 'product-3', 'skincare', 'Huawei'),
('41', 'product-3', 'skincare', 'Huawei'),
('42', 'product-3', 'skincare', 'Huawei'),
('43', 'product-3', 'skincare', 'Huawei'),
('44', 'product-3', 'skincare', 'Huawei'),
('45', 'product-3', 'skincare', 'Huawei'),
('46', 'product-3', 'skincare', 'Huawei'),
('47', 'product-3', 'skincare', 'Huawei'),
('48', 'product-3', 'skincare', 'Huawei'),
('49', 'product-3', 'skincare', 'Huawei'),
('50', 'product-3', 'skincare', 'Infinix'),
('51', 'product-3', 'skincare', 'Infinix'),
('52', 'product-3', 'groceries', 'Infinix'),
('53', 'product-3', 'groceries', 'Infinix'),
('54', 'product-3', 'groceries', 'Infinix'),
('55', 'product-3', 'groceries', 'Infinix'),
('56', 'product-3', 'groceries', 'Infinix'),
('57', 'product-3', 'groceries', 'Infinix'),
('58', 'product-3', 'groceries', 'Infinix'),
('59', 'product-3', 'groceries', 'Infinix'),
('60', 'product-3', 'groceries', 'Infinix'),
('61', 'product-3', 'groceries', 'Infinix'),
('62', 'product-3', 'groceries', 'Infinix'),
('63', 'product-3', 'groceries', 'Infinix'),
('64', 'product-3', 'groceries', 'Infinix'),
('65', 'product-3', 'groceries', 'Infinix'),
('66', 'product-3', 'groceries', 'Dermive'),
('67', 'product-3', 'groceries', 'Dermive'),
('68', 'product-3', 'groceries', 'Dermive'),
('69', 'product-3', 'groceries', 'Dermive'),
('70', 'product-3', 'groceries', 'Dermive'),
('71', 'product-3', 'groceries', 'Dermive'),
('72', 'product-3', 'groceries', 'Dermive'),
('73', 'product-3', 'groceries', 'Dermive'),
('74', 'product-3', 'groceries', 'Dermive'),
('75', 'product-3', 'groceries', 'Dermive'),
('76', 'product-3', 'groceries', 'Dermive'),
('77', 'product-3', 'sunglasses', 'Dermive'),
('78', 'product-3', 'sunglasses', 'Dermive'),
('79', 'product-3', 'sunglasses', 'Dermive'),
('80', 'product-3', 'sunglasses', 'Dermive'),
('81', 'product-3', 'sunglasses', 'Dermive'),
('82', 'product-3', 'sunglasses', 'Dermive'),
('83', 'product-3', 'sunglasses', 'Dermive'),
('84', 'product-3', 'sunglasses', 'Dermive'),
('85', 'product-3', 'sunglasses', 'Dermive'),
('86', 'product-3', 'sunglasses', 'Dermive'),
('87', 'product-3', 'sunglasses', 'Dermive'),
('88', 'product-3', 'sunglasses', 'Dermive'),
('89', 'product-3', 'sunglasses', 'Dermive'),
('90', 'product-3', 'sunglasses', 'Dermive'),
('91', 'product-3', 'sunglasses', 'Dermive'),
('92', 'product-3', 'sunglasses', 'Dermive'),
('93', 'product-3', 'sunglasses', 'Dermive'),
('94', 'product-3', 'sunglasses', 'Dermive'),
('95', 'product-3', 'sunglasses', 'Dermive'),
('96', 'product-3', 'motorcycle', 'Dermive'),
('97', 'product-3', 'motorcycle', 'Dermive'),
('98', 'product-3', 'motorcycle', 'Dermive'),
('99', 'product-3', 'motorcycle', 'Dermive'),
('100', 'product-3', 'motorcycle', 'Dermive');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
