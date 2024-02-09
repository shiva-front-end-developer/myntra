import React from "react";
import { useDispatch } from "react-redux";
import { removeFromBag } from "../store/bagSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromBagIn = () => {
    dispatch(removeFromBag(item.id));
  };
  return (
    <>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.thumbnail} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.title}</div>
          <div className="item-name">{item.brand}</div>
          <div className="price-container">
            <span className="current-price">$ {item.price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">
              {item.discountPercentage}% OFF
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">15 days</span> return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days"> Manoj Rajpoot</span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={removeFromBagIn}>
          X
        </div>
      </div>
    </>
  );
};

export default BagItem;
