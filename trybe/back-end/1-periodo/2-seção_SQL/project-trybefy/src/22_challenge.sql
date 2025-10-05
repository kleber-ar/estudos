
SELECT 
  ar.name AS 'Artista',
  COUNT(s.id) AS 'Quantidade de músicas'
FROM artists ar
JOIN albums al ON ar.id = al.artist_id
JOIN songs s ON al.id = s.album_id
GROUP BY ar.name
ORDER BY COUNT(s.id) DESC, ar.name ASC
LIMIT 3;
