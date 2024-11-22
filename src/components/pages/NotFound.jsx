import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="title text-5xl">¿Te perdiste? 📚</h2>
      <p className="mb-12 text-2xl">
        No encontramos esta página. Encontrarás muchos libros para explorar en
        nuestro catáloogo.
      </p>
      <Link to="/catalogo" className="primary-btn">
        Volver al inicio
      </Link>
    </div>
  );
}
