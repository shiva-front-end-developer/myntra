import React from "react";
import { IoIosPerson, IoMdSearch } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((state) => state.bag);

  return (
    <>
      <header>
        <div className="logo_container px-5">
          <Link to="/">
            <img
              className="myntra_home"
              src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png?f=webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/home/living">Home &amp; Living</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/studio">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <IoMdSearch />
          </span>
          <input
            type="text"
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              <IoIosPerson />
            </span>
            <span className="action_name">Profile</span>
          </div>
          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              <MdFavoriteBorder />
            </span>
            <span className="action_name">Wishlist</span>
          </div>
          <Link className="action_container" to="/bag">
            <span className="material-symbols-outlined action_icon">
              <MdOutlineShoppingCart />
            </span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
