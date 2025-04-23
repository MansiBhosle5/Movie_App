import React from "react";
import "./Navbar.css";
import { FaHeart, FaFilm } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({favouriteCount,cardCount}) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <FaFilm className="logo-icon" />
        <h1 className="app-name">MovieVerse</h1>
      </div>

      <ul className="nav-links">
        <li> 
          <Link to = "/" className="nav-link">Home</Link>
         </li>
        <li>
        <Link to = "/about"  className="nav-link"> About </Link>
          </li>
        <li>
          <Link to = "/contact" className="nav-link">Contact</Link></li>
      </ul>

      <div className="nav-right">
        <button className="nav-btn">
          <BsCardList className="btn-icon" /> 
          Card<span className="cart-badge">{cardCount}</span>
         </button>

        <Link to = "/Favorite" className="nav-link">
        <button className="nav-btn">
          <FaHeart className="btn-icon" /> 
          Favourites <span className="cart-badge">{favouriteCount}</span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
