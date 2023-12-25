// src/Navigation.js
import React from "react";
import "./Navigation.css"; // Import the CSS file
import logo from "./logo.png"; // Import the app logo

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="App Logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;