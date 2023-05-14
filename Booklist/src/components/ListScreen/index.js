//ListScreen.js
import React, { useState, useEffect } from "react";
import "./index.css";
import ListView from "../ListView";
import { getBooks } from "../../api";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const ListScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBooks();
      setBooks(result);
    };

    fetchData();
  }, []);

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item.title}`);
  };

  return (
    <>
      <Navbar />
      <div className="ListScreen">
        <h1>BOOKLIST</h1>
        <ListView items={books} onItemClick={handleItemClick} />
        <Link to="/form" className="button">
          Add Book
        </Link>
      </div>
    </>
  );
};

export default ListScreen;
