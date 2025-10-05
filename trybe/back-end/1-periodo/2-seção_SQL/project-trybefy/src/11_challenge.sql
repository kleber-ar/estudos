
SELECT 
  a.title AS 'Album',
  a.release_year AS 'Ano de lançamento',
  ar.name AS 'Artista'
FROM albums a
JOIN artists ar ON a.artist_id = ar.id
WHERE LOWER(a.title) LIKE '%you%'
ORDER BY a.release_year ASC;
