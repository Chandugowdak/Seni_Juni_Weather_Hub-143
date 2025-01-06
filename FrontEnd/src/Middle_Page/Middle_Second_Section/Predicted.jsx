import React, { useState, useEffect } from "react";

const Predicted = () => {
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
  const LATITUDE = "12.9716"; // Bengaluru
  const LONGITUDE = "77.5946";

  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDailyForecast = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Filter the list for daily summaries (first entry for each day)
        const dailyData = data.list.filter((item, index, array) => {
          const currentDate = new Date(item.dt * 1000).toDateString();
          const previousDate =
            index > 0 ? new Date(array[index - 1].dt * 1000).toDateString() : null;
          return currentDate !== previousDate; // Take the first entry of each day
        });

        setDailyForecast(dailyData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDailyForecast();
  }, []);

  if (loading) {
    return <p className="loading">Loading daily weather forecast...</p>;
  }

  if (error) {
    return <p className="loading">Error: {error}</p>;
  }

  if (!dailyForecast || dailyForecast.length === 0) {
    return <p className="loading">No daily forecast data available.</p>;
  }

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">5-Day Weather Forecast for Bengaluru</h2>
      <div className="forecast-grid">
        {dailyForecast.map((day, index) => (
          <div className="forecast-card" key={index}>
            <p className="forecast-time">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="forecast-icon"
            />
            <p className="forecast-description">{day.weather[0].description}</p>
            <p className="forecast-temp">
              {day.main.temp}°C (Avg)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Predicted;
