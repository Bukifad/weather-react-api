import React from "react";

export default function WeatherForeCastDay({ day }) {
  function maxTemp() {
    let temperature = Math.round(day.temp.max);
    return temperature;
  }
  function minTemp() {
    let temperature = Math.round(day.temp.min);
    return temperature;
  }

  function days() {
    let date = new Date(day.dt * 1000);
    let days = date.getDay();

    let weekdays = ["sun", "mon", "tues", "wed", "thus", "fri", "sat"];
    return weekdays[days];
  }

  return (
    <div className="WeatherForeCastDay">
      <div className="forecast-day">{days()}</div>

      <img
        className="img"
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt={""}
      />

      <div className="forecast-temp">
        <span className="forecast-max">{maxTemp()}°</span>
        <span className="forecast-min"> {minTemp()}° </span>
      </div>
    </div>
  );
}
