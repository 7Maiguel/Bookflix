import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function Generos(){
    const [generos, setGeneros] = useState([])
    const [newGenero, setNewGenero] = useState('')
    useEffect(() => {
        getGeneros()
    },[])

    const getGeneros = async () => {
        let response = await fetch('http://129.213.33.130:8080/generos')
        let data = await response.json()
        setGeneros(data)
    }

    const handleInputGenero = (e) => {
        setNewGenero(e.target.value)
    }

    const showModalGenero = () => {
        document.querySelector('.nuevo-genero-bg').classList.remove('hide')
    }
    
    const closeModalGenero = () => {
        document.querySelector('.nuevo-genero-bg').classList.add('hide')
    }

    const crearGenero = async () => {
        let data = {nombre: newGenero}

        let response = await fetch('http://129.213.33.130:8080/generos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(response)
        setGeneros([...generos, data])
        closeModalGenero()
    }

    return (
        <div>
            <div className="title">Géneros</div>
            <button className="crear-genero-btn" onClick={showModalGenero}>Crear +</button>
            <div className="genres-container">
                {generos.map((genero) => {
                    return <div className="genre" key={genero.id} style={{backgroundColor: '#E50914'}}>
                                <Link className="genre" to={`/catalogo/${genero.nombre}`}>
                                    {genero.nombre}
                                </Link>
                            </div>
                })}
            </div>

            <div className="nuevo-genero-bg hide">
                <div className="nuevo-genero-container">
                    <span>Crear nuevo género</span>
                    <br />
                    <input 
                        className="nuevo-genero-input"
                        type="text"
                        onKeyUp={handleInputGenero}
                        placeholder="Nuevo género..."
                        />
                    <div className="nuevo-genero-buttons">
                        <button className="nuevo-genero-btn" onClick={crearGenero}>Crear</button>
                        <button className="nuevo-genero-btn" onClick={closeModalGenero}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}