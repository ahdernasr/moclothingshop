import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Bottoms.css";
import itemData from "../database.json";

const Bottoms = () => {
  const [sortType, setSortType] = useState("featured");
  const [itemArray, setItemArray] = useState(itemData.bottoms);

  let featuredArray = [...itemData.bottoms];
  let highToLowArray = [...itemData.bottoms];
  let lowToHighArray = [...itemData.bottoms];

  lowToHighArray.sort(function (a, b) {
    return parseInt(a.price) - b.price;
  });
  highToLowArray.sort(function (a, b) {
    return parseInt(b.price) - a.price;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sortType === "featured") {
      setItemArray([...featuredArray]);
    } else if (sortType === "lowhigh") {
      setItemArray([...lowToHighArray]);
    } else if (sortType === "highlow") {
      setItemArray([...highToLowArray]);
    }
  }, [sortType]);

  return (
    <div className="bottoms-container">
      <div className="bottoms-header">
        <h1>Shop Unisex Bottoms <span>({itemData.bottoms.length} Results)</span></h1>
      </div>
      <div className="bottoms-sort">
        <label htmlFor="sortby">Sort by:</label>
        <button
          id="featured"
          className="button-selected"
          onClick={() => {
            setSortType("featured");
            document
              .getElementById("featured")
              .classList.add("button-selected");
            document
              .getElementById("lowhigh")
              .classList.remove("button-selected");
            document
              .getElementById("highlow")
              .classList.remove("button-selected");
          }}
        >
          Featured
        </button>
        <button
          id="lowhigh"
          onClick={() => {
            setSortType("lowhigh");
            document
              .getElementById("featured")
              .classList.remove("button-selected");
            document.getElementById("lowhigh").classList.add("button-selected");
            document
              .getElementById("highlow")
              .classList.remove("button-selected");
          }}
        >
          Low to High
        </button>
        <button
          id="highlow"
          onClick={() => {
            setSortType("highlow");
            document
              .getElementById("featured")
              .classList.remove("button-selected");
            document
              .getElementById("lowhigh")
              .classList.remove("button-selected");
            document.getElementById("highlow").classList.add("button-selected");
          }}
        >
          High to Low
        </button>
      </div>
      <div className="bottoms-items-container">
        {itemArray.map((item) => {
          let imageSrc = `../images/${item.image_url}`;
          return (
            <div className="bottoms-item" key={item.id}>
              <div className="bottoms-item-image-container">
                <Link
                  to={`../items/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="bottoms-item-image-container">
                    <img className="bottoms-item-image" src={imageSrc} />
                  </div>
                </Link>
              </div>
              <p className="bottoms-item-description">{item.name}</p>
              {parseInt(item.price) < parseInt(item.original_price) && (
                <p className="bottoms-item-price">
                  <span className="before-sale-price">
                    {item.original_price}
                  </span>
                  <span className="after-sale-price">{item.price} CAD</span>
                </p>
              )}
              {parseInt(item.price) == parseInt(item.original_price) && (
                <p className="bottoms-item-price">{item.price} CAD</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bottoms;
