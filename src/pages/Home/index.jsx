import Fruta from '../../components/HomeFruits'
import React, { useState, useEffect } from 'react';
// import { getFruits } from './../api/FruitsService';
import api from '../../services/api'; // aqui está importando os dados da api fake

function Home(){
    const[fruits, setFruits] = useState([]);
    const[search, setSearch] = useState('');
  
    // usando a função do FruitsService:
  
    // useEffect( () => {
    //   setFruits(getFruits)
    // },[])  
  
  // ---------------------------------------------------------------------------
  
    // usando a api fake:
  
    useEffect( () => {
      const url = '/fruits'; // criei uma const para acessar os dados da api

      const params = {};
      if (search) {
        params.name_like = search

        api.get('/fruits?_embed=fruits', {params})
          .then( (response) => {
            // console.log(response)
            setFruits(response.data)
          })

      } else {

          api.get(url) // indicando o que a get vai acessar, no caso a variavel criada acima
        .then( (response) => {
            setFruits(response.data) // adicionando informações através do setFruits 
          })
        }
    },[search]) 
  
    return (
      <>
      
        <header>
          
          <h1 className='title'>Benefícios de incluir frutas na sua alimentação</h1>
          <button className='btnAdm'>Administrar</button>
        <input className='searchInput' type="search" placeholder='Buscar pelo nome' value={search} onChange={(ev) => setSearch(ev.target.value)}/>
        </header>
        <div className='searchDiv'>
        </div>
        <section className='sectionFruits'>
          
          <div className='listFruits'>
  
  
          {
              fruits.map(fruit => {
                return ( <Fruta 
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
  
  export default Home