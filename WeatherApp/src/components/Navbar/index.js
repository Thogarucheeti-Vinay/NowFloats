import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <h1>WEATHER APP</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search" className="search">
            <FaSearch />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
