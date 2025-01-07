import React, { useState, useEffect } from "react";
import './AirQuality.css'; // Custom CSS file for additional styling

const AirQualityDetails = () => {
  const API_URL = "https://api.openweathermap.org/data/2.5/air_pollution";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
  const LATITUDE = "12.9716"; // Bengaluru
  const LONGITUDE = "77.5946"; // Bengaluru

  const [airComponents, setAirComponents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const componentNames = {
    co: "Carbon Monoxide",
    no: "Nitric Oxide",
    no2: "Nitrogen Dioxide",
    o3: "Ozone",
    so2: "Sulfur Dioxide",
    pm2_5: "Particulate Matter (≤ 2.5 microns)",
    pm10: "Particulate Matter (≤ 10 microns)",
    nh3: "Ammonia",
  };

  useEffect(() => {
    const fetchAirQualityData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Air quality data:", data); // Debugging log
        setAirComponents(data.list[0].components); // Extract air components
        setLoading(false);
      } catch (error) {
        console.error("Error fetching air quality data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAirQualityData();
  }, []);

  if (loading) {
    return <p className="loading text-center text-success fw-bold fs-3">Loading air quality data...</p>;
  }

  if (error) {
    return <p className="loading">Error: {error}</p>;
  }

  if (!airComponents) {
    return <p className="loading">No air quality data available.</p>;
  }

  // Bootstrap-based design for displaying air components
  return (
    <div className="container air-quality-details">
      <h2 className="section-title">Air Quality Components for Bengaluru</h2>
      <div className="row">
        {Object.entries(airComponents).map(([component, value]) => (
          <div className="col-md-4 col-sm-6 mb-4" key={component}>
            <div className="card air-quality-card">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {componentNames[component] || component}
                </h5>
                <p className="card-text">{value} µg/m³</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQualityDetails;
