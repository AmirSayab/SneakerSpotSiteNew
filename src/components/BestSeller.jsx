import React from "react";
import "../styles/bestseller.css";
import Button from "./Button";
import Card from "./Card";
// import shoes2 from "../images/shoes2.jpg";
// import shoes3 from "../images/shoes3.jpg";
import nikeairmaxpro1 from "../images/nikeairmaxpro1.jpg";
import nikeballpro from "../images/nikeballpros.jpg";
import cart from "../images/cart.png";
export default function Bestseller() {
  return (
    <div className="sellerContainer">
      <div className="bestSeller">
        <h2 id="bestSellerHeading">Best Sellers</h2>
        <Button className="btn" name="Shop All" />
      </div>
      <div className="products">
        <Card
          src1={nikeairmaxpro1}
          h3="Nike Air Max Pro 1"
          span="$499"
          p="Originally created for performance running, this shoe has since become a stand-alone classic to cement its place in Air Max history."
          src2={cart}
        />
        <Card
          src1={nikeballpro}
          h3="Nike Ball Pros"
          span="$249"
          p="The ultimate footwear for dominating the courts."
          src2={cart}
        />
      </div>
    </div>
  );
}
