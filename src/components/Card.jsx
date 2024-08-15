// import "../styles/card.css"

function Card(props){
    return <div className="col-4">
        <div className="card mb-3">{props.children}</div>
    </div>
}
export default Card;
