import { createContext } from "react";
import { ContextType } from "../types";

const FilmsContext = createContext<ContextType>({
  films: [],
  favorites: [],
  toggleFavorite: () => {},
});

export default FilmsContext;
