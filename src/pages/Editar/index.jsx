import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import { useNavigate, Link, useParams } from 'react-router-dom';
import styles from './styles.css'

const initialValue = {
    id: '',
    name: '',
    image: '',
    description: 0,
    url: '',
};

function Editar(){

    const [values, setValues] = useState(initialValue);

    const navigate = useNavigate();

    const { id } = useParams();

    const url = `/fruits/${id}`;
    
    useEffect( () =>{
        if (id){
            api.get(url)
                .then( (response) => {
                    setValues(response.data)
                })
        }
    },[])

    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do form

        api.put(url, values)
            .then( () =>{
                navigate('/administrar');
            })
    }

    function onChange(ev){
        const {name, value } = ev.target

        setValues({ ...values, [name]:value})
    }

    return(
        <>
        <header>
            <h1 className='title'>Editar informações</h1>
            <Link to="/administrar" className='btnAdm'>Voltar</Link>
            </header>

            <form onSubmit={onSubmit} className='form'>
                <div className='cardinfo'>
                    <label htmlFor="name">Nome da fruta</label> <br></br>
                    <input type="text" id="name" name="name" value={values.name} onChange={onChange}/> <br></br>
                    <label htmlFor="url">Url com mais informações</label><br></br>
                    <input type="text" id="url" name="url" value={values.url} onChange={onChange}/> <br></br>
                    <label htmlFor="image">Url da imagem</label><br></br>
                    <input type="text" id="image" name="image" value={values.image} onChange={onChange}/> <br></br>
                    <label htmlFor="description">Descrição de benefícios</label><br></br>
                    <textarea cols="30" rows="5" id="description" name="description" value={values.description} onChange={onChange}/> <br></br>
                    <button className='btn' type="submit">Salvar</button>
                </div>
            </form>  
        </>
    )
}

export default Editar;