import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Catalog from "./components/pages/Catalog";
import NotFound from "./components/pages/NotFound";
import Genres from "./components/Genres";
import Book from "./components/Book";
import Profile from "./components/pages/Profile";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/catalogo" element={<Catalog />}></Route>
          <Route path="/libros/:bookId" element={<Book />}></Route>
          <Route path="/generos" element={<Genres />}></Route>
          <Route path="/perfil" element={<Profile />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
