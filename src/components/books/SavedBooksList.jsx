import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/localstorage";
import booksData from "../../db/books.json";
import BookCard from "./BookCard";

export default function SavedBooksList() {
  const [favoriteBooksIDS, setFavoriteBooksIDS] = useLocalStorage(
    "favorite_books",
    [],
  );
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    setFavoriteBooks(
      booksData.filter((book) => favoriteBooksIDS.includes(book.id)),
    );
  }, []);

  const removeFavoriteBook = (bookId) => {
    setFavoriteBooksIDS(favoriteBooksIDS.filter((id) => id !== bookId));
    setFavoriteBooks(favoriteBooks.filter((book) => book.id !== bookId));
  };

  return (
    <>
      {favoriteBooks.length > 0 ? (
        <div className="grid w-full grid-cols-7 gap-10">
          {favoriteBooks.map((book) => (
            <BookCard
              key={book.id}
              bookId={book.id}
              cover={book.cover}
              isSaved={true}
              handleLike={removeFavoriteBook}
            />
          ))}
        </div>
      ) : (
        <div className="f-center h-full w-full text-[rgba(255,255,255,0.5)]">
          No hay libros guardados...
        </div>
      )}
    </>
  );
}
