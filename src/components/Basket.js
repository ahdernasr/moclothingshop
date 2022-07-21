import React, { useState, useEffect } from "react";
import "./Basket.css";
import itemData from "../database.json";
import _, { cloneWith } from "lodash";
import BasketItem from "./BasketItem.js";

const Basket = (props) => {
  let object;
  function findObject(id) {
    for (let items in itemData) {
      let searchObject = itemData[items].find((item) => item.id == id);
      if (searchObject) {
        object = JSON.parse(JSON.stringify(searchObject));
      }
    }
  }

  const [objectsArray, setObjectsArray] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [delivery, setDelivery] = useState(4.99);
  const [total, setTotal] = useState(0);
  const [promoValue, setPromoValue] = useState(0);

  function calculateCost(objectsArray, promoBool) {
    let tempCost = 0;
    for (let item of objectsArray) {
      tempCost += parseFloat(item.object.price * item.quantity);
    }
    setSubtotal(tempCost);
  }

  const [promo, setPromo] = useState(false);
  function applyPromo(code) {
    if (code === "OTTAWA") {
      setPromo(true);
      alert("Promo code applied for 10% off");
    } else {
      setPromo(false);
      alert("Promo code invalid or expired");
    }
  }

  let tempObjectsArray;
  function loadBasket() {
    tempObjectsArray = [];
    for (let itemSelections of props.basketItemsArray) {
      findObject(itemSelections.id);
      tempObjectsArray.push({
        object: object,
        id: object.id,
        quantity: itemSelections.quantity,
        size: itemSelections.size,
      });
    }
  }

  function removeItem(itemDescription) {
    const index = objectsArray.findIndex((object) => {
      return object.id === itemDescription.id;
    });
    let clonedObjectsArray = _.cloneDeep(objectsArray);
    clonedObjectsArray.splice(index, 1);
    setObjectsArray(clonedObjectsArray);
    props.setBasketItemsArray(clonedObjectsArray);
    calculateCost(clonedObjectsArray, false);
  }

  loadBasket();
  if (tempObjectsArray.length != objectsArray.length) {
    //prevents multiple rerenders
    setObjectsArray(tempObjectsArray);
    calculateCost(tempObjectsArray);
  }

  useEffect(() => {
    if (subtotal > 0 && subtotal < 80) {
      setTotal(subtotal + 4.99);
    } else if (subtotal > 0 && subtotal > 80) {
      setTotal(subtotal);
    } else {
      setTotal(subtotal);
    }

    if (promo && subtotal < 80) {
      setPromoValue(total / 10);
      setTotal(subtotal + 4.99 - total / 10);
    } else if (promo && subtotal > 80) {
      setPromoValue(total / 10);
      setTotal(subtotal - total / 10);
    }
  }, [subtotal, delivery, total, promo]);

  return (
    <div className="basket-container">
      <div className="basket-header">Shopping Cart</div>
      <div className="basket-content-container">
        <div className="no-items-container">
          {objectsArray.length == 0 && (
            <>
              <div className="no-items-icon">
                <svg
                  height="72"
                  viewBox="0 0 48 48"
                  width="72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M45.46 45.46L5.54 5.54 4 4 2.54 2.54 0 5.08l8.78 8.78 4.42 9.32-2.7 4.9c-.32.56-.5 1.22-.5 1.92 0 2.2 1.8 4 4 4h14.92l2.76 2.76c-1 .73-1.66 1.91-1.66 3.24 0 2.2 1.78 4 3.98 4 1.33 0 2.51-.67 3.24-1.68L42.92 48l2.54-2.54zM14.84 30c-.28 0-.5-.22-.5-.5l.06-.24L16.2 26h4.72l4 4H14.84zm16.26-4c1.5 0 2.82-.82 3.5-2.06l7.16-12.98c.16-.28.24-.62.24-.96 0-1.1-.9-2-2-2H13.08l18 18h.02zM14 36c-2.2 0-3.98 1.8-3.98 4s1.78 4 3.98 4 4-1.8 4-4-1.8-4-4-4z" />
                  <path d="M0 0h48v48H0z" fill="none" />
                </svg>
              </div>
              <div>
                <p className="no-items-message">
                  Basket is empty, added items will appear here.
                </p>
              </div>
            </>
          )}
          {objectsArray.length > 0 &&
            objectsArray.map((item, key) => {
              let imageSrc = `../images/${item.object.image_url}`;
              return (
                <BasketItem
                  item={item}
                  key={key}
                  imageSrc={imageSrc}
                  removeItem={removeItem}
                />
              );
            })}
        </div>
        <div className="checkout-container">
          <p className="checkout-summary">Summary</p>
          <div className="checkout-price-container">
            <p>Subtotal</p>
            <p>{subtotal.toFixed(2)} CAD</p>
          </div>
          <div className="checkout-price-container">
            <p>Delivery</p>
            {subtotal < 80 ? <p>{delivery.toFixed(2)} CAD</p> : <p>0.00 CAD</p>}
          </div>
          <div className="checkout-price-container">
            <p>Promo</p>
            {promo && <p className="sale">-{promoValue.toFixed(2)} CAD</p>}
            {!promo && <p>None </p>}
          </div>
          <div className="checkout-price-container checkout-total">
            <p>Total</p>
            <p>{total.toFixed(2)} CAD</p>
          </div>
          <div className="checkout-promo">
            <input
              id="promobox"
              type="text"
              placeholder="Enter promo code"
            ></input>
            <button
              type="submit"
              onClick={() =>
                applyPromo(document.getElementById("promobox").value)
              }
            >
              ✓
            </button>
          </div>
          <div className="checkout-button-container">
            <button
              onClick={() => {
                if (subtotal > 0) {
                  alert(
                    "Successfully payed with PayPal, order will be processed."
                  );
                  window.location.href = "/";
                } else {
                  alert(
                    "Basket is empty, please add items before checking out."
                  );
                }
              }}
            >
              <span className="paypal-logo">
                <i>Pay</i>
                <i>Pal</i>
              </span>
            </button>
            <button
              onClick={() => {
                if (subtotal > 0) {
                  alert(
                    "Successfully payed with Stripe, order will be processed."
                  );
                  window.location.href = "/";
                } else {
                  alert(
                    "Basket is empty, please add items before checking out."
                  );
                }
              }}
            >
              <svg
                className="stripe"
                height="38px"
                width="68px"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
