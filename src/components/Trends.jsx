import React from "react";
import "../styles/trends.css";
import Button from "./Button";
import Card from "./Card";
// import shoes2 from "../images/shoes2.jpg";
// import shoes3 from "../images/shoes3.jpg";
// import shoes5 from "../images/shoes5.jpg";
// import shoes6 from "../images/shoes6.jpg";
import sausony from "../images/sausony.jpg";
import reebok from "../images/reebok.jpg";
import cart from "../images/cart.png";
export default function Trends() {
  return (
    <div className="trends-container">
      <div className="bestSeller">
        <h2 id="bestSellerHeading">Latest Trends</h2>
        <Button className="btn" name="Shop All" />
      </div>
      <div className="products">
        <Card
          src1={sausony}
          h3="Saucony Exclusive"
          span="$349"
          p="Exclusive, limited edition sneakers by Saucony."
          src2={cart}
        />
        <Card
          src1={reebok}
          h3="Reebok Classics"
          span="$199"
          p="Throw it back with some timeless old school styles."
          src2={cart}
        />
      </div>
    </div>
  );
}
