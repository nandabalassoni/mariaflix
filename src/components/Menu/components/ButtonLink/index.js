import React from 'react';

function ButtonLink(props){
    //console.log(props)
    //props -> objeto
    return (
        <a href={props.href} className={props.className}>
            Novo vídeo
        </a>
    );   
}

export default ButtonLink; //assim eu consigo importar esse arquivo em outros lugares