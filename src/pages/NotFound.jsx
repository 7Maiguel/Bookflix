import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-container flex h-[100vh] flex-col items-center justify-center">
      <h2 className="title text-5xl">¿Te perdiste? 📚</h2>
      <p className="mb-12 text-2xl">
        No encontramos esta página. Encontrarás muchos libros para explorar en
        nuestro catáloogo.
      </p>
      <Link to="/" className="primary-btn px-10 py-4">
        Volver al inicio
      </Link>
    </div>
  );
}
