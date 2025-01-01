import React, { useState, useEffect } from "react";
import "./Hassan.css"; // Add a separate CSS file for styling

const Hassan = () => {
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
  const LATITUDE = "12.9716"; // Bengaluru
  const LONGITUDE = "77.5946";

  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setForecast(data.list.slice(0, 12)); // Get the next 12 hourly forecasts
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchForecast();
  }, []);

  if (loading) {
    return <p className="loading">Loading weather forecast...</p>;
  }

  return (
    <div className="forecast-container">
      <h2 className="forecast-title ">Hourly Weather Forecast for Bengaluru</h2>
      <div className="forecast-grid">
        {forecast.map((hour, index) => (
          <div className="forecast-card" key={index}>
            <p className="forecast-time">
              {new Date(hour.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
              className="forecast-icon h-10 w-10"
            />
            <p className="forecast-description">{hour.weather[0].description}</p>
            <p className="forecast-temp">{hour.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hassan;
