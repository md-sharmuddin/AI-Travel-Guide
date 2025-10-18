import React from "react";
import "../styles/suggested.css";

const trips = [
{
    name: "Paris, France",
    highlight: "Romance, Art, Cafes",
    bestTime: "April - June",
  },
  {
    name: "Bali, Indonesia",
    highlight: "Beaches, Temples, Yoga retreats",
    bestTime: "April - October",
  },
  {
    name: "Tokyo, Japan",
    highlight: "Technology, Food, Cherry Blossoms",
    bestTime: "March - May",
  },
  {
    name: "New York City, USA",
    highlight: "Skyscrapers, Broadway, Nightlife",
    bestTime: "April - June, September - November",
  },
  {
    name: "Cape Town, South Africa",
    highlight: "Table Mountain, Beaches, Wine Tours",
    bestTime: "October - April",
  },
  {
    name: "Barcelona, Spain",
    highlight: "Architecture, Tapas, Mediterranean beaches",
    bestTime: "May - September",
  },
  {
    name: "Rome, Italy",
    highlight: "Ancient History, Food, Vatican City",
    bestTime: "April - October",
  },
];

const SuggestedTrips = () => {
  return (
    <div className="suggested-trips">
      <h2> Suggested Destinations</h2>
      <div className="trip-list">
        {trips.map((trip, i) => (
          <div className="trip-card" key={i}>
            <h3>{trip.name}</h3>
            <p><strong>Highlights:</strong> {trip.highlight}</p>
            <p><strong>Best Time:</strong> {trip.bestTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedTrips;
