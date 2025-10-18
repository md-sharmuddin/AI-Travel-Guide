import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to AI Travel Guide </h1>
      <p>Your personal assistant for planning dream trips with ease.</p>
      <div className="home-buttons">
        <Link to="/itinerary" className="btn">Plan My Trip</Link>
        <Link to="/suggested" className="btn secondary">Explore Destinations</Link>
      </div>
    </div>
  );
};

export default Home;
