import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price}
    
        addItem(item, quantity)
    }

    return(
        <article className="CardItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img className="DetailImg" src={img} alt={name} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
                <p>Stock Disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? ( <Link to="/AeroCool/" className="OptionItem">Volver a ver los productos.</Link>) : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>)
                }
            </footer>
        </article>
    )
}

export default ItemDetail