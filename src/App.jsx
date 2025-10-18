import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import SuggestedTrips from "./pages/SuggestedTrips";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<ItineraryBuilder />} />
          <Route path="/suggested" element={<SuggestedTrips />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
