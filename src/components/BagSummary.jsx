import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBag } from "../store/bagSlice";

const BagSummary = () => {
  const dispatch = useDispatch();
  const bagItem = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItem = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });

  let convenience = 99;
  let totalItem = bagItem.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItem.forEach((bagItem) => {
    totalMRP += bagItem.price;
  });

  let finalPayment = totalMRP + convenience;

  const handleClickToPlaceOrder = () => {
    dispatch(clearBag());
  };

  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS {totalItem} Items </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹{convenience}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order" onClick={handleClickToPlaceOrder}>
          PLACE ORDER
        </button>
      </div>
    </>
  );
};

export default BagSummary;
