import React from "react";
import { Link } from "react-router-dom"
import "./Sale.css";

const Sale = () => {
  return (
    <div className="sale-container">
      <div className="sale-header">
        <h1>Sale</h1>
      </div>
      <div className="sale-sort">
        <div>sort ⌄ </div>
      </div>
      <div className="sale-items-container">
      <div className="sale-item">
          <div className="sale-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="yellow-shirt"
              className="sale-item-image"
            ></div></Link>
          </div>
          <p className="sale-item-description">
            Yellow spotted shirt
          </p>
          <p className="sale-item-price">64.99 CAD</p>
        </div>
        <div className="sale-item">
          <div className="sale-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="orange-shorts"
              className="sale-item-image"
            ></div></Link>
          </div>
          <p className="sale-item-description">
            Orange pleated shorts
          </p>
          <p className="sale-item-price">49.99 CAD</p>
        </div>
        <div className="sale-item">
          <div className="sale-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="hat"
              className="sale-item-image"
            ></div></Link>
          </div>
          <p className="sale-item-description">
            Patterned straw hat
          </p>
          <p className="sale-item-price">34.99</p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
