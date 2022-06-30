import React from "react";
import { Link } from "react-router-dom"
import "./Tops.css";

const Tops = () => {
  return (
    <div className="tops-container">
      <div className="tops-header">
        <h1>Tops</h1>
      </div>
      <div className="tops-sort">
        <div>sort ⌄ </div>
      </div>
      <div className="tops-items-container">
      <div className="tops-item">
          <div className="tops-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="yellow-shirt"
              className="tops-item-image"
            ></div></Link>
          </div>
          <p className="tops-item-description">
            Yellow spotted shirt
          </p>
          <p className="tops-item-price">64.99 CAD</p>
        </div>
        <div className="tops-item">
          <div className="tops-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="orange-shorts"
              className="tops-item-image"
            ></div></Link>
          </div>
          <p className="tops-item-description">
            Orange pleated shorts
          </p>
          <p className="tops-item-price">49.99 CAD</p>
        </div>
        <div className="tops-item">
          <div className="tops-item-image-container">
            <Link to="/items" style={{textDecoration: 'none'}}><div
              id="hat"
              className="tops-item-image"
            ></div></Link>
          </div>
          <p className="tops-item-description">
            Patterned straw hat
          </p>
          <p className="tops-item-price">34.99</p>
        </div>
      </div>
    </div>
  );
};

export default Tops;
