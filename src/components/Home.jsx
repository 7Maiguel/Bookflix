import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../App";
import BookCard from "./books/BookCard";

export default function Home() {
  const [bookList, setbookList] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const { data, error } = await supabase.from("books").select();
    setbookList(data);
  };

  return (
    <>
      <h2 className="mb-6">Nuestra selección para ti</h2>
      <div className="w-full">
        {bookList.map((book) => (
          <BookCard key={book.id} bookId={book.id} cover={book.cover} />
        ))}
      </div>
    </>
  );
}
