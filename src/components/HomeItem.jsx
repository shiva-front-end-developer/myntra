import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItem = useSelector((state) => state.bag);

  const elementFound = bagItem.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(addToBag(item.id));
  };

  const handleRemoveToBag = () => {
    dispatch(removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.thumbnail} alt="item image" />
        <div className="rating">
          {item.rating} ⭐ | {item.stock}
        </div>
        <div className="company-name">{item.brand}</div>
        <div className="item-name">{item.title}</div>
        <div className="price">
          <span className="current-price">$ {item.discountPercentage}</span>
          <span className="original-price">$ {item.price}</span>
          <span className="discount">({item.discountPercentage}% OFF)</span>
        </div>
        <div className=".item-container">
          {elementFound ? (
            <button
              className="btn btn-add-bag btn-outline-danger"
              onClick={handleRemoveToBag}
            >
              Remove to Bag
            </button>
          ) : (
            <button className="btn-add-bag" onClick={handleAddToBag}>
              Add to Bag
            </button>
          )}
        </div>
      </div>
      `
    </>
  );
};

export default HomeItem;
