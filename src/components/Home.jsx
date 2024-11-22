import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../App";

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
    <div>
      <h2>Nuestra selección para ti</h2>
      <div className="books-container">
        {bookList.map((book) => {
          return (
            <Link
              className="book-card"
              key={book.id}
              to={`/libros/${book.id}`}
            >
              <img src={book.cover} alt={book.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
