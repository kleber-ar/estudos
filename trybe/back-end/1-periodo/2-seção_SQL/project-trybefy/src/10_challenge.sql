
-- Criar a tabela artists
CREATE TABLE artists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  nationality VARCHAR(30) NOT NULL
);

-- Inserir dados na tabela artists
INSERT INTO artists (id, name, nationality) VALUES
(1, 'Michael Jackson', 'USA'),
(2, 'Nina Simone', 'USA'),
(3, 'The Beatles', 'UK'),
(4, 'BTS', 'KOR'),
(5, 'Rita Lee', 'BRA');

-- Criar a tabela albums
CREATE TABLE albums (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  release_year INT NOT NULL,
  artist_id INT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artists(id)
);

-- Inserir dados na tabela albums
INSERT INTO albums (id, title, release_year, artist_id) VALUES
(1, 'Thriller', 1982, 1),
(2, 'Bad', 1987, 1),
(3, 'Dangerous', 1991, 1),
(4, 'I Put a Spell on You', 1965, 2),
(5, 'Sings the Blues', 1967, 2),
(6, 'Sgt. Peppers Lonely Hearts Club Band', 1967, 3),
(7, 'The Beatles', 1968, 3),
(8, 'Abbey Road', 1969, 3),
(9, 'Let It Be', 1970, 3),
(10, 'Map of the Soul: 7', 2020, 4),
(11, 'You Never Walk Alone', 2017, 4),
(12, 'Love Yourself: Tear', 2018, 4),
(13, 'Build Up', 1970, 5),
(14, 'Fruto Proibido', 1975, 5),
(15, 'Entradas e Bandeiras', 1976, 5);
