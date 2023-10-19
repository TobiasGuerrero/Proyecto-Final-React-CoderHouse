import { useContext } from "react"
import "./Cart.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, totalPrice} = useContext(CartContext)

    if(cart.length === 0 ){
        return(
            <div className="CartContainer">
                <h1>Carrito Vacio</h1>
                <Link to="/AeroCool/" className="OptionCart">Volver a Productos</Link>
            </div>
        )
    }else{
        return(
            <div className="CartContainer">
                {cart.map(p => <CartItem key={p.id}{...p}/>)}
                <h3>Total: {totalPrice} $</h3>
                <button onClick={() => clearCart()} className="OptionCart">Vaciar Carrito.</button>
                <Link to="/AeroCool/checkout" className="OptionCart">CheckOut</Link>
            </div>
        )
    }

}

export default Cart