import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {
    return(
        <article className="CardItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>
            <picture>
                <img className="DetailImg" src={img} alt={nombre} />
            </picture>
            <section>
                <p>Categoria: {categoria}</p>
                <p>Descripción: {descripcion}</p>
                <p>Precio: {precio}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada ", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail