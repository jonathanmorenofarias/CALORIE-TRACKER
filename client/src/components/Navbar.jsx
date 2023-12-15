import MacroLogo from "../images/MacroLogo.png"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="navbar">
            <img src={MacroLogo} alt="Macro Master Logo" className="macro-logo" onClick={() => window.open("/home", "_self")}/>
            <ul>
                <a href="/home"><li>Home</li></a>
                <a href=""><li>Profile</li></a>
                <a href=""><li>Meals</li></a>
                <a href=""><li>Tracker</li></a>
            </ul>
        </header>
    )
}

export default Navbar;