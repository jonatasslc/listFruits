export default function Fruta({name, image, description, url}){
    
    return (
        <div className="cardFruit">
            <h3 className="nameFruit">{name}</h3>
            <img src={image} className="imgFruit"/>
            <p className="descriptionFruit">{description}</p>
            <a href={url} target="_blank"><button className="btnLink">Saiba mais!</button></a>
        </div>
    )
}