import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import shoelogo from '../images/SneakerSiteLogo.svg'
import "../styles/footerBottom.css";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="logo-container-ftb">
        <img src={shoelogo} alt="" id="logoimg-ftb" />
      </div>
      <div className="rights">
        <p>© 2023 Sneaker Spot. All Rights Reserved.</p>
      </div>
      <div className="social-icons-ftb">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
}
