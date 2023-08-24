import { useNavigate, Link } from 'react-router-dom';

export default function AdmFruits({fruits}){
    
    return (
        <div className="cardAdm">
            <img src={fruits.image} className="imgAdm"/>
            <h3 className="nameAdm">{fruits.name}</h3>  
            <Link to="/administrar/editar" className="btnEdit">Editar</Link>
            <Link to="" className="btnDelete">Excluir</Link>    
        </div>
    )
}