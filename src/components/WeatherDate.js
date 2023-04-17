import React from "react";

export default function WeatherDate(props) {
  let weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  let day = weekdays[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
