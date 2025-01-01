import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Benglor.css"; // Import custom CSS for styling

const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
const LATITUDE = "12.9716"; // Latitude for Bengaluru
const LONGITUDE = "77.5946"; // Longitude for Bengaluru

function Benglor() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data when component mounts
    fetch(`${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        // Get the weather data for today and the next few hours (every 3 hours)
        setWeatherData(data.list);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  if (!weatherData) {
    return <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <p className="ml-3 text-primary" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Loading...</p>
  </div>
  }

  // Extract relevant data from the API response
  const city = "Bengaluru"; // Hardcoded for now
  const morning = weatherData[0]; // Morning (first entry)
  const afternoon = weatherData[1]; // Afternoon (second entry)
  const evening = weatherData[2]; // Evening (third entry)

  return (
    <div className="container mt-5 " id="Main_Div">
      {/* Top Section */}
      <div className="top-section text-center mb-5 ">
        <h1 className="display-4 text-white">{city} - Today's Weather</h1>
        <div className="weather-image-container mb-4">
          <img
            src={`https://openweathermap.org/img/wn/${morning.weather[0].icon}.png`}
            alt={morning.weather[0].description}
            className="weather-icon"
          />
        </div>
      </div>

      {/* Bottom Section with Morning, Afternoon, and Evening */}
      <div className="bottom-section d-flex justify-content-between">
        <div className="section morning">
          <h4 className="text-white">Morning</h4>
          <img
            src={`https://openweathermap.org/img/wn/${morning.weather[0].icon}.png`}
            alt={morning.weather[0].description}
            className="weather-icon"
          />
          <p className="temperature text-white">{`${morning.main.temp}°C`}</p>
        </div>
        <div className="section afternoon">
          <h4 className="text-white">Afternoon</h4>
          <img
            src={`https://openweathermap.org/img/wn/${afternoon.weather[0].icon}.png`}
            alt={afternoon.weather[0].description}
            className="weather-icon"
          />
          <p className="temperature text-white">{`${afternoon.main.temp}°C`}</p>
        </div>
        <div className="section evening">
          <h4 className="text-white">Evening</h4>
          <img
            src={`https://openweathermap.org/img/wn/${evening.weather[0].icon}.png`}
            alt={evening.weather[0].description}
            className="weather-icon"
          />
          <p className="temperature text-white">{`${evening.main.temp}°C`}</p>
        </div>
      </div>
    </div>
  );
}

export default Benglor;
