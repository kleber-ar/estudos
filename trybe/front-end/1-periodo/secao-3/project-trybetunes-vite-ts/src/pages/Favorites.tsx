import { useEffect, useState } from "react";
import { getFavoriteSongs, removeSong } from "../services/favoriteSongsAPI";
import { SongType } from "../types";
import MusicCard from "../components/MusicCard";

export default function Favorites() {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<SongType[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const result = await getFavoriteSongs();
        setFavorites(result);
      } catch (error) {
        console.error("Erro ao buscar músicas favoritas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, []);

  const handleRemove = async (music: SongType) => {
    setFavorites((prev) =>
      prev.filter((song) => song.trackId !== music.trackId)
    );
    try {
      await removeSong(music);
    } catch (error) {
      console.error("Erro ao remover música favorita:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Favoritas</h2>
      {loading && <p>Carregando...</p>}
      {!loading && favorites.length === 0 && <p>Nenhuma música favorita.</p>}
      {!loading &&
        favorites.map((music) => (
          <MusicCard
            key={music.trackId}
            music={music}
            isFavorite={true}
            onRemoveFavorite={handleRemove}
          />
        ))}
    </div>
  );
}
