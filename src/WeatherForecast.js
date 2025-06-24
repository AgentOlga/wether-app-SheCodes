import React from "react";
import WeatherDay from "./WeatherDay";
import "./styles.css";

export default function WeatherForecast({ forecast }) {
  return (
    <div className="Forecast">
      <h3>5-Day Forecast</h3>
      <div className="ForecastGrid">
        {forecast.map((day, index) => (
          <WeatherDay data={day} key={index} />
        ))}
      </div>
    </div>
  );
}
