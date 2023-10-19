import "./CheckoutForm.css"
import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setphone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,phone,email
        }

        onConfirm(userData)
    }

    return(
            <form className="checkoutForm" onSubmit={handleConfirm}>
                <label className="checkoutLabel">
                    Nombre
                    <input className="checkoutImput" type="text" value={name} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className="checkoutLabel">
                    Telefono
                    <input className="checkoutImput" type="tel" value={phone} onChange={({ target }) => setphone(target.value)}/>
                </label>
                <label className="checkoutLabel">
                    Email
                    <input className="checkoutImput" type="email" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <div>
                    <button className="checkoutButton" type="submit">Crear Orden</button>
                </div>
            </form>
    )
}

export default CheckoutForm