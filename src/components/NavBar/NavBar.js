import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import menuIcon from "./menuIcon.svg"
import cruzIcon from "./cruzImg.svg"

const NavBar = () => {
    return (
            <nav className="nav" id="nav">
            <Link to="/AeroCool/" className="navh1"><h1 className="navh1">AeroCool</h1></Link>
                <ul className="nav_links">
                    <li className="nav_link"><NavLink to={"/AeroCool/categoria/Gabinetes"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Gabinetes</NavLink></li>
                    <li className="nav_link"><NavLink to={"/AeroCool/categoria/Fuentes"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Fuentes</NavLink></li>
                    <li className="nav_link"><NavLink to={"/AeroCool/categoria/PlacasMadre"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Placas Madre</NavLink></li>
                    <li className="nav_link"><NavLink to={"/AeroCool/categoria/Procesadores"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Procesadores</NavLink></li>
                    <li className="nav_link"><NavLink to={"/AeroCool/categoria/MemoriasRam"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Memorias Ram</NavLink></li>
                    <li className="nav_link"><NavLink to={"/AeroCool/categoria/PlacasDeVideo"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Placas de Video</NavLink></li>
                </ul>
            <a href="#nav" className="menu-img"><img src={menuIcon} alt="menu-img" className="icon-img"/></a>
            <a href="#App" className="cruz-img"><img src={cruzIcon} alt="cruz-img" className="icon-img"/></a>
            <CartWidget />
            </nav>
    )
}

export default NavBar