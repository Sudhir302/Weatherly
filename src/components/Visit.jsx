import { Link } from "react-router-dom";
import "../styles/Visit.css"
function Visit(){
    return(
        <button className="visit">
            <Link to={"/checkweather"}><i className="fa-solid fa-bolt"></i> Check Weather</Link>
        </button>
    )
}

export default Visit;