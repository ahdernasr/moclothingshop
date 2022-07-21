import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sale.css";
import itemData from "../database.json";

const Sale = () => {

  let object;
  let saleArray = []
  function createSaleArray() {
    for (let items in itemData) {
      let searchObjects = itemData[items].filter((item) => item.sale == true);
      if (searchObjects) {
        for (let a of searchObjects) {
        object = JSON.parse(JSON.stringify(a));
        saleArray.push(object)
        }
      }
    }
  }

  createSaleArray();
  console.log(saleArray)

  const [sortType, setSortType] = useState("featured");
  const [itemArray, setItemArray] = useState(saleArray);

  let featuredArray = [...saleArray];
  let highToLowArray = [...saleArray];
  let lowToHighArray = [...saleArray];

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
    <div className="sale-container">
      <div className="sale-header">
        <h1>Shop Unisex Sale Items <span>({saleArray.length} Results)</span></h1>
      </div>
      <div className="sale-sort">
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
      <div className="sale-items-container">
        {itemArray.map((item) => {
          let imageSrc = `../images/${item.image_url}`;
          return (
            <div className="sale-item" key={item.id}>
              <div className="sale-item-image-container">
                <Link
                  to={`../items/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="sale-item-image-container">
                    <img className="sale-item-image" src={imageSrc} />
                  </div>
                </Link>
              </div>
              <p className="sale-item-description">{item.name}</p>
              {parseInt(item.price) < parseInt(item.original_price) && (
                <p className="sale-item-price">
                  <span className="before-sale-price">
                    {item.original_price}
                  </span>
                  <span className="after-sale-price">{item.price} CAD</span>
                </p>
              )}
              {parseInt(item.price) == parseInt(item.original_price) && (
                <p className="sale-item-price">{item.price} CAD</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sale;
