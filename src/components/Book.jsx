import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../App";

export default function Book() {
  const { bookId } = useParams();
  const [book, setBook] = useState({
    title: "",
    publicationDate: "",
    cover: "",
  });

  useEffect(() => {
    searchBook();
  }, []);

  const searchBook = async () => {
    const { data, error } = await supabase
      .from("books")
      .select()
      .eq("id", bookId);

    setBook({
      title: data[0].title,
      publicationDate: data[0].publication_date,
      cover: data[0].cover,
    });
  };

  const formatDate = (date) => {
    let options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleString("es-CO", options);
  };

  return (
    <div>
      <div className="flex">
        <div className="mr-6">
          <img src={book.cover} alt={book.title} className="w-[300px] mb-4" />
          <button className="w-full bg-red-600 font-semibold rounded py-2 text-xl">Rentar</button>
        </div>
        <div className="book-info">
          <h1 className="text-6xl font-semibold">{book.title}</h1>
          <span>
            <strong>Fecha de publicación :</strong>{" "}
            {formatDate(book.publicationDate)}
          </span>
          <br />
          {/* <span>
            <strong>Género</strong>
          </span>
          <Link className="span-genero" to={`/catalogo/${book.title}`}>
            #{book.title}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
