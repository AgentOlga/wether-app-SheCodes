import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState("Copenhagen");
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.city.value;
    setCity(input);
  }

  useEffect(() => {
    const apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setWeather({
        name: response.data.name,
        temp: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
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
            placeholder="Enter a city.."
            required
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {weather && (
        <main>
          <h2>{weather.name}</h2>
          <p>{weather.description}</p>
          <p>
            <strong>Humidity:</strong> {weather.humidity}% •{" "}
            <strong>Wind:</strong> {weather.wind} km/h
          </p>
          <div className="temp">{weather.temp}°C</div>
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
