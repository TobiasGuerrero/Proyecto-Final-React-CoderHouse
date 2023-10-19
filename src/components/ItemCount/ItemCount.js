import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setquantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setquantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setquantity(quantity - 1)
        }
    }
    
    return(
        <div className="ItemCount">
            <div className="Controls">
                <button className="OptionItem" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="OptionItem" onClick={increment}>+</button>
            </div>
            <div>
                <button className="OptionItem" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount