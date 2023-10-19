import { CartContext } from '../../context/CartContext'
import './CartItem.css'
import { useContext } from "react"

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div className="CartItem">
            <h4 className='CartItemName'>{name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: {price} $</p>
            <p>Sub Total: {price * quantity} $</p>
            <button className="OptionCartItem" onClick={handleRemove}>X</button>
        </div>
    )

}

export default CartItem