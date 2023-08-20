export default function AdmFruits({fruits}){
    
    return (
        <div className="cardAdm">
                        <div>                        <button className="btnEdit">Editar</button>
</div>
                        <img src={fruits.image} className="imgAdm"/>
            <h3 className="nameAdm">{fruits.name}</h3>
            <button className="btnDelete">Excluir</button>
        </div>
    )
}