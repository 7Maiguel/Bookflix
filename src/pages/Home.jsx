import BookCard from "../components/books/BookCard";
import booksData from "../db/books.json";

export default function Home() {
  return (
    <div className="page-container pt-[5.5rem]">
      <h2 className="mb-6">Nuestra selección para ti</h2>
      <div className="w-full grid grid-cols-7 gap-y-4">
        {booksData?.map((book) => (
          <BookCard key={book.id} bookId={book.id} cover={book.cover} />
        ))}
      </div>
    </div>
  );
}
