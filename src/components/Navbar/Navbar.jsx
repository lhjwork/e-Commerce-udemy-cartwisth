import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="align-center navbar">
      <div className="align-center">
        <h1 className="navbar_heading">CartWish</h1>
      </div>
      <div className="navbar_form">
        <input type="text" className="navbar_search" placeholder="Search Products" />
        <button type="submit" className="search_button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
