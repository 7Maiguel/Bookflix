import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Libro(){
    const [idLibro, setIdLibro] = useState(useParams().idLibro)
    const [libro, setLibro] = useState({})
    useEffect(() => {
        getLibro()
    })

    const getLibro = async () => {
        let response = await fetch(`http://129.213.33.130:8080/libros/id/${idLibro}`)
        let data = await response.json()
        setLibro(data)
    }

    const convertirFecha = (f) => {
        let fecha = new Date(f)
        let opciones = { day: "numeric", month: "long", year: "numeric" }
        return fecha.toLocaleString('es-CO', opciones)
    }

    return (
        <div>
            <h1 className="title">{libro.titulo}</h1>
            <div className="libro-data">
                <div id="libro-cover">
                    <img src={libro.cover} alt={libro.titulo} />
                </div>
                <div className="libro-info">
                    <span><strong>Autor :</strong> {libro.autor}</span>
                    <span><strong>Fecha de publicación :</strong> {convertirFecha(libro.fechaPublicacion)}</span>
                    <br />
                    <span><strong>Género</strong></span>
                    <Link className="span-genero" to={`/catalogo/${libro.genero}`}>#{libro.genero}</Link>
                    <br />
                    <button className="reservar-btn">Rentar</button>
                </div>
            </div>
        </div>
    )
}