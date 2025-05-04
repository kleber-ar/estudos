import { useState } from "react";
import "./App.css";
import Book from "./components/Book";
import BookList from "./components/BookList";
import data from "./data.json";
import { BookListType } from "./types";

//const bookIndexStart = 10;
//const bookIndexEnd = 15;
//const placeHolderList = data.slice(bookIndexStart, bookIndexEnd); // esse código deverá ser excluído após a implementação do requisito 2

type CurrentListType = "wishList" | "readingList" | "readList";

function App() {
  const [currentList, setCurrentList] = useState<CurrentListType>("wishList");
  const [currentBook, setCurrentBook] = useState(0);
  const [wishList, setWishList] = useState<BookListType>([]);
  const [readingList, setReadingList] = useState<BookListType>([]);
  const [readList, setReadList] = useState<BookListType>([]);

  const lists = {
    wishList,
    readingList,
    readList,
  };

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={data[currentBook]} showDetails />
        <div className="selector-buttons">
          <button onClick={() => setWishList([...wishList, data[currentBook]])}>
            Adicionar à lista de desejos
          </button>
          <button
            onClick={() => setReadingList([...readingList, data[currentBook]])}
          >
            Adicionar à lista de leitura
          </button>
          <button onClick={() => setReadList([...readList, data[currentBook]])}>
            Adicionar à lista de lidos
          </button>
          <button
            onClick={() =>
              setCurrentBook((currentBook - 1 + data.length) % data.length)
            }
          >
            Livro anterior
          </button>
          <button
            onClick={() => setCurrentBook((currentBook + 1) % data.length)}
          >
            Próximo livro
          </button>
        </div>
      </div>

      <div className="list-buttons">
        <button onClick={() => setCurrentList("wishList")}>
          Exibir lista de desejos
        </button>
        <button onClick={() => setCurrentList("readingList")}>
          Exibir lista de leitura
        </button>
        <button onClick={() => setCurrentList("readList")}>
          Exibir lista de lidos
        </button>
      </div>

      <h1>
        {currentList === "wishList"
          ? "Lista de Desejos"
          : currentList === "readingList"
          ? "Lista de Leitura"
          : "Lista de Lidos"}
      </h1>

      <BookList books={lists[currentList]} />
    </div>
  );
}

export default App;
