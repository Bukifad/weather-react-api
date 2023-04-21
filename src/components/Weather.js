import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import OverView from "./OverView";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  // let city = "london";

  function showTemperature(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function handelSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric&dt=1643803200`;
    axios.get(url).then(showTemperature).catch();
  }
  function handelChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <div className="container">
          <form className="formControl" onSubmit={handelSubmit}>
            <input
              onChange={handelChange}
              className="inputText"
              type="search"
              placeholder="enter a city.."
            />
            <button className="btn">search</button>
          </form>
          <OverView data={weather} />
          <WeatherForecast info={weather} coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return <h1>loading..</h1>;
  }
}
