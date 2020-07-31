import React from 'react';
import {Link} from 'react-router-dom'
import logoMariaImersaoReact from '../../assets/logoMariaImersaoReact.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logoMariaImersaoReact} alt="Mariaflix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    );   
}

export default Menu; //assim eu consigo importar esse arquivo em outros lugares