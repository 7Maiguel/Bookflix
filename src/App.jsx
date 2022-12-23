import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Generos from "./components/Generos"
import Perfil from "./components/Perfil"
import LibrosFiltrados from "./components/LibrosFiltrados"
import Libro from "./components/Libro"

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <div className="app-container">
        <Routes>
          <Route path="/catalogo" element={<Home/>}></Route>
          <Route exact path="/catalogo/:genero" element={<LibrosFiltrados/>}></Route>
          <Route path="/libro/:idLibro" element={<Libro/>}></Route>
          <Route path="/generos" element={<Generos/>}></Route>
          <Route path="/MiPerfil" element={<Perfil/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
