import React from 'react';
import logoMariaImersaoReact from '../../assets/logoMariaImersaoReact.png';
import './Menu.css'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logoMariaImersaoReact} alt="Mariaflix logo" />
            </a>

            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    );   
}

export default Menu; //assim eu consigo importar esse arquivo em outros lugares