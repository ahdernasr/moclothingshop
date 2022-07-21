import React from "react";
import { Link } from "react-router-dom";
import itemData from "../database.json";
import "./ReleasesSection.css";

const ReleasesSection = () => {
  let object;
  let releasesArray = [];
  for (let items in itemData) {
    let searchObject = itemData[items].find((item) => item.new_release == true);
    if (searchObject) {
      object = JSON.parse(JSON.stringify(searchObject));
      releasesArray.push(object);
    }
  }
  console.log(releasesArray);

  return (
    <div className="releases-section-body">
      <div className="releases-section-header">New Releases</div>
      <div className="releases-section-container">
        {releasesArray.map((item) => {
          return (
            <div className="releases-section-item" key={item.id}>
              <div className="releases-section-item-image-container">
                <Link
                  to={`/items/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="releases-section-item-image-container">
                    <img
                      src={`/images/${item.image_url}`}
                      id="yellow-shirt"
                      className="releases-section-item-image"
                    ></img>
                  </div>
                </Link>
              </div>
              <p className="releases-section-item-description">{item.name}</p>
              <p className="releases-section-item-price">{item.price} CAD</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReleasesSection;
