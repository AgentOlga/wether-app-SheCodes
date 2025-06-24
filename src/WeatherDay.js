import React from "react";

export default function WeatherDay({ data }) {
  function formatDay(dateText) {
    const date = new Date(dateText);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  return (
    <div className="ForecastDay">
      <div>{formatDay(data.dt_txt)}</div>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <div>
        <strong>{Math.round(data.main.temp_max)}°</strong> / {Math.round(data.main.temp_min)}°
      </div>
    </div>
  );
}
