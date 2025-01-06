import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CoorgFetchAPI.css';  // Custom CSS for additional styling


const CoorgFetchAPI = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Latitude_Set , setLatitude] = useState(12.3051);

  
const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
const LATITUDE = Latitude_Set; // Latitude for Coorg
const LONGITUDE = "75.7977"; // Longitude for Coorg

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`
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
  }, [setLatitude]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-secondary" role="status"></div>
        <span className="ms-5  text-center text-success fw-bold fs-4">Loading...</span>
      </div>
    );
  }

  if (!weatherData) {
    return <div className="text-center mt-5">Error loading weather data.</div>;
  }

  // Filter for 6 AM, 12 PM, and 6 PM data
  const todayForecast = weatherData.list.filter(item => {
    const date = new Date(item.dt_txt);
    const hours = date.getHours();
    return hours === 6 || hours === 12 || hours === 18; // Only 6 AM, 12 PM, and 6 PM
  });

  // Get only one result for 6 AM, 12 PM, and 6 PM
  const filteredForecast = [
    todayForecast.find(item => new Date(item.dt_txt).getHours() === 6),  // 6 AM
    todayForecast.find(item => new Date(item.dt_txt).getHours() === 12), // 12 PM
    todayForecast.find(item => new Date(item.dt_txt).getHours() === 18), // 6 PM
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 heading-text">Today's Weather Forecast for Coorg</h1>
      <div className="row justify-content-center">
        {filteredForecast.map((weather, index) => (
          weather && (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <div className="card custom-card shadow-lg">
                <div className="card-body text-center">
                  {/* Weather Image */}
                  <img 
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    alt={weather.weather[0].description} 
                    className="weather-icon mb-3"
                  />
                  <h5 className="card-title">
                    {new Date(weather.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </h5>
                  <p className="card-text">
                    <strong>Temperature:</strong> {weather.main.temp}°C
                  </p>
                  <p className="card-text">
                    <strong>Weather:</strong> {weather.weather[0].description}
                  </p>
                  <p className="card-text">
                    <strong>Humidity:</strong> {weather.main.humidity}%
                  </p>
                  <p className="card-text">
                    <strong>Wind:</strong> {weather.wind.speed} m/s
                  </p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CoorgFetchAPI;
