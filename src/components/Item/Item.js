import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, nombre, precio, img, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h1 className="ItemHeader">{nombre}</h1>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">Precio: {precio} $</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="OptionItem">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item