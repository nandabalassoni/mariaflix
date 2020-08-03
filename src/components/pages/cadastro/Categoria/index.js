import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../PageDefault';

function CadastroCategoria (){
    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

    return (
        <PageDefault>
            <h1> Cadastro de Categoria: {nomeDaCategoria} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault(); // aqui impedimos o reload da página, na hora que o usuário faz o submit no form, respeitando a estrutura SPA
                setCategorias([
                    ...categorias,
                    nomeDaCategoria   // aqui é uma lista e nela colocamos todas as categorias já existentes
                ]);
            }}>
                <label>
                    Nome da categoria:
                    <input type="text" value={nomeDaCategoria} onChange={function handler(infosDoEvento) {
                        setNomeDaCategoria(infosDoEvento.target.value);
                    } } />
                </label>

                <button> Cadastrar</button>
            </form>

            <ul> 
                {categorias.map((categoria) =>{ // aqui listamos todos os dados já cadastrados
                    return (
                        <li key={categoria}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;