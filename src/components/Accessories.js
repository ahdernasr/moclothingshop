import React from "react";
import { Link } from "react-router-dom"
import "./Accessories.css";

const Accessories = () => {
  return (
    <div className="accessories-container">
      <div className="accessories-header">
        <h1>Accessories</h1>
      </div>
      <div className="accessories-sort">
        <div>sort ⌄ </div>
      </div>
      <div className="accessories-items-container">
      <div className="accessories-item">
          <div className="accessories-item-image-container">
          <Link to="/items" style={{textDecoration: 'none'}}><div
              id="yellow-shirt"
              className="accessories-item-image"
            ></div></Link>
          </div>
          <p className="accessories-item-description">
            Yellow spotted shirt
          </p>
          <p className="accessories-item-price">64.99 CAD</p>
        </div>
        <div className="accessories-item">
          <div className="accessories-item-image-container">
          <Link to="/items" style={{textDecoration: 'none'}}><div
              id="orange-shorts"
              className="accessories-item-image"
            ></div></Link>
          </div>
          <p className="accessories-item-description">
            Orange pleated shorts
          </p>
          <p className="accessories-item-price">49.99 CAD</p>
        </div>
        <div className="accessories-item">
          <div className="accessories-item-image-container">
          <Link to="/items" style={{textDecoration: 'none'}}><div
              id="hat"
              className="accessories-item-image"
            ></div></Link>
          </div>
          <p className="accessories-item-description">
            Patterned straw hat
          </p>
          <p className="accessories-item-price">34.99</p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
