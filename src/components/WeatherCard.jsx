import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h3>🌤 Weather in {weather.name}</h3>
      <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
