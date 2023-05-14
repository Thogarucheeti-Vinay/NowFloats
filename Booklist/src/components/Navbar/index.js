import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav>
      <h1>BOOKLIST APP</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form Screen</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
