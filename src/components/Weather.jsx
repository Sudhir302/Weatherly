import axios from "axios";
import "../components/Footer"
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/Weather.css";

function Weather(){
    let[city,setCity] = useState("");
    let[weather, setWeather] = useState("");
    let[image,setImage] = useState("/weather.png");
    let[temp, setTemp] = useState("");

    let cityHandler = (e)=>{
        setCity(e.target.value)
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        try {
            let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=4cd115f870e734d792bf5475f251fd21`)
            console.log(res)
            setTemp(Math.floor(res.data.main.temp)-273+"°C");
            let imgDetails = res.data.weather[0].main
            setWeather(imgDetails);
            if(imgDetails == "Clear"){
                setImage("/sunny.jpg")
            }
            else if(imgDetails == "Clouds"){
                setImage("/Cloudy.jpg")
            }
            else if(imgDetails == "Rain"){
                setImage("/rainy.jpg")
            }
            else if(imgDetails == "Fog"){
                setImage*"/foggy.jpg";
            }
        } catch (err) {
            console.error(err.response.data.message)
            setCity("Check your City")
            setTemp("__°C")

            setImage("/nocity.png")
        }
    }
    return(
        <>
        <div className="weather-container">
            <strong>Weatherly</strong>
            <form className="search-city" onSubmit={submitHandler}>
                <input type="search" name="search" id="search" value={city} onChange={cityHandler} placeholder="Search For City" required />
                <button type="submit">Search</button>
            </form>
            <div className="weather-forcaste" >
                <div className="city">{city || "Your City"}</div>
                <div className="temp">{temp || "0°C"}</div>
                <div className="weather">
                    {weather || "Current Weather"}
                </div>
                <img src={image} alt="weatherImage" className="weather-img" />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Weather;