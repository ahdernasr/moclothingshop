import React from "react";
import { Link } from "react-router-dom"
import "./DiscountBar.css";

const DiscountBar = () => {
  return (
    <Link to="/sale" style={{ textDecoration: "none" }}>
      <div className="discount-bar-body">
        <h1>Summer sale: Up to 25% off</h1>
      </div>
    </Link>
  );
};

export default DiscountBar;
