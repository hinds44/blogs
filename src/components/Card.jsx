// import "../styles/card.css"

function Card(props){
    return <div class="col-4">
        <div class="card mb-3">{props.children}</div>
    </div>
}
export default Card;
