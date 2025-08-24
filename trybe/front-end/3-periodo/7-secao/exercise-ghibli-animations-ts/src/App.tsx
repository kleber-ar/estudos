import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useEffect, useState } from "react";
import { FilmType } from "./types";
import FilmsContext from "./context/FilmsContext";
import { Route, Routes } from "react-router-dom";

function App() {
  const [films, setFilms] = useState<FilmType[]>([]);
  const [favorites, setFavorites] = useState<FilmType[]>([]);

  useEffect(() => {
    fetch("https://api-trybe-frontend.vercel.app/api/ghibli-animations")
      .then((result) => result.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  function toggleFavorite(item: FilmType) {
    const isAlreadyFavorite = favorites.find(
      (favorite) => favorite.id === item.id
    );
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== item.id
      );
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  const context = {
    films,
    favorites,
    toggleFavorite,
  };

  return (
    <FilmsContext.Provider value={context}>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
