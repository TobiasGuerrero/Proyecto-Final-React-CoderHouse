import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, name, price, img, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h1 className="ItemHeader">{name}</h1>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">Stock disponible: {stock}</p>
                <p className="Info">Precio: {price} $</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/AeroCool/item/${id}`} className="OptionItem">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item