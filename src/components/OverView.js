import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherDate from "./WeatherDate";

export default function OverView({ data }) {
  return (
    <div className="overview">
      <div className="city">
        <h1>{data.city}</h1>
        <ul>
          <li>
            {/* {data.date.getDays()} */}
            <WeatherDate date={data?.date} />
          </li>
          <li>{data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="temp">
          <img src={data.icon} alt={""} />
          <WeatherTemperature celsius={data.temperature} />
        </div>

        <ul>
          <li>Humidity: {data.humidity}%</li>
          <li>Wind: {data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
