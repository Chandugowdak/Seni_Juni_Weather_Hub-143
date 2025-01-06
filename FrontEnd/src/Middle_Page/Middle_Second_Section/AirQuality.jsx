import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Montley.css';

const Montley = () => {
  const API_URL = "https://api.openweathermap.org/data/2.5/air_pollution";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
  const LATITUDE = "12.9716"; // Bengaluru
  const LONGITUDE = "77.5946"; // Bengaluru

  const [airQuality, setAirQuality] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        const url = `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setAirQuality(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching air quality data:", error);
        setLoading(false);
      }
    };

    fetchAirQuality();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-secondary" role="status"></div>
        <span className="ms-3">Loading Air Quality Data...</span>
      </div>
    );
  }

  if (!airQuality || !airQuality.list || airQuality.list.length === 0) {
    return <div className="text-center mt-5">No air quality data available.</div>;
  }

  const aqi = airQuality.list[0].main.aqi; // Air Quality Index
  const components = airQuality.list[0].components;

  const getAQIDescription = (aqiValue) => {
    switch (aqiValue) {
      case 1: return "Good";
      case 2: return "Fair";
      case 3: return "Moderate";
      case 4: return "Poor";
      case 5: return "Very Poor";
      default: return "Unknown";
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Air Quality in Bengaluru</h1>
      <div className="card shadow-lg">
        <div className="card-body">
          <h5>Air Quality Index (AQI): {aqi} - {getAQIDescription(aqi)}</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Carbon Monoxide (CO):</strong> {components.co} µg/m³
            </li>
            <li className="list-group-item">
              <strong>Nitrogen Monoxide (NO):</strong> {components.no} µg/m³
            </li>
            <li className="list-group-item">
              <strong>Nitrogen Dioxide (NO₂):</strong> {components.no2} µg/m³
            </li>
            <li className="list-group-item">
              <strong>Ozone (O₃):</strong> {components.o3} µg/m³
            </li>
            <li className="list-group-item">
              <strong>Sulphur Dioxide (SO₂):</strong> {components.so2} µg/m³
            </li>
            <li className="list-group-item">
              <strong>Fine Particles (PM2.5):</strong> {components.pm2_5} µg/m³
            </li>
            <li className="list-group-item">
              <strong>Coarse Particles (PM10):</strong> {components.pm10} µg/m³
            </li>
            <li className="list-group-item">
              <strong>Ammonia (NH₃):</strong> {components.nh3} µg/m³
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Montley;
