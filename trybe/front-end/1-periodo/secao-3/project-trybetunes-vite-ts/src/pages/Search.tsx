import { useState } from "react";
import searchAlbumsAPI from "../services/searchAlbumsAPI";
import { AlbumType } from "../types";
import { Link } from "react-router-dom";

export default function Search() {
  const [name, setName] = useState("");
  const [searched, setSearched] = useState("");
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const handleSearch = async () => {
    try {
      setName("");
      setLoading(true);
      const response = await searchAlbumsAPI(name);
      setAlbums(response);
      setLoading(false);
      setSearched(name);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          data-testid="search-artist-input"
        />
        <button
          type="submit"
          disabled={name.length < 2}
          data-testid="search-artist-button"
        >
          {loading ? "Carregando..." : "Pesquisar"}
        </button>
        {!loading && searched && albums.length === 0 && (
          <h1>Nenhum álbum foi encontrado</h1>
        )}
        {loading && <h1>Carregando...</h1>}
        {!loading && albums.length > 0 && (
          <div>
            <h2>Resultado de álbuns de: {searched}</h2>
            <ul>
              {albums.map((album) => (
                <li key={album.collectionId}>
                  <Link
                    to={`/album/${album.collectionId}`}
                    data-testid={`link-to-album-${album.collectionId}`}
                  >
                    {album.collectionName}
                  </Link>
                  <span>{album.artistName}</span>
                  <img src={album.artworkUrl100} alt="foto do album" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
