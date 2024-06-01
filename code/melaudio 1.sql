-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `melaudio`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(4) NOT NULL,
  `permissions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `admin` (`admin_id`, `permissions`) VALUES
(1, 'Πρόσβαση σε βιβλιοθήκη.');
-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `excersize`
--

CREATE TABLE `excersize` (
  `excersize_id` int(4) NOT NULL,
  `instrument_id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `level` varchar(50) NOT NULL,
  `score` int(16) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `excersize` (`excersize_id`, `instrument_id`, `name`, `level`, `score`, `description`) VALUES
(1, 1, 'first exersize', 'beginner', 5, 'Είναι μία άσκηση αναγνώρισης της νότας που παίζεται στο πιάνο.');
-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(4) NOT NULL,
  `teacher_id` int(4) NOT NULL,
  `student_id` int(4) NOT NULL,
  `content` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `feedback` (`feedback_id`, `teacher_id`, `student_id`, `content`, `date`) VALUES
(1, 2, 1, 'Τα πας καλά. Συνέχισε έτσι.', '2024-05-22');
-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `instrument`
--

CREATE TABLE `instrument` (
  `instrument_id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `instrument` (`instrument_id`, `name`, `type`) VALUES
(1, 'piano', 'keyboard intsument'),
(2, 'guitar', 'string instrument'),
(3, 'flute', 'woodwind intrument');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `lesson`
--

CREATE TABLE `lesson` (
  `lesson_id` int(4) NOT NULL,
  `teacher_id` int(4) NOT NULL,
  `student_id` int(4) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(50) NOT NULL,
  `level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `lesson` (`lesson_id`, `teacher_id`, `student_id`, `title`, `description`, `url`, `level`) VALUES
(1, 2, 1, 'Οι νότες στο πιάνο', 'Είναι μάθημα εκμάθησης των νοτών στο πιάνο.', 'https://melaudio.com/piano_lesson_1', 'beginner');
-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `library`
--

CREATE TABLE `library` (
  `library_id` int(4) NOT NULL,
  `resource` varchar(50) NOT NULL,
  `user_type` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `library` (`library_id`, `resource`, `user_type`, `date`) VALUES
(1, 'instrument sheet', 'teacher', '2024-05-20');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `membership`
--

CREATE TABLE `membership` (
  `membership_id` int(4) NOT NULL,
  `student_id` int(4) NOT NULL,
  `group_id` int(4) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `message`
--

CREATE TABLE `message` (
  `message_id` int(4) NOT NULL,
  `sender_id` int(4) NOT NULL,
  `receiver_id` int(4) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `music_group`
--

CREATE TABLE `music_group` (
  `group_id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `created_by` int(4) NOT NULL,
  `genre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `social_network`
--

CREATE TABLE `social_network` (
  `forum_id` int(4) NOT NULL,
  `user_id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `student`
--

CREATE TABLE `student` (
  `user_id` int(4) NOT NULL,
  `instrument` varchar(50) NOT NULL,
  `level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `student` (`user_id`, `instrument`, `level`) VALUES
(1, 'piano', 'beginner');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `teacher`
--

CREATE TABLE `teacher` (
  `user_id` int(4) NOT NULL,
  `cv` text NOT NULL,
  `instrument` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `teacher` (`user_id`, `cv`, `instrument`) VALUES
(2, 'Ονομάζομαι Μαρία Καρναβά και ειμαι 23 χρονών. Έχω τελειώσει το τμήμα μουσικών σπουδών με ειδίκευση στο πιάνο και την άρπα. Ακόμη ξέρω να παίζω πολύ καλά κιθάρα.', 'piano');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `user`
--

CREATE TABLE `user` (
  `user_id` int(4) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  `user_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `user` (`user_id`, `username`, `password`, `user_type`) VALUES
(1, 'iliS', 'ili!_S2000', 'student'),
(2, 'maria', 'karv99', 'teacher');

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Ευρετήρια για πίνακα `excersize`
--
ALTER TABLE `excersize`
  ADD PRIMARY KEY (`excersize_id`),
  ADD KEY `instrument_id` (`instrument_id`);

--
-- Ευρετήρια για πίνακα `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Ευρετήρια για πίνακα `instrument`
--
ALTER TABLE `instrument`
  ADD PRIMARY KEY (`instrument_id`);

--
-- Ευρετήρια για πίνακα `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`lesson_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Ευρετήρια για πίνακα `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`library_id`);

--
-- Ευρετήρια για πίνακα `membership`
--
ALTER TABLE `membership`
  ADD PRIMARY KEY (`membership_id`),
  ADD KEY `group_id` (`group_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Ευρετήρια για πίνακα `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Ευρετήρια για πίνακα `music_group`
--
ALTER TABLE `music_group`
  ADD PRIMARY KEY (`group_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Ευρετήρια για πίνακα `social_network`
--
ALTER TABLE `social_network`
  ADD PRIMARY KEY (`forum_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Ευρετήρια για πίνακα `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`user_id`);

--
-- Ευρετήρια για πίνακα `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`user_id`);

--
-- Ευρετήρια για πίνακα `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `excersize`
--
ALTER TABLE `excersize`
  MODIFY `excersize_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `instrument`
--
ALTER TABLE `instrument`
  MODIFY `instrument_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `lesson`
--
ALTER TABLE `lesson`
  MODIFY `lesson_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `library`
--
ALTER TABLE `library`
  MODIFY `library_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `membership`
--
ALTER TABLE `membership`
  MODIFY `membership_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `music_group`
--
ALTER TABLE `music_group`
  MODIFY `group_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `social_network`
--
ALTER TABLE `social_network`
  MODIFY `forum_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `excersize`
--
ALTER TABLE `excersize`
  ADD CONSTRAINT `excersize_ibfk_1` FOREIGN KEY (`instrument_id`) REFERENCES `instrument` (`instrument_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lesson_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`user_id`);

--
-- Περιορισμοί για πίνακα `membership`
--
ALTER TABLE `membership`
  ADD CONSTRAINT `membership_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `music_group` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `membership_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `music_group`
--
ALTER TABLE `music_group`
  ADD CONSTRAINT `music_group_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `student` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `social_network`
--
ALTER TABLE `social_network`
  ADD CONSTRAINT `social_network_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
