import React from 'react';
import logoMariaImersaoReact from '../../assets/logoMariaImersaoReact.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logoMariaImersaoReact} alt="Mariaflix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );   
}

export default Menu; //assim eu consigo importar esse arquivo em outros lugares