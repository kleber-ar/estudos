import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMusics from "../services/musicsAPI";
import { SongType } from "../types";
import MusicCard from "../components/MusicCard";
import { getFavoriteSongs } from "../services/favoriteSongsAPI";

export default function Album() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [albumImage, setAlbumImage] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [musics, setMusics] = useState<SongType[]>([]);
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);

  useEffect(() => {
    async function fetchAlbumDetail() {
      try {
        if (!id) return;

        const response = await getMusics(id);
        const [albumInfo, ...musicList] = response;

        setAlbumImage(albumInfo.artworkUrl100);
        setAlbumName(albumInfo.collectionName);
        setArtistName(albumInfo.artistName);
        setMusics(musicList);

        const favorites = await getFavoriteSongs();
        setFavoriteSongs(favorites);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAlbumDetail();
  }, [id]);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <div>
        <h2 data-testid="artist-name">{artistName}</h2>
        <h3 data-testid="album-name">{albumName}</h3>
        <img src={albumImage} alt={`Capa do álbum ${albumName}`} />

        {musics.map((music) => (
          <MusicCard
            key={music.trackId}
            music={music}
            isFavorite={favoriteSongs.some(
              (fav) => fav.trackId === music.trackId
            )}
          />
        ))}
      </div>
      )
    </div>
  );
}
