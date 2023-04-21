import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
export default function WeatherForecast({ info, coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    // console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let longitude = coordinates.lon;
  let latitude = coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{forecast[0].dt}</div>
            <img className="img" src={info.icon} alt={""} />
            <div className="forecast-temp">
              <span className="forecast-max">{forecast[0].temp.max} °</span>
              <span className="forecast-min"> {forecast[0].temp.min}° </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
