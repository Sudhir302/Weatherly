import { Link } from "react-router-dom";
import "../styles/Visit.css"
function Visit(){
    return(
            <Link to={"/checkweather"}><button className="visit"><i className="fa-solid fa-bolt"></i> Check Weather</button></Link>
    )
}

export default Visit;