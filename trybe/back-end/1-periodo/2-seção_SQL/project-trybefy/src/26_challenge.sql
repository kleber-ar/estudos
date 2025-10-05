
SELECT 
    ar.name AS Artista,
    COUNT(h.song_id) AS `Quantidade de músicas reproduzidas`
FROM 
    artists ar
JOIN 
    albums al ON ar.id = al.artist_id
JOIN 
    songs s ON al.id = s.album_id
JOIN 
    history_play_songs h ON s.id = h.song_id
GROUP BY 
    ar.id, ar.name
HAVING 
    COUNT(h.song_id) > 10
ORDER BY 
    ar.name ASC;
