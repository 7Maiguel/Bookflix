import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home(){
    const [listaLibros, setListaLibros] = useState([])
    useEffect(() => {
        getLibros()
    },[])

    const getLibros = async () => {
        let response = await fetch('http://129.213.33.130:8080/libros')
        let data = await response.json()
        setListaLibros(data)
    }

    return (
        <div>
            <h2>Nuestra selección para ti</h2>
            <div className="books-container">
                {listaLibros.map((libro) => {
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