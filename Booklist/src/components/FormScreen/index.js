//FormScreen.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addBook } from "../../api";
import FormField from "../FormField";
import CustomAlertDialog from "../AlertDialog";
import Navbar from "../Navbar";
import "./index.css";

const FormScreen = () => {
  const [showError, setShowError] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) {
      setShowError(true);
      return;
    }
    await addBook(title, author);
    setTitle("");
    setAuthor("");
    navigate("/");
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <FormField label="Title" value={title} onChange={setTitle} />
          <FormField label="Author" value={author} onChange={setAuthor} />
          <div className="buttons">
            <button type="submit">Add Book</button>
            <Link to="/" className="link">
              Back
            </Link>
          </div>
          {showError && (
            <CustomAlertDialog
              title="Error"
              message="Please enter both the title and author"
              handleClose={handleCloseError}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default FormScreen;
