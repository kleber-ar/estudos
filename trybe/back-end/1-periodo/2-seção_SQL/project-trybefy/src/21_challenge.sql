
SELECT 
  al.title AS 'Álbum',
  SUM(s.duration_in_seconds) AS 'Duração'
FROM albums al
JOIN songs s ON al.id = s.album_id
GROUP BY al.title
ORDER BY SUM(s.duration_in_seconds) DESC;
