import { Link } from 'react-router-dom'

export default function NotFound(){
    return (
        <div className='not-found'>
            <h1>¿Te perdiste? 📚</h1>
            <h2>No encontramos esa página. Encontrarás muchos libros para explorar en nuestro catáloogo.</h2>
            <Link to="/catalogo">Inicio de Bookflix</Link>
        </div>
    )
}