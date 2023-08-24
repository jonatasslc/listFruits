import Fruit from '../../components/AdmFruits'
import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import styles from './styles.css';
import { useNavigate, Link } from 'react-router-dom';

function Administrar(){
    const[fruits, setFruits] = useState([]);

    useEffect( () => {
      const url = '/fruits';
          api.get(url)
        .then( (response) => {
            setFruits(response.data)
          })
  
    },[]) 

    return (
      <>
        <header>
          <h1 className='title'>Administre as informações</h1>
          <Link to="/administrar/cadastrar" className='btnAdm'>Nova fruta</Link>
          <Link to="/" className='btnAdm'>Inicio</Link>
        </header>
        <section className='sectionFruitsAdm'>
          <div className='listFruitsAdm'>
  
          {
              fruits.map(fruit => {
                return ( <Fruit 
                  key={fruit.id}
                  fruits={fruit}
                    /> )
              })
            }
  
          </div>
        </section>
      </>
    )
  }
  
  export default Administrar