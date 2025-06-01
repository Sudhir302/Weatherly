import "../styles/TechStack.css";


function TechStack(){
    return(
        <section id="tech-used" className="tech-stack-container">
            <strong className="head-second">TECH STACK</strong>
            <div className="technologies">
                <a href="https://react.dev/" target="blank" className="card">
                    <img src="react.png" alt="react" className="tech-stack circle"/>
                    <p className="desc">
                        React is a JavaScript library for building fast, interactive user interfaces using a component-based architecture. It efficiently updates the UI using a virtual DOM and supports reusable, declarative components.
                    </p>
                </a>
                <a href="https://css3.com/" target="blank" className="card">
                    <img src="css.png" alt="react" className="tech-stack circle"/>
                    <p className="desc">
                        CSS (Cascading Style Sheets) is used to style and layout HTML elements on a webpage. It controls visual aspects like colors, fonts, spacing, and responsiveness across devices.
                    </p>
                </a>
                <a href="https://openweathermap.org/" target="blank" className="card">
                    <img src="apilogo.jpg" alt="react" className="tech-stack circle"/>
                    <p className="desc">
                        The OpenWeather API provides real-time and forecast weather data for any location worldwide. It offers detailed information like temperature, humidity, wind, and conditions via simple HTTP requests.
                    </p>
                </a>
                <a href="" className="card">
                    <img src="axios.png" alt="react" className="tech-stack circle"/>
                    <p className="desc">
                        Axios is a promise-based JavaScript library used to make HTTP requests from the browser or Node.js. It simplifies data fetching, supports async/await, and handles requests and responses with ease.
                    </p>
                </a>
            </div>
        </section>
    )
}

export default TechStack;