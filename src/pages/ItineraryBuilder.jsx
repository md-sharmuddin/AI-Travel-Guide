import React, { useState } from "react";
import API from "../services/api";
import { fetchWeather } from "../services/weather";
import WeatherCard from "../components/WeatherCard";
import "../styles/itinerary.css";

const ItineraryBuilder = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState();
  const [interests, setInterests] = useState("");
  const [itinerary, setItinerary] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateItinerary = async () => {
    if (!destination) {
      alert("Please enter a destination first!");
      return;
    }
    setLoading(true);
    const plan = await API.generateItinerary(destination, days, interests);
    setItinerary(plan);
    setLoading(false);
  };

  const checkWeather = async () => {
    if (!destination) {
      alert("Please enter a city name first!");
      return;
    }
    setLoading(true);
    const weatherData = await fetchWeather(destination);
    setWeather(weatherData);
    setLoading(false);
  };

  return (
    <div className="itinerary-container">
      <h2>Build Your Custom Trip</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Days(max up to 10 days)"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <input
          type="text"
          placeholder="Interests (beaches, food, adventure...)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <div className="btn-group">
          <button onClick={generateItinerary}>Generate Itinerary</button>
          <button className="secondary" onClick={checkWeather}>
            Check Weather
          </button>
        </div>
      </div>

      {loading && <p>⏳ Loading...</p>}

      {weather && <WeatherCard weather={weather} />}

      {itinerary && (
        <div className="itinerary-result">
          <h3>Your {days}-Day Plan for {destination}</h3>
          <ul>
            {itinerary.map((day, index) => (
              <li key={index}>
                <strong>Day {index + 1}:</strong> {day}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItineraryBuilder;
