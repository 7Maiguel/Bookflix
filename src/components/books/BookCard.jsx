import { useEffect, useState } from "react";
import CustomIcon from "../common/CustomIcon";
import useLocalStorage from "../../hooks/localstorage";

export default function BookCard({ bookId, cover }) {
  const [mouseFocus, setMouseFocus] = useState(false);
  const [favoriteBooks, setFavoriteBooks] = useLocalStorage(
    "favorite_books",
    [],
  );
  const [bookSaved, setBookSaved] = useState(favoriteBooks.includes(bookId));

  const toggleMouseFocus = () => setMouseFocus(!mouseFocus);

  const toggleLikeBook = () => {
    setBookSaved(!bookSaved);

    if (!favoriteBooks.includes(bookId))
      setFavoriteBooks([...favoriteBooks, bookId]);
    else setFavoriteBooks(favoriteBooks.filter((i) => i != bookId));
  };

  return (
    <div
      className="relative h-[260px] w-[170px] cursor-pointer"
      onMouseEnter={toggleMouseFocus}
      onMouseLeave={toggleMouseFocus}
    >
      <img
        src={cover}
        className={`h-full w-full duration-100 ${mouseFocus ? "opacity-85" : ""}`}
      />
      {mouseFocus && (
        <CustomIcon
          type={bookSaved ? "favoriteFilled" : "favorite"}
          styles="text-3xl absolute top-2 right-2"
          handleClick={toggleLikeBook}
        />
      )}
    </div>
  );
}
