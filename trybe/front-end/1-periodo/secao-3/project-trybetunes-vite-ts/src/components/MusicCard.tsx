import { useState } from "react";
import { SongType } from "../types";
import { addSong, removeSong } from "../services/favoriteSongsAPI";

type MusicCardProps = {
  music: SongType;
  isFavorite: boolean;
  onRemoveFavorite?: (music: SongType) => void;
};

function MusicCard({ music, isFavorite, onRemoveFavorite }: MusicCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = async () => {
    try {
      if (favorite) {
        setFavorite(false);

        if (onRemoveFavorite) onRemoveFavorite(music);

        removeSong(music).catch((error) => {
          console.error("Erro ao remover música favorita:", error);
          setFavorite(true);
        });
      } else {
        setFavorite(true);
        await addSong(music);
      }
    } catch (error) {
      console.error("Erro ao atualizar música favorita:", error);
    }
  };

  return (
    <div>
      <h3>{music.trackName}</h3>
      <audio data-testid="audio-component" src={music.previewUrl} controls>
        <track kind="captions" />O seu navegador não suporta o elemento{" "}
        <code>audio</code>
      </audio>
      <label
        data-testid={`checkbox-music-${music.trackId}`}
        style={{ cursor: "pointer" }}
      >
        <input
          type="checkbox"
          checked={favorite}
          onChange={handleFavorite}
          style={{
            opacity: 0,
          }}
        />
        <img
          src={
            favorite
              ? "/src/images/checked_heart.png"
              : "/src/images/empty_heart.png"
          }
          alt="favorite"
        />
      </label>
    </div>
  );
}

export default MusicCard;
