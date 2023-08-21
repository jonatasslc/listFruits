export default function AdmFruits({fruits}){
    
    return (
        <div className="cardAdm">
            <img src={fruits.image} className="imgAdm"/>
            <h3 className="nameAdm">{fruits.name}</h3>
                <button className="btnEdit">Editar</button>
                <button className="btnDelete">Excluir</button>
        </div>

    )
}