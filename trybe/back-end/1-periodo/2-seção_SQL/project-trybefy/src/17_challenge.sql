
SELECT 
  s.title AS 'Título'
FROM songs s
JOIN albums a ON s.album_id = a.id
WHERE a.title = 'Thriller'
ORDER BY s.title ASC;
