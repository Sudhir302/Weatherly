import "../components/Visit"
import Visit from "../components/Visit";
import "../styles/About.css"
function About(){
    return(
        <section className="about" id="about">
            <div className="description">
                <span className="head-six">SEE WEATHER</span><br />
                <strong className="logo-name">INTRODUCING <br /> WEATHERLY</strong>
                <hr />
                <p className="desc-content">
                    A modern weather app built with React and Vanilla CSS. It fetches real-time weather data using OpenWeatherMap API and displays it in a clean, mobile-friendly UI.
                    <br />
                    <br />
                    <Visit />
                </p>
            </div>
            <div className="logo">
                <img src="3dweather.png" alt="logo" />
            </div>
        </section>
    )
}

export default About;