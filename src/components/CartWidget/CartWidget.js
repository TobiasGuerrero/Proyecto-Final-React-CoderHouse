import { useContext } from "react"
import carritoImg from "./assets/carritoImg.svg"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const CardWidget = () => {
    const {cart} = useContext (CartContext)
    const totalProducts = cart.reduce((acum, item) => acum + item.quantity, 0)
    return(
        <div className="carritoContainer">
            <Link to="/AeroCool/cart"><img src={carritoImg} alt="carrito-img" className="icon-img"/></Link>
            {totalProducts}
        </div>
    )
}

export default CardWidget