import React from "react";
import "../styles/card.css";
export default function Card(props) {
  return (
    <div className="cardContainer">
      <div className="productImg">
        <img id="imgProd" src={props.src1} />
      </div>
      <div className="imgContent">
        <div>
          <h3 id="productHeading">
            {props.h3}
            <span id="dollar">{props.span}</span>
          </h3>
          <p id="productPara">{props.p}</p>
        </div>
        <div>
          <img id="imgCart" src={props.src2} />
        </div>
      </div>
    </div>
  );
}
