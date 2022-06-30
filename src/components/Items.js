import React from "react";
import "./Items.css";

const Items = () => {
  return (
    <div className="items-container">
      <div className="items-container-left">
        <div className="items-image-container">
          <img id="summer-fragrance" className="items-image"></img>
        </div>
      </div>
      <div className="items-container-right">
        <div className="item-header">Summer sexy fragrance package</div>
        <div className="item-price">34.99 CAD</div>
        <div className="item-reviews">
          <div className="reviews-header">Reviews</div>
          <div className="reviews-stars">★★★☆☆     (8)</div>
        </div>
        <div className="item-size-select">
          <select name="size-select">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="item-quantity">
            <div className="quantity-header">Select Quantity</div>
            <div className="quantity-change">
                <button>+</button>
                <h1>1</h1>
                <button>-</button>
            </div>
        </div>
        <div className="item-basket-add">
            <button>Add to basket</button>
        </div>
        <div className="item-description">
            <div className="item-description-header">Description</div>
            <div className="item-description-text">These fragrances will get you compliments from anyone around you! Made with cedarwood, jasmine, citrus and sandalwood to make the ultimate light fragrances for a hot day and breezy party in the evening.</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
