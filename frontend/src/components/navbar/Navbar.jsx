import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <button data-text="Awesome" className="navbar-button">
            <span className="actual-text">&nbsp;Starving&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;Starving&nbsp;
            </span>
          </button>
        </Link>
        <Link to="addRestaurant">
          <button className="full-rounded">
            <span>Add new </span>
            <div className="border full-rounded"></div>
          </button>
        </Link>
        <Link to='cart'>Cart</Link>
      </div>
    </header>
  );
};

export default Navbar;
