
SELECT 
  ar.name AS 'Artista',
  GROUP_CONCAT(a.title ORDER BY a.id ASC SEPARATOR ',') AS 'Álbuns'
FROM artists ar
JOIN albums a ON a.artist_id = ar.id
GROUP BY ar.name
ORDER BY ar.name ASC;
