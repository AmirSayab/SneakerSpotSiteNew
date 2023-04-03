import React from "react";
import shoe2 from "../images/shoe 2.png";
import "../styles/introcomponent.css";
import Button from "./Button";

export default function IntroComponent() {
  return (
    <div className="intro-cont">
      <div className="image-cont">
        <img src={shoe2} alt="" />
      </div>
      <div className="heading-cont">
        <h1>Improve your well-being with Comfortable Shoes</h1>
        <p>
        We understand that finding the perfect pair of sneakers is about more than just style - it's about comfort, fit, and durability too. That's why we only stock sneakers from reputable brands that are known for their quality and craftsmanship.
        </p>
        <div className="explore-btn">
        <Button className="btn" name="Explore All Collection" />
        </div>
      </div>
    </div>
  );
}
