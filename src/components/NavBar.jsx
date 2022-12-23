import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <header>
            <div className="container">
                <Link id='logo' to="/catalogo">BOOKFLIX</Link>
                <nav>
                    <ul className='navbar'>
                        <li><Link className='navbar-items' to="/catalogo">Libros</Link></li>
                        <li><Link className='navbar-items' to="/generos">Géneros</Link></li>
                        <li><Link className='navbar-items' to="/MiPerfil">Perfil</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}