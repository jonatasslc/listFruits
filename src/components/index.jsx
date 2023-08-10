export default function Fruta({fruits}){
    
    return (
        <div className="cardFruit">
            <h3 className="nameFruit">{fruits.name}</h3>
            <img src={fruits.image} className="imgFruit"/>
            <p className="descriptionFruit">{fruits.description}</p>
            <a href={fruits.url} target="_blank"><button className="btnLink">Saiba mais!</button></a>
        </div>
    )
}