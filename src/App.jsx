import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import NotFound from "./pages/NotFound";
import Genres from "./pages/Genres";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/generos" element={<Genres />}></Route>
        <Route path="/perfil" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
