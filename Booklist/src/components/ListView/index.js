//ListView.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListView = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <Link to={`/books/${item.id}`} onClick={() => onItemClick(item)}>
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>By {item.author}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ListView;
