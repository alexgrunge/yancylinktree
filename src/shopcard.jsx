import './stylesheets/card.css'

function Shopcard (props){
    return(
        <div className="shop-card">
            <a href={props.link} target="_blank">

            <img src={props.src}></img>
            <p>{props.texto}</p>
            </a>
        </div>
    )
}

export default Shopcard