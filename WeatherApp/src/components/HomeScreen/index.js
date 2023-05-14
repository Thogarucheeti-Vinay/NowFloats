//HomeScreen.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";
import Navbar from "../Navbar";
import "./index.css";

const HomeScreen = () => {
  const { currentLocation, handleSelectLocation } = useContext(WeatherContext);
  const [favoriteLocations] = useState(() => {
    const storedFavoriteLocations = localStorage.getItem("favoriteLocations");
    return storedFavoriteLocations ? JSON.parse(storedFavoriteLocations) : [];
  });

  console.log(currentLocation);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="hero-text">Weather App</h1>
        <div className="home">
          {currentLocation && (
            <Link
              to={`/detail/${currentLocation.id}`}
              onClick={handleSelectLocation(currentLocation)}
            >
              <div className="card current">
                <h2>Current Location</h2>
                <div>
                  <p>
                    Location: {currentLocation.name},{" "}
                    {currentLocation.sys.country}
                  </p>
                  <p>Temperature: {currentLocation.main.temp}°C</p>
                  <p>Description: {currentLocation.weather[0].description}</p>
                </div>
              </div>
            </Link>
          )}
          <div className="card">
            <h2>Favorite Locations</h2>
            {favoriteLocations.length > 0 ? (
              <ul className="card2">
                {favoriteLocations.map((location) => (
                  <Link
                    to={`/detail/${location.id}`}
                    onClick={handleSelectLocation(location)}
                  >
                    <li key={location.id} className="link">
                      {location.name}, {location.sys.country}
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <center>
                <p>No favorite locations saved.</p>
              </center>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
