-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 01 Ιουν 2024 στις 02:02:49
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
  `instument_id` int(4) NOT NULL,
  `level` enum('beginner','intermidiate','advanced') NOT NULL,
  `name` varchar(50) NOT NULL,
  `score` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `excercise`
--

INSERT INTO `excercise` (`description`, `excersize_id`, `instument_id`, `level`, `name`, `score`) VALUES
('This technique involves holding your violin in a playing position and using your fingers to pull and release the strings, creating a sound without the bow.', 1, 4, 'beginner', 'Basic plucking', 0),
('Just like with snare drum, my routine is influenced by the skills needed to play the repertoire. The most basic skill to start with is single strokes (like stick control) and I focus on them using basic major scales. I start every mallet practice session with scales. This gives me an opportunity to re-familiarize myself with the spacing of the keys, remind myself of good stick control strokes, and do all of this with an exercise that allows me to focus on these technical elements and not be distracted by something that is very complex. If I start out with something too complex in terms of accuracy it is harder for me to check my technical execution because my focus is diverted. I will start with a very slow tempo and then slowly move up. If 140 is my top tempo that day I might work up to that by starting at 90, then 110, then 125, then 135, and finally 140. Much like weight lifting (if you are curious read my previous blog post) I start very slow to check my technique (or form) and build up to a faster tempo to work on stretching my abilities. This philosophy of how to move up in tempo can be applied to the rest of the exercises discussed today.', 4, 4, 'beginner', 'Two Mallets', 2);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `feedback`
--

CREATE TABLE `feedback` (
  `contnent` varchar(50) NOT NULL,
  `feedback_id` int(4) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `student_id` int(4) NOT NULL,
  `teacher_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `feedback`
--

INSERT INTO `feedback` (`contnent`, `feedback_id`, `date`, `student_id`, `teacher_id`) VALUES
('great job!', 6, '2024-05-31 23:55:22', 1, 5);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `instrument`
--

CREATE TABLE `instrument` (
  `name` varchar(20) NOT NULL,
  `type` enum('woodwings','brass','percussion','strings') NOT NULL,
  `instument_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `instrument`
--

INSERT INTO `instrument` (`name`, `type`, `instument_id`) VALUES
('flute', 'woodwings', 1),
('trumpet', 'brass', 2),
('violin', 'strings', 3),
('xylophone', 'percussion', 4);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `lesson`
--

CREATE TABLE `lesson` (
  `lesson_id` int(4) NOT NULL,
  `description` varchar(50) NOT NULL,
  `tittle` varchar(20) NOT NULL,
  `instument_id` int(4) NOT NULL,
  `level` enum('beginner','intermediate','advanced') NOT NULL,
  `student_id` int(4) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `url` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

--
-- Άδειασμα δεδομένων του πίνακα `library`
--

INSERT INTO `library` (`library_id`, `date`, `resource`, `user_type`) VALUES
(3, '2024-05-31 23:57:56', 'Symphony No. 9 (Beet', 'teacher'),
(13, '2024-05-31 23:57:42', '1812 Overture', 'teacher');

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

--
-- Άδειασμα δεδομένων του πίνακα `message`
--

INSERT INTO `message` (`message_id`, `sender_id`, `receiver_id`, `text`, `date`) VALUES
(4, 9, 10, 'maybe you should try learning more instruments!!', '2024-06-01 00:00:44');

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

--
-- Άδειασμα δεδομένων του πίνακα `music_group`
--

INSERT INTO `music_group` (`music_group_id`, `name`, `genre`, `creator`, `description`) VALUES
(7, 'classix', 'classical', 9, 'a modern take on cla');

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

--
-- Άδειασμα δεδομένων του πίνακα `social_network`
--

INSERT INTO `social_network` (`forum_id`, `name`, `description`, `member_id`) VALUES
(12, 'classical music love', 'we love classical music!', 10);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `student`
--

CREATE TABLE `student` (
  `student_id` int(4) NOT NULL,
  `instrument_id` int(4) NOT NULL,
  `level` enum('beginner','intermediate','advanced') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `student`
--

INSERT INTO `student` (`student_id`, `instrument_id`, `level`) VALUES
(1, 4, 'beginner'),
(4, 1, 'beginner'),
(6, 1, 'advanced'),
(10, 2, 'intermediate');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `teacher`
--

CREATE TABLE `teacher` (
  `user_id` int(4) NOT NULL,
  `cv` text NOT NULL,
  `instrument_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `teacher`
--

INSERT INTO `teacher` (`user_id`, `cv`, `instrument_id`) VALUES
(2, 'CV content for teacher1', 2),
(5, 'CV content', 1),
(8, 'CV content', 3),
(9, 'cv', 3);

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
(8, 'A', 'A', 'A', 'teacher'),
(9, 'petros', '1234', 'www.erty', 'teacher'),
(10, 'paylos', '123456', 'wwww.hhjd', 'student');

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
  ADD PRIMARY KEY (`excersize_id`),
  ADD KEY `instrm1` (`instument_id`);

--
-- Ευρετήρια για πίνακα `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `tchr1` (`teacher_id`),
  ADD KEY `stdnt1` (`student_id`);

--
-- Ευρετήρια για πίνακα `instrument`
--
ALTER TABLE `instrument`
  ADD PRIMARY KEY (`instument_id`);

--
-- Ευρετήρια για πίνακα `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`lesson_id`),
  ADD KEY `tchr12` (`teacher_id`),
  ADD KEY `stdnt12` (`student_id`),
  ADD KEY `instrmnt12` (`instument_id`);

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
  ADD KEY `mem1` (`group_id`),
  ADD KEY `mem2` (`student_id`);

--
-- Ευρετήρια για πίνακα `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `send` (`sender_id`),
  ADD KEY `receive` (`receiver_id`);

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
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `i1` (`instrument_id`);

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
  MODIFY `excersize_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT για πίνακα `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT για πίνακα `instrument`
--
ALTER TABLE `instrument`
  MODIFY `instument_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT για πίνακα `lesson`
--
ALTER TABLE `lesson`
  MODIFY `lesson_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT για πίνακα `library`
--
ALTER TABLE `library`
  MODIFY `library_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT για πίνακα `membership`
--
ALTER TABLE `membership`
  MODIFY `membership_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT για πίνακα `music_group`
--
ALTER TABLE `music_group`
  MODIFY `music_group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT για πίνακα `social_network`
--
ALTER TABLE `social_network`
  MODIFY `forum_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT για πίνακα `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `adm1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `excercise`
--
ALTER TABLE `excercise`
  ADD CONSTRAINT `instrm1` FOREIGN KEY (`instument_id`) REFERENCES `instrument` (`instument_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `stdnt1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tchr1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `instrmnt12` FOREIGN KEY (`instument_id`) REFERENCES `instrument` (`instument_id`),
  ADD CONSTRAINT `stdnt12` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tchr12` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `membership`
--
ALTER TABLE `membership`
  ADD CONSTRAINT `mem1` FOREIGN KEY (`group_id`) REFERENCES `music_group` (`music_group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mem2` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `receive` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `send` FOREIGN KEY (`sender_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `i1` FOREIGN KEY (`instrument_id`) REFERENCES `instrument` (`instument_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `t1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
