import { useState } from 'react'

export default function Perfil(){
    const [modoAdmin, setModoAdmin] = useState(false)

    return (
        <div>
            <div className="title">Mi perfil</div>
            <div className='user-data'>
                <div id="avatar"></div>
                <div className='user-info'>
                    <span><strong>Nombre completo:</strong> Miguel Angel Rodriguez Hoyos</span>
                    <br />
                    <span><strong>Email:</strong> miguel1234@gmail.com</span>
                    <br />
                    <span><strong>Modo administrador:</strong> {modoAdmin ? 'Activado' : 'Desactivado'}</span>
                    <br />
                    <div>
                        <button
                            className='user-config-btn'
                            onClick={() => setModoAdmin(!modoAdmin)}>
                                {modoAdmin ? 'Desactivar' : 'Activar'} modo administrador
                        </button>
                        {/* <button className='user-config-btn'>Cambiar avatar</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}