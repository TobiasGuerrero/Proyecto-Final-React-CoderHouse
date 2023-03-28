import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3>AEROPC</h3>
            <ul className="nav">
                <li><button className="btn-nav-link">Home</button></li>
                <li><button className="btn-nav-link">About</button></li>
                <li><button className="btn-nav-link">Contact</button></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar