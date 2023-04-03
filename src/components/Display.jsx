import React from "react";
import Button from "./Button.jsx";
import shoes9 from "../images/shoes9.jpg";
import "../styles/display.css";

export default function Display() {
  return (
    <div className="display-cont">
      <div className="para-cont">
        <p>
        Looking for the perfect pair of sneakers? Look no further! Our company has a wide range of stylish and comfortable sneakers to suit every taste and budget. So why wait? Find your perfect pair of sneakers today!
        </p>
        <Button className="btnInDetail" name="Shop All" />
      </div>
      <div className="image-container">
        <img src={shoes9} alt="" />
      </div>
    </div>
  );
}
