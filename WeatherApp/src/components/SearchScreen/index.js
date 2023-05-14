//SearchScreen.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";
import Navbar from "../Navbar";
import "./index.css";

function SearchScreen() {
  const [searchResults, setSearchResults] = useState([]);
  const { handleAddFavorite, handleSelectLocation } = useContext(
    WeatherContext
  );

  const handleSearch = (query) => {
    const API_KEY = "fd5208c3f724aa69b93dc7ebdef23d7b";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setSearchResults(response.data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="search-screen">
        <h2>Search Any Location</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(e.target.elements.query.value);
          }}
        >
          <input
            type="text"
            name="query"
            className="search-input"
            placeholder="Enter location name, city, state, or country"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <ul className="list">
          {searchResults.map((location) => (
            <li key={location.id}>
              <Link to={"/detail/" + location.id}>
                <button onClick={handleSelectLocation(location)}>
                  {location.name}, {location.sys.country}
                </button>
              </Link>
              <Link to="/">
                <button onClick={() => handleAddFavorite(location)}>
                  Add to favorites
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <center>
          <Link to="/">
            <button>Go to Home</button>
          </Link>
        </center>
      </div>
    </>
  );
}

export default SearchScreen;
