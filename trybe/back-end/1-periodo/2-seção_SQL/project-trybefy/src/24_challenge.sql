
SELECT 
    u.full_name AS Nome,
    COUNT(h.song_id) AS `Quantidade de músicas reproduzidas`
FROM 
    users u
JOIN 
    history_play_songs h ON u.id = h.user_id
GROUP BY 
    u.id, u.full_name
ORDER BY 
    COUNT(h.song_id) DESC,
    u.full_name ASC;
