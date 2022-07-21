import React from "react";

const BasketItem = (props) => {
  const item = props.item;
  const imageSrc = props.imageSrc;

  return (
    <div className="basket-item" >
      <div className="basket-item-left">
        <div className="basket-item-image">
          <img src={imageSrc} className="basket-item-image-container"></img>
        </div>
        <div className="basket-item-text">
          {item.object.name} in size {`[${item.size}]`}
        </div>
      </div>
      <div className="basket-item-right">
        <div className="basket-item-price">
          {parseInt(item.object.price) <
            parseInt(item.object.original_price) && (
            <p className="tops-item-price">
              <span className="before-sale-price">
                {item.object.original_price}
              </span>
              <span className="after-sale-price">{item.object.price} CAD</span>
            </p>
          )}
          {parseInt(item.object.price) ==
            parseInt(item.object.original_price) && (
            <p className="tops-item-price">{item.object.price} CAD</p>
          )}
        </div>
        <div className="basket-item-quantity">{item.quantity}</div>
        <div
          className="basket-item-remove"
          onClick={() => {
            props.removeItem({
              object: item.object,
              id: item.object.id,
              quantity: item.quantity,
              size: item.size,
            });
          }}
        >
          <svg enable-background="new 0 0 512 512" height="24px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M256,7C118.467,7,7,118.468,7,256.002C7,393.533,118.467,505,256,505s249-111.467,249-248.998  C505,118.468,393.533,7,256,7z M256,485.08c-126.31,0-229.08-102.771-229.08-229.078C26.92,129.692,129.69,26.92,256,26.92  c126.309,0,229.08,102.771,229.08,229.082C485.08,382.309,382.309,485.08,256,485.08z" fill="#425661"/><polygon fill="#425661" points="368.545,157.073 354.461,142.988 255.863,241.587 157.733,143.456 143.648,157.54 241.78,255.672   143.648,353.809 157.733,367.893 255.863,269.75 354.461,368.361 368.545,354.275 269.947,255.672 "/></svg>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
