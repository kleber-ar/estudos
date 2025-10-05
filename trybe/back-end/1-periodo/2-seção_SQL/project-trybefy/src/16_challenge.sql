
-- Criação da tabela songs
CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  duration_in_seconds INT NOT NULL,
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES albums(id)
);

-- Inserção dos dados na tabela songs
INSERT INTO songs (id, title, duration_in_seconds, album_id) VALUES
(1, 'Billie Jean', 294, 1),
(2, 'Beat It', 258, 1),
(3, 'The Girl Is Mine', 206, 1),
(4, 'Thriller', 353, 1),
(5, 'Bad', 258, 2),
(6, 'The Way You Make Me Feel', 244, 2),
(7, 'Man in the Mirror', 321, 2),
(8, 'Smooth Criminal', 253, 2),
(9, 'Dirty Diana', 296, 2),
(10, 'I Just Can''t Stop Loving You', 241, 2),
(11, 'Black or White', 222, 3),
(12, 'Remember the Time', 233, 3),
(13, 'I Put a Spell on You', 225, 4),
(14, 'Love Me or Leave Me', 182, 4),
(15, 'Do I Move You?', 189, 5),
(16, 'I Want a Little Sugar in My Bowl', 188, 5),
(17, 'With a Little Help from My Friends', 162, 6),
(18, 'Lucy in the Sky with Diamonds', 211, 6),
(19, 'A Day in the Life', 308, 6),
(20, 'Intro: Persona', 180, 10),
(21, 'Boy With Luv', 229, 10),
(22, 'Make It Right', 221, 10),
(23, 'Jamais Vu', 209, 10),
(24, 'Ovelha Negra', 234, 15),
(25, 'Ando Meio Desligado', 197, 15);
