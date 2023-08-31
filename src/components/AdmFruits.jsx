import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api'

export default function AdmFruits({fruits}){
    const [loading, setLoading] = useState(true);

    function onDelete(id){
      setLoading(false);

      const url = `/fruits/${id}`;
      api.delete(url)
      .then ( (response)=> {});
    }
    
    return (
        <>
          {!loading
            ? (
                <div>Deletando...</div>
              )
              :
              (
            <div>
        <div className='buttonsAdm'>
        
            <Link to={`/administrar/editar/${fruits.id}`} className="btnEdit">Editar</Link>
            <Link to="" className="btnDelete" onClick={ () => onDelete(fruits.id)}>Excluir</Link>

        </div>

        <div className="cardAdm">
           
            <img src={fruits.image} className="imgAdm"/>
            <h3 className="nameAdm">{fruits.name}</h3>  
            
        </div>
            
        </div>
          )
        }
        </>
    )
}