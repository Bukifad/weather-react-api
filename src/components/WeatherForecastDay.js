import React from "react";

export default function WeatherForeCastDay({ day }) {
  function maxTemp() {
    let temperature = Math.round(day.temp.max);
    return temperature;
  }
  function minTemp() {
    let temperature = Math.round(day.temp.max);
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
      <img className="img" src={day.weather[0].icon} alt={""} />
      <div className="forecast-temp">
        <span className="forecast-max">{maxTemp()}°</span>
        <span className="forecast-min"> {minTemp()}° </span>
      </div>
    </div>
  );
}
