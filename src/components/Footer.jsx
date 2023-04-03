import React from "react";
import Button from "./Button";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

import "../styles/footer.css";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1>Sneaker Spot. Get a Kick Out of This!</h1>
        <p>
        Sneaker Spot is a leading retailer of stylish and comfortable sneakers at affordable prices. Founded in 2010, the company has built a reputation for offering a wide range of high-quality sneakers from top brands like Nike, Adidas, and Puma, as well as lesser-known but equally stylish labels.
        </p>
        <Button className="btn" name="Contact us" />
        <hr />
          <FooterBottom />
          <div className="rights-beneath">
        <p>© 2023 Sneaker Spot. All Rights Reserved.</p>
      </div>
      </div>
    </div>
  );
}
