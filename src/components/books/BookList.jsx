import { useEffect, useState } from "react";
import booksData from "../../db/books.json";
import useLocalStorage from "../../hooks/localstorage";
import BookCard from "./BookCard";

export default function BookList() {
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

  const toggleLike = (bookId) => {
    if (favoriteBooksIDS.includes(bookId)) {
      setFavoriteBooksIDS(favoriteBooksIDS.filter((id) => id !== bookId));
      setFavoriteBooks(favoriteBooks.filter((book) => book.id !== bookId));
    } else {
      setFavoriteBooksIDS([...favoriteBooksIDS, bookId]);
      setFavoriteBooks([
        ...favoriteBooks,
        booksData.find((book) => book.id === bookId),
      ]);
    }
  };

  return (
    <div className="grid w-full grid-cols-7 gap-10">
      {booksData.map((book) => (
        <BookCard
          key={book.id}
          bookId={book.id}
          cover={book.cover}
          isSaved={favoriteBooksIDS.includes(book.id)}
          handleLike={toggleLike}
        />
      ))}
    </div>
  );
}
