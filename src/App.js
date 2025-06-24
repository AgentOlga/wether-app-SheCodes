import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState("Copenhagen");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.city.value;
    setCity(input);
  }

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(weatherUrl).then((response) => {
      console.log("API KEY:", apiKey);

    const data = response.data;
      setWeather({
        city: data.name,
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
      });

 
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(forecastUrl).then((forecastResponse) => {
        const filtered = forecastResponse.data.list.filter((item, index) => index % 8 === 0);
        setForecast(filtered);
      });
    });
  }, [city]);

  return (
    <div className="container">
      <header>
        <h1>🌤️ SheCodes Weather</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="Enter a city..."
            required
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {weather && (
        <main>
          <Weather data={weather} forecast={forecast} />
        </main>
      )}

      <footer>
        <p>
          Project by <strong>SheCodes</strong> •{" "}
          <a
            href="https://github.com/AgentOlga/ReactGitHubNetlify"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          •{" "}
          <a href="https://netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
