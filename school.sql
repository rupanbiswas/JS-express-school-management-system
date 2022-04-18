-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 18, 2022 at 08:46 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `number_of_sests_available` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `number_of_sests_available`, `createdAt`, `updatedAt`) VALUES
(1, 'art', 984, '2022-04-18 18:52:37', '2022-04-18 20:44:19'),
(2, 'dance', 0, '2022-04-18 18:52:37', '2022-04-18 18:52:37');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(5, 'Administration', '2022-04-18 18:24:04', '2022-04-18 18:24:04'),
(6, 'Principal', '2022-04-18 18:24:04', '2022-04-18 18:24:04'),
(7, 'Student', '2022-04-18 18:24:04', '2022-04-18 18:24:04'),
(8, 'Teacher', '2022-04-18 18:24:04', '2022-04-18 18:24:04');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220418145828-create-roles.js'),
('20220418150349-create-user-details.js'),
('20220418150457-create-courses.js'),
('20220418150855-create-student-has-courses.js');

-- --------------------------------------------------------

--
-- Table structure for table `student_has_courses`
--

CREATE TABLE `student_has_courses` (
  `id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `enrolled_on` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_has_courses`
--

INSERT INTO `student_has_courses` (`id`, `student_id`, `course_id`, `enrolled_on`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, '2022-04-18 19:37:01', 0, '2022-04-18 19:37:01', '2022-04-18 20:28:58'),
(2, 2, 1, '2022-04-18 19:37:30', 0, '2022-04-18 19:37:30', '2022-04-18 20:28:58'),
(3, 2, 1, '2022-04-18 19:38:55', 0, '2022-04-18 19:38:55', '2022-04-18 20:28:58'),
(4, 2, 1, '2022-04-18 19:40:26', 0, '2022-04-18 19:40:26', '2022-04-18 20:28:58'),
(5, 2, 1, '2022-04-18 19:41:32', 0, '2022-04-18 19:41:32', '2022-04-18 20:28:58'),
(6, 2, 1, '2022-04-18 19:42:19', 0, '2022-04-18 19:42:19', '2022-04-18 20:28:58'),
(7, 2, 1, '2022-04-18 19:43:18', 0, '2022-04-18 19:43:18', '2022-04-18 20:28:58'),
(8, 2, 1, '2022-04-18 19:44:23', 0, '2022-04-18 19:44:23', '2022-04-18 20:28:58'),
(9, 2, 1, '2022-04-18 19:45:40', 0, '2022-04-18 19:45:40', '2022-04-18 20:28:58'),
(10, 2, 1, '2022-04-18 19:46:55', 0, '2022-04-18 19:46:55', '2022-04-18 20:28:58'),
(11, 2, 1, '2022-04-18 19:46:58', 0, '2022-04-18 19:46:58', '2022-04-18 20:28:58'),
(12, 2, 1, '2022-04-18 19:46:58', 0, '2022-04-18 19:46:58', '2022-04-18 20:28:58'),
(13, 2, 1, '2022-04-18 19:46:59', 0, '2022-04-18 19:46:59', '2022-04-18 20:28:58'),
(14, 2, 1, '2022-04-18 19:46:59', 0, '2022-04-18 19:46:59', '2022-04-18 20:28:58'),
(15, 2, 1, '2022-04-18 19:47:00', 0, '2022-04-18 19:47:00', '2022-04-18 20:28:58'),
(16, 2, 1, '2022-04-18 19:47:42', 0, '2022-04-18 19:47:42', '2022-04-18 20:28:58'),
(17, 2, 1, '2022-04-18 19:48:47', 0, '2022-04-18 19:48:47', '2022-04-18 20:28:58'),
(18, 2, 1, '2022-04-18 19:48:59', 0, '2022-04-18 19:48:59', '2022-04-18 20:28:58'),
(19, 2, 1, '2022-04-18 19:49:26', 0, '2022-04-18 19:49:26', '2022-04-18 20:28:58'),
(20, 2, 1, '2022-04-18 19:49:27', 0, '2022-04-18 19:49:27', '2022-04-18 20:28:58'),
(21, 2, 1, '2022-04-18 19:49:42', 0, '2022-04-18 19:49:42', '2022-04-18 20:28:58'),
(22, 2, 1, '2022-04-18 20:16:33', 0, '2022-04-18 20:16:33', '2022-04-18 20:28:58'),
(23, 2, 1, '2022-04-18 20:35:24', 1, '2022-04-18 20:35:24', '2022-04-18 20:35:24'),
(24, 2, 1, '2022-04-18 20:35:25', 1, '2022-04-18 20:35:25', '2022-04-18 20:35:25'),
(25, 2, 1, '2022-04-18 20:35:27', 1, '2022-04-18 20:35:27', '2022-04-18 20:35:27'),
(26, 2, 1, '2022-04-18 20:35:28', 1, '2022-04-18 20:35:28', '2022-04-18 20:35:28'),
(27, 2, 1, '2022-04-18 20:36:04', 1, '2022-04-18 20:36:04', '2022-04-18 20:36:04'),
(28, 2, 1, '2022-04-18 20:36:23', 1, '2022-04-18 20:36:23', '2022-04-18 20:36:23'),
(29, 2, 1, '2022-04-18 20:38:40', 1, '2022-04-18 20:38:40', '2022-04-18 20:38:40'),
(30, 2, 1, '2022-04-18 20:39:00', 1, '2022-04-18 20:39:00', '2022-04-18 20:39:00'),
(31, 3, 1, '2022-04-18 20:44:17', 1, '2022-04-18 20:44:17', '2022-04-18 20:44:17'),
(32, 3, 1, '2022-04-18 20:44:19', 1, '2022-04-18 20:44:19', '2022-04-18 20:44:19');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `full_name` varchar(255) NOT NULL,
  `address` text,
  `email` varchar(255) NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `class` int(11) DEFAULT NULL,
  `roll_no` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`id`, `role_id`, `full_name`, `address`, `email`, `phone_number`, `password`, `class`, `roll_no`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'rupan biswas', 'siliguri', 'rupanbiswas18rb@gmail.com', 7908988240, 'R123456', NULL, NULL, '2022-04-18 18:08:52', '2022-04-18 18:08:52'),
(2, 3, 'rupan biswas', 'siliguri', 'rupanbiswas08@gmail.com', 7908988241, 'B123456', NULL, NULL, '2022-04-18 18:26:31', '2022-04-18 18:26:31'),
(3, 3, 'rupan biswas', 'siliguri', 'rupanbiswas18rb@gmail.com', 7908988242, 'R1234567', NULL, NULL, '2022-04-18 18:08:52', '2022-04-18 18:08:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `student_has_courses`
--
ALTER TABLE `student_has_courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `student_has_courses`
--
ALTER TABLE `student_has_courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
