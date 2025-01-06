import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hoverly.css';  // Custom CSS for additional styling

const Hoverly = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(12.3051); // Default latitude
  const [longitude, setLongitude] = useState(75.7977); // Default longitude

  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [latitude, longitude]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-secondary" role="status"></div>
        <span className="ms-5 text-center text-success fw-bold fs-4">Loading...</span>
      </div>
    );
  }

  if (!weatherData) {
    return <div className="text-center mt-5">Error loading weather data.</div>;
  }

  // Get the city name dynamically
  const cityName = weatherData.city.name;

  // Prepare hourly forecast data for specific times: 12 AM, 3 AM, 6 AM, 9 AM, 12 PM, 3 PM, 6 PM, 9 PM
  const specificTimes = [0, 3, 6, 9, 12, 15, 18, 21]; // Hours in 24-hour format
  const hourlyForecast = weatherData.list
    .filter((weather) => {
      const forecastHour = new Date(weather.dt_txt).getHours();
      return specificTimes.includes(forecastHour);
    })
    .reduce((acc, weather) => {
      const time = new Date(weather.dt_txt).getHours();
      if (!acc.some(item => new Date(item.dt_txt).getHours() === time)) {
        acc.push(weather);
      }
      return acc;
    }, []);

  return (
    <div className="container mt-5">
      {/* Display dynamic city name */}
      <h1 className="text-center mb-4 heading-text">Hourly Weather Forecast for {cityName}</h1>

      {/* Horizontal Scrolling Container for Hourly Forecast */}
      <div className="hourly-forecast-container">
        {hourlyForecast.map((weather, index) => {
          const time = new Date(weather.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          return (
            <div className="weather-card" key={index}>
              <div className="card weather-card-content">
                <div className="card-body text-center">
                  {/* Weather Icon */}
                  <img 
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    alt={weather.weather[0].description} 
                    className="weather-icon mb-3"
                  />
                  {/* Time */}
                  <h5 className="card-title">{time}</h5>

                  {/* Weather Information */}
                  <p className="card-text">
                    <strong>Temperature:</strong> {weather.main.temp}°C
                  </p>
                  <p className="card-text">
                    <strong>Weather:</strong> {weather.weather[0].description}
                  </p>
                  <p className="card-text">
                    <strong>Wind:</strong> {weather.wind.speed} m/s
                  </p>
                  <p className="card-text">
                    <strong>Humidity:</strong> {weather.main.humidity}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hoverly;
