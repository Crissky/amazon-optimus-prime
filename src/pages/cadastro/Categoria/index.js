import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000',
    }

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handlerOnChange(infosDoEvento) {
        const { name, value } = infosDoEvento.target;
        setValue(name, value);
    }

    const [categorias, setCategorias] = useState([{ nome: 'Teste', descricao: 'kappa', cor: '#fff' }]);
    const [values, setValues] = useState(valoresIniciais);
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);

            }}>
                <FormField
                    label='Nome da Categoria'
                    type='text'
                    value={values.nome}
                    name='nome'
                    onChange={handlerOnChange}
                />

                <div>
                    <label>
                        Descrição:
                    <textarea type="text"
                            value={values.descricao}
                            name='descricao'
                            onChange={handlerOnChange} />
                    </label>
                </div>

                <FormField
                    label='Cor'
                    type='color'
                    value={values.cor}
                    name='cor'
                    onChange={handlerOnChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;