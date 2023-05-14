//DetailScreen.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../api";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

const DetailScreen = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(id);
      console.log(result);
      setBook(result);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>
          Name: <span className="title">{book.title}</span>
        </h1>
        <p>Author: {book.author}</p>
        <Link to="/" className="back-link">
          Back
        </Link>
      </div>
    </>
  );
};

export default DetailScreen;
