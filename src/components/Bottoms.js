import React from "react";
import { Link } from "react-router-dom"
import "./Bottoms.css";

const Bottoms = () => {
  return (
    <div className="bottoms-container">
      <div className="bottoms-header">
        <h1>Bottoms</h1>
      </div>
      <div className="bottoms-sort">
        <div>sort ⌄ </div>
      </div>
      <div className="bottoms-items-container">
      <div className="bottoms-item">
          <div className="bottoms-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="yellow-shirt"
              className="bottoms-item-image"
            ></div></Link>
          </div>
          <p className="bottoms-item-description">
            Yellow spotted shirt
          </p>
          <p className="bottoms-item-price">64.99 CAD</p>
        </div>
        <div className="bottoms-item">
          <div className="bottoms-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="orange-shorts"
              className="bottoms-item-image"
            ></div></Link>
          </div>
          <p className="bottoms-item-description">
            Orange pleated shorts
          </p>
          <p className="bottoms-item-price">49.99 CAD</p>
        </div>
        <div className="bottoms-item">
          <div className="bottoms-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="hat"
              className="bottoms-item-image"
            ></div></Link>
          </div>
          <p className="bottoms-item-description">
            Patterned straw hat
          </p>
          <p className="bottoms-item-price">34.99</p>
        </div>
      </div>
    </div>
  );
};

export default Bottoms;
