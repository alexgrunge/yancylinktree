import "./stylesheets/card.css"
function Parrafo(props){
    return(
        <div className={props.className}>
            <p className="parrafo">{props.texto}</p>
        </div>
    )
}
export default Parrafo 