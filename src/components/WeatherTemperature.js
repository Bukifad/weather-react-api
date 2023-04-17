import React, { useState } from "react";

export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  let fahrenheit = (celsius * 9) / 5 + 32;
  if (unit === "celsius") {
    return (
      <div className="temp">
        <span className="tempNum">{Math.round(celsius)}</span>
        <span>
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temp">
        <span className="tempNum">{Math.round(fahrenheit)}</span>
        <span>
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
