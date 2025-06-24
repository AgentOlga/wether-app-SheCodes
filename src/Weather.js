import React from "react";
import WeatherForecast from "./WeatherForecast";

export default function Weather({ data, forecast }) {
  return (
    <div className="Weather">
      <h2>{data.city}</h2>
      <p>{data.description}</p>
      <p>
        <strong>{data.temp} °C</strong>
      </p>
      <p>
        Humidity: {data.humidity}% • Wind: {data.wind} km/h
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
      />

      <WeatherForecast forecast={forecast} />
    </div>
  );
}
