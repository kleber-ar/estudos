
SELECT 
  ar.name AS 'Artista'
FROM artists ar
JOIN albums a ON a.artist_id = ar.id
GROUP BY ar.name
HAVING COUNT(a.id) >= 3
ORDER BY ar.name ASC;
