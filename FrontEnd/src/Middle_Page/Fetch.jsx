import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
  const LATITUDE = "12.9716"; // Latitude for Bengaluru
  const LONGITUDE = "77.5946"; // Longitude for Bengaluru

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>5-Day Weather Forecast</h1>
      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <div>
          <h2>Location: {weatherData.city.name}, {weatherData.city.country}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {weatherData.list.slice(0, 10).map((forecast, index) => (
              <div 
                key={index} 
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <p><strong>{new Date(forecast.dt * 1000).toLocaleString()}</strong></p>
                <img 
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`} 
                  alt={forecast.weather[0].description} 
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Temperature: {forecast.main.temp}°C</p>
                <p>Weather: {forecast.weather[0].description}</p>
                <p>Wind Speed: {forecast.wind.speed} m/s</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fetch;