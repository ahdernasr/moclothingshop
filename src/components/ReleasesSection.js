import React from "react";
import { Link } from "react-router-dom"
import "./ReleasesSection.css";

const ReleasesSection = () => {
  return (
    <div className="releases-section-body">
      <div className="releases-section-header">New Releases</div>
      <div className="releases-section-container">
        <div className="releases-section-item">
          <div className="releases-section-item-image-container">
          <Link to="/items" style={{textDecoration: 'none'}}><div
              id="yellow-shirt"
              className="releases-section-item-image"
            ></div></Link>
          </div>
          <p className="releases-section-item-description">
            Yellow spotted shirt
          </p>
          <p className="releases-section-item-price">49.99 CAD</p>
        </div>
        <div className="releases-section-item">
          <div className="releases-section-item-image-container">
          <Link to="/items" style={{textDecoration: 'none'}}><div
              id="hat"
              className="releases-section-item-image"
            ></div></Link>
          </div>
          <p className="releases-section-item-description">
            Patterned straw hat
          </p>
          <p className="releases-section-item-price">34.99 CAD</p>
        </div>
        <div className="releases-section-item">
          <div className="releases-section-item-image-container">
          <Link to="/items" style={{textDecoration: 'none'}}><div
              id="orange-shorts"
              className="releases-section-item-image"
            ></div></Link>
          </div>
          <p className="releases-section-item-description">
            Orange pleated shorts
          </p>
          <p className="releases-section-item-price">49.99 CAD</p>
        </div>
      </div>
    </div>
  );
};

export default ReleasesSection;
