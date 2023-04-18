import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h3>AeroPC</h3>
            </Link>
            <div className="nav">
                <NavLink to={"/categoria/gabinetes"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Gabinetes</NavLink>
                <NavLink to={"/categoria/fuentes"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Fuentes</NavLink>
                <NavLink to={"/categoria/placasMadre"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Placas Madre</NavLink>
                <NavLink to={"/categoria/procesadores"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Procesadores</NavLink>
                <NavLink to={"/categoria/memoriasRam"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Memorias Ram</NavLink>
                <NavLink to={"/categoria/placasVideo"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Placas de Video</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar