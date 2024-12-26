import booksData from "../../db/books.json";
import BookCard from "./BookCard";

export default function BookList() {
  return (
    <div className="grid w-full grid-cols-7 gap-10">
      {booksData.map((book) => (
        <BookCard key={book.id} bookId={book.id} cover={book.cover} />
      ))}
    </div>
  );
}
