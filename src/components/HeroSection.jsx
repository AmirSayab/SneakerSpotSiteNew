import React from "react";
import shoe from "../images/shoe.png";
import "../styles/herosection.css";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-first-container">
        <h1>Next stop, Shoes.</h1>
        <p>
        Our shoes provide the ultimate combination of comfort and convenience, as they come equipped with a soft insole that supports your feet with each stride.
        </p>
      </div>
      <div className="hero-image-container">
        <img className="shoe-image" src={shoe} alt="" />
      </div>
    </div>
  );
}
