-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 31 Μάη 2024 στις 03:08:54
-- Έκδοση διακομιστή: 10.4.22-MariaDB
-- Έκδοση PHP: 8.1.1

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
  `user_id` int(11) NOT NULL,
  `permissions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `admin`
--

INSERT INTO `admin` (`user_id`, `permissions`) VALUES
(3, 'all');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `excercise`
--

CREATE TABLE `excercise` (
  `description` text NOT NULL,
  `excersize_id` int(4) NOT NULL,
  `instument_name` varchar(20) NOT NULL,
  `level` enum('beginner','intermidiate','advanced') NOT NULL,
  `name` varchar(50) NOT NULL,
  `score` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `excercise`
--

INSERT INTO `excercise` (`description`, `excersize_id`, `instument_name`, `level`, `name`, `score`) VALUES
('This technique involves holding your violin in a playing position and using your fingers to pull and release the strings, creating a sound without the bow.', 1, '4', 'beginner', 'Basic plucking', 0);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `feedback`
--

CREATE TABLE `feedback` (
  `contnent` varchar(50) NOT NULL,
  `feedback_id` int(4) NOT NULL,
  `date` int(11) NOT NULL DEFAULT current_timestamp(),
  `student_id` int(4) NOT NULL,
  `teacher_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `instrument`
--

CREATE TABLE `instrument` (
  `name` varchar(20) NOT NULL,
  `type` enum('woodwings','brass','percussion','strings') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `instrument`
--

INSERT INTO `instrument` (`name`, `type`) VALUES
('flute', 'woodwings'),
('trumpet', 'brass'),
('violin', 'strings'),
('xylophone', 'percussion');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `lesson`
--

CREATE TABLE `lesson` (
  `lesson_id` int(4) NOT NULL,
  `description` varchar(50) NOT NULL,
  `tittle` varchar(20) NOT NULL,
  `level` enum('beginner','intermediate','advanced') NOT NULL,
  `student_id` int(4) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `url` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `lesson`
--

INSERT INTO `lesson` (`lesson_id`, `description`, `tittle`, `level`, `student_id`, `teacher_id`, `url`) VALUES
(1, 'Proper violinist posture,Choosing the right violin', 'understanding a viol', 'beginner', 0, 0, 'www.jkdljv'),
(2, 'Proper violinist posture,Choosing the right violin', 'understanding a viol', 'beginner', 6, 2, 'www.jkdljv');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `library`
--

CREATE TABLE `library` (
  `library_id` int(4) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `resource` varchar(20) NOT NULL,
  `user_type` enum('teacher','student') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `membership`
--

CREATE TABLE `membership` (
  `membership_id` int(4) NOT NULL,
  `group_id` int(4) NOT NULL,
  `status` varchar(20) NOT NULL,
  `student_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `message`
--

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `text` varchar(50) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `music_group`
--

CREATE TABLE `music_group` (
  `music_group_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `genre` enum('classical','rock','jazz','traditional','country') NOT NULL,
  `creator` int(11) NOT NULL,
  `description` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `social_network`
--

CREATE TABLE `social_network` (
  `forum_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `student`
--

CREATE TABLE `student` (
  `student_id` int(4) NOT NULL,
  `instrument` varchar(20) NOT NULL,
  `level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `student`
--

INSERT INTO `student` (`student_id`, `instrument`, `level`) VALUES
(1, 'piano', 'beginner'),
(4, 'piano', 'beginner'),
(6, 'piano', 'beginner'),
(7, 'piano', 'beginner');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `teacher`
--

CREATE TABLE `teacher` (
  `user_id` int(11) NOT NULL,
  `cv` text NOT NULL,
  `instrument` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `teacher`
--

INSERT INTO `teacher` (`user_id`, `cv`, `instrument`) VALUES
(2, 'CV content for teacher1', 'guitar'),
(5, 'CV content', 'piano'),
(8, 'CV content', 'piano');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `user`
--

CREATE TABLE `user` (
  `user_id` int(4) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  `email` varchar(191) NOT NULL,
  `user_type` enum('student','teacher','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`, `user_type`) VALUES
(1, 'student1', 'password1', 'student1@example.com', 'student'),
(2, 'teacher1', 'password2', 'teacher1@example.com', 'teacher'),
(3, 'admin1', 'password3', 'admin1@example.com', 'admin'),
(4, 'Aa', 'Aa', 'Aa', 'student'),
(5, 'Vavq', 'Aaaa', 'Aaaa', 'teacher'),
(6, 'Mary jane', 'Jane', 'Madbdk', 'student'),
(7, 'Sas', 'A', 'Sbj', 'student'),
(8, 'A', 'A', 'A', 'teacher');

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`user_id`);

--
-- Ευρετήρια για πίνακα `excercise`
--
ALTER TABLE `excercise`
  ADD PRIMARY KEY (`excersize_id`);

--
-- Ευρετήρια για πίνακα `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `st1` (`student_id`);

--
-- Ευρετήρια για πίνακα `instrument`
--
ALTER TABLE `instrument`
  ADD PRIMARY KEY (`name`);

--
-- Ευρετήρια για πίνακα `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`lesson_id`);

--
-- Ευρετήρια για πίνακα `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`library_id`);

--
-- Ευρετήρια για πίνακα `membership`
--
ALTER TABLE `membership`
  ADD PRIMARY KEY (`membership_id`);

--
-- Ευρετήρια για πίνακα `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `r1` (`receiver_id`);

--
-- Ευρετήρια για πίνακα `music_group`
--
ALTER TABLE `music_group`
  ADD PRIMARY KEY (`music_group_id`),
  ADD KEY `c1` (`creator`);

--
-- Ευρετήρια για πίνακα `social_network`
--
ALTER TABLE `social_network`
  ADD PRIMARY KEY (`forum_id`),
  ADD KEY `m1` (`member_id`);

--
-- Ευρετήρια για πίνακα `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

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
-- AUTO_INCREMENT για πίνακα `excercise`
--
ALTER TABLE `excercise`
  MODIFY `excersize_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT για πίνακα `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `lesson`
--
ALTER TABLE `lesson`
  MODIFY `lesson_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `music_group`
--
ALTER TABLE `music_group`
  MODIFY `music_group_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `social_network`
--
ALTER TABLE `social_network`
  MODIFY `forum_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `r1` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `music_group`
--
ALTER TABLE `music_group`
  ADD CONSTRAINT `c1` FOREIGN KEY (`creator`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `social_network`
--
ALTER TABLE `social_network`
  ADD CONSTRAINT `m1` FOREIGN KEY (`member_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `s1` FOREIGN KEY (`student_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `t1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
