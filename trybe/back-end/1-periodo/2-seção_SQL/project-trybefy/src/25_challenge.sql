
SELECT 
    a.title AS Álbum,
    COUNT(h.song_id) AS `Quantidade de músicas reproduzidas`
FROM 
    albums a
JOIN 
    songs s ON a.id = s.album_id
JOIN 
    history_play_songs h ON s.id = h.song_id
GROUP BY 
    a.id, a.title
ORDER BY 
    COUNT(h.song_id) DESC,
    a.title ASC
LIMIT 5;
