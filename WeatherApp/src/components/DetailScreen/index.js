import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import Navbar from "../Navbar";
import "./index.css";

const DetailScreen = () => {
  const { selectedLocation } = useContext(WeatherContext);

  return (
    <>
      <Navbar />
      <div className="box">
        {selectedLocation && (
          <div className="inner-box">
            <h2>
              {selectedLocation.name}, {selectedLocation.sys.country}
            </h2>
            <div className="card">
              <p>Temperature: {selectedLocation.main.temp}°C</p>
              <p>Humidity: {selectedLocation.main.humidity}</p>
              <p>Pressure: {selectedLocation.main.pressure}</p>
              <p>Sea Level: {selectedLocation.main.sea_level}</p>
              <p>Ground Level: {selectedLocation.main.grnd_level}</p>
              <p>Wind Speed: {selectedLocation.wind.speed}</p>
              <p>Description: {selectedLocation.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailScreen;
