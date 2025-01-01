import React from 'react';
import { useQuery } from '@tanstack/react-query'; // Use the correct hook

const First = () => {
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "38d4bf9d0dd291a487f04b1835393b31";
  const LATITUDE = "12.9716"; // Bengaluru
  const LONGITUDE = "77.5946";

  // Fetch data function
  const fetchData = async () => {
    const res = await fetch(`
      ${API_URL}?lat=${LATITUDE}&lon=${LONGITUDE}&units=metric&appid=${API_KEY}
    `);
    if (!res.ok) {
      throw new Error("Data not found");
    }
    return res.json();
  };

  // Using useQuery hook
  const { data, isLoading, isError } = useQuery(['fetchWeatherData'], fetchData);

  // Handling loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <h3>Weather Forecast for Bengaluru</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default First;
