import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <a href="#about" className="nav-section">ABOUT</a>
            <a href="#tech-used" className="nav-section">TECH USED</a>
            <img src="3dweather.png" alt="logo" className="nav-logo"/>
            <a href="#futurework" className="nav-section">FUTURE WORK</a>
            <a href="https://github.com/Sudhir302/Weatherly" className="nav-section">SOURCE CODE</a>
        </div>
    )
}

export default Navbar;