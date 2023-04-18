import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/PreEntrega2Guerrero/" className="navh1">
                <h1 className="navh1">AeroPC</h1>
            </Link>
            <div className="nav">
                <NavLink to={"/categoria/Gabinetes"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Gabinetes</NavLink>
                <NavLink to={"/categoria/Fuentes"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Fuentes</NavLink>
                <NavLink to={"/categoria/PlacasMadre"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Placas Madre</NavLink>
                <NavLink to={"/categoria/Procesadores"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Procesadores</NavLink>
                <NavLink to={"/categoria/MemoriasRam"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Memorias Ram</NavLink>
                <NavLink to={"/categoria/PlacasDeVideo"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Placas de Video</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar