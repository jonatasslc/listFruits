import React, {useState} from 'react';
import api from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';
import styles from './styles.css'

const initialValue = {
    id: '',
    name: '',
    image: '',
    description: 0,
    url: '',
};

function Cadastrar(){

    const [values, setValues] = useState(initialValue);

    const navigate = useNavigate();

    function onSubmit(evento){
        evento.preventDefault();

        const url = '/fruits';

        api.post(url, values)
            .then( () =>{
                navigate('/');
            })
    }

    function onChange(ev){
        const {name, value } = ev.target

        setValues({ ...values, [name]:value})
    }

    return(
        <>
        <header>
            <h1 className='title'>Cadastrar nova fruta</h1>
            <Link to="/administrar" className='btnAdm'>Voltar</Link>
            </header>

            <form onSubmit={onSubmit} className='form'>
                <div className='cardinfo'>
                    <label htmlFor="name">Nome da fruta</label> <br></br>
                    <input type="text" id="name" name="name" onChange={onChange}/> <br></br>
                    <label htmlFor="url">Url com mais informações</label><br></br>
                    <input type="text" id="url" name="url" onChange={onChange}/> <br></br>
                    <label htmlFor="image">Url da imagem</label><br></br>
                    <input type="text" id="image" name="image" onChange={onChange}/> <br></br>
                    <label htmlFor="description">Descrição de benefícios</label><br></br>
                    <textarea cols="30" rows="5" id="description" name="description" onChange={onChange}/> <br></br>
                    <button className='btn' type="submit">Salvar</button>
                </div>
            </form>  
        </>
    )
}

export default Cadastrar;