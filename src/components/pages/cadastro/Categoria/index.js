import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';

function CadastroCategoria (){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    } // aqui criamos um objetos onde passamos todas as informações enviadas pelo form, ao inves de criar um "useState" p cada campo
    
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        //chave: nome, descricao, etc
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor' que vai ser recebido pelo input
        })
    }

    function handleChange(infosDoEvento) {
        const {getAttribute, value } = infosDoEvento.target;
        setValue(getAttribute('name'), value);
    }

    return (
        <PageDefault>
            <h1> Cadastro de Categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault(); // aqui impedimos o reload da página, na hora que o usuário faz o submit no form, respeitando a estrutura SPA
                setCategorias([
                    ...categorias,
                    values   // aqui é uma lista e nela colocamos todas as categorias já existentes
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                        <textarea type="text" name="descricao" value={values.descricao} onChange={handleChange} />
                    </label>
                </div>

                <br />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                {/*<div>
                    <label>
                        Cor:
                        <input type="color" name="cor" value={values.cor} onChange={handleChange} />
                    </label>
                </div> */}

                <br />

                <button> Cadastrar</button>
            </form>

            <ul> 
                {categorias.map((categoria, indice) =>{ // aqui listamos todos os dados já cadastrados e vamos configurar a  para não dar erro quando houver duplicidade de valor
                    return (
                        <li key={`${categoria}${indice}`}> 
                            {categoria.nome}
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