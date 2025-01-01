import React, { useState, useEffect } from "react";

const Daily = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
    const LATITUDE = "12.9716"; // Bengaluru
    const LONGITUDE = "77.5946";

  const [pastWeather, setPastWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPastWeather = async () => {
      try {
        const currentTime = Math.floor(Date.now() / 1000); // Current timestamp in seconds
        const daysToFetch = 6;
        const requests = [];

        for (let i = 1; i <= daysToFetch; i++) {
          const timestamp = currentTime - i * 86400; // Subtract days in seconds
          requests.push(
            fetch(
              `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&dt=${timestamp}&units=metric&appid=${API_KEY}`
            ).then((res) => {
              if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
              }
              return res.json();
            })
          );
        }

        const responses = await Promise.all(requests);
        const formattedData = responses.map((data) => ({
          date: new Date(data.current.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          }),
          temp: data.current.temp,
          weather: data.current.weather[0],
        }));

        setPastWeather(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching past weather data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPastWeather();
  }, []);

  if (loading) {
    return <p className="loading">Loading past weather data...</p>;
  }

  if (error) {
    return <p className="loading">Error: {error}</p>;
  }

  if (!pastWeather || pastWeather.length === 0) {
    return <p className="loading">No past weather data available.</p>;
  }

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">Past 6 Days Weather for Bengaluru</h2>
      <div className="forecast-grid">
        {pastWeather.map((day, index) => (
          <div className="forecast-card" key={index}>
            <p className="forecast-time">{day.date}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
              alt={day.weather.description}
              className="forecast-icon"
            />
            <p className="forecast-description">{day.weather.description}</p>
            <p className="forecast-temp">{day.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
