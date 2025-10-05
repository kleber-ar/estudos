
SELECT 
  ar.name AS 'Artista',
  COUNT(a.id) AS 'Quantidade de álbuns'
FROM artists ar
LEFT JOIN albums a ON a.artist_id = ar.id
GROUP BY ar.name
ORDER BY COUNT(a.id) DESC, ar.name ASC;
