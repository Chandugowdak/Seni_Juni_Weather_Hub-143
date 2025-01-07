import React, { useState, useEffect, useContext } from "react";
import "./Predicted.css"; // Importing custom CSS file for styles
import { CreateContext } from "../../Context_Globel_Store/CreateContext";

const Predicted = () => {
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";

  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState(""); // State for city name
  const { longitude, latitude } = useContext(CreateContext); // Latitude and Longitude

  useEffect(() => {
    const fetchDailyForecast = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Set the city name from the response data
        setCityName(data.city.name);

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
  }, [longitude, latitude]);

  if (loading) {
    return <p className="loading fw-bold text-center text-success fs-2">Loading daily weather forecast...</p>;
  }

  if (error) {
    return <p className="loading">Error: {error}</p>;
  }

  if (!dailyForecast || dailyForecast.length === 0) {
    return <p className="loading">No daily forecast data available.</p>;
  }

  return (
    <div className="forecast-container-alt">
      <h2 className="forecast-title-alt">5-Day Weather Forecast for {cityName}</h2>
      <div className="forecast-grid-alt">
        {dailyForecast.map((day, index) => (
          <div className="forecast-card-alt" key={index}>
            <p className="forecast-time-alt">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="forecast-icon-alt"
            />
            <p className="forecast-description-alt">
              {day.weather[0].description}
            </p>
            <p className="forecast-temp-alt">
              Avg Temp: <strong>{day.main.temp}°C</strong>
            </p>
            <p className="forecast-humidity-alt">
              Humidity: <strong>{day.main.humidity}%</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Predicted;
