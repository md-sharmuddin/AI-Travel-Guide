import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2> AI Travel Guide</h2>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "active" : ""}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/itinerary" onClick={() => setMenuOpen(false)}>Itinerary Builder</Link></li>
        <li><Link to="/suggested" onClick={() => setMenuOpen(false)}>Suggested Trips</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
