
SELECT 
  ar.name AS 'Artista',
  al.title AS 'Álbum',
  s.title AS 'Música'
FROM artists ar
JOIN albums al ON ar.id = al.artist_id
JOIN songs s ON al.id = s.album_id
WHERE ar.name != 'The Beatles'
ORDER BY ar.name ASC, al.title ASC, s.title ASC;
