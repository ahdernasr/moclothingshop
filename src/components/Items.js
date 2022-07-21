import React, { useEffect, useState } from "react";
import "./Items.css";
import { useParams } from "react-router";
import itemData from "../database.json";
import sizeChart from "../sizechart.jpeg";

const Items = (props) => {
  let { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);

  let object;
  function findObject() {
    for (let items in itemData) {
      let searchObject = itemData[items].find((item) => item.id == itemId);
      if (searchObject) {
        object = JSON.parse(JSON.stringify(searchObject));
      }
    }
  }

  let starsText = "";
  function setStars() {
    for (let i = 0; i < object.reviews; i++) {
      starsText = starsText + "★";
    }
    for (let i = 0; i < 5 - object.reviews; i++) {
      starsText = starsText + "☆";
    }
  }

  let sizeOptions = `<select id="size-select" name="size-select">`;
  function createSizeOptions() {
    {
      object.size_options.map((size) => {
        sizeOptions += `<option value=${size}>${size}</option>;`;
      });
    }
    sizeOptions += `</select>`;
  }

  findObject();
  setStars();
  createSizeOptions();

  function addToBasket(id, quantity, size) {
    let newBasketItemsArray = props.basketItemsArray;
    newBasketItemsArray.push({ id: id, quantity: quantity, size: size });
    props.setBasketItemsArray(newBasketItemsArray);
  }

  return (
    <div className="items-container">
      <div className="items-container-left">
        <div className="items-image-container">
          <img
            src={`../images/${object.image_url}`}
            className="items-image"
          ></img>
        </div>
      </div>
      <div className="items-container-right">
        <div className="item-header">{object.name}</div>
        <div className="item-price">
          {parseInt(object.price) < parseInt(object.original_price) && (
            <p className="tops-item-price">
              <span className="before-sale-price">{object.original_price}</span>
              <span className="after-sale-price">{object.price} CAD</span>
            </p>
          )}
          {parseInt(object.price) == parseInt(object.original_price) && (
            <p className="tops-item-price">{object.price} CAD</p>
          )}
        </div>
        <div className="item-reviews">
          <div className="reviews-header">Reviews</div>
          <div className="reviews-stars">
            {starsText} ({object.reviews_number})
          </div>
        </div>
        <div className="size-and-chart">
          <div
            className="item-size-select"
            dangerouslySetInnerHTML={{ __html: sizeOptions }}
          ></div>
          <div className="size-chart"><a href={sizeChart} download="TEMPUS Size Chart">Size chart</a></div>
        </div>
        <div className="item-quantity">
          <div className="quantity-header">Select Quantity</div>
          <div className="quantity-change">
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
            <h1>{quantity}</h1>
            <button
              onClick={() => {
                quantity > 1
                  ? setQuantity(quantity - 1)
                  : setQuantity(quantity);
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="item-basket-add">
          <button
            onClick={() => {
              addToBasket(
                object.id,
                quantity,
                document.getElementById("size-select").value
              );
            }}
          >
            Add to basket
          </button>
        </div>
        <div className="item-description">
          <div className="item-description-header">Description</div>
          <div className="item-description-text">{object.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
