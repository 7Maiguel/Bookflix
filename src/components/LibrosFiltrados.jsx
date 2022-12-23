import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function LibrosFiltrados() {
    const [genero, setGenero] = useState(useParams().genero)
    const [LibrosFiltrados, setLibrosFiltrados] = useState([])
    useEffect(() => {
        getLibrosFiltrados()
    })

    const getLibrosFiltrados = async () => {
        let response = await fetch(`http://129.213.33.130:8080/libros/genero/${genero}`)
        let data = await response.json()
        setLibrosFiltrados(data)
    }

    return (
        <div>
            <h1 className="title">Libros de <span style={{textDecoration: 'underline'}}>{genero.toUpperCase()}</span></h1>
            <div className="books-container">
                {LibrosFiltrados.map((libro) => {
                    return  <Link 
                                className="book-card"
                                key={libro.id}
                                to={`/libro/${libro.id}`}>
                                    <img src={libro.cover} alt={libro.titulo} />
                            </Link>
                })}
            </div>
        </div>
    )
}