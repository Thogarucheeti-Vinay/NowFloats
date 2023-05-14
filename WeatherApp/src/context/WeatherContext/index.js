//WeatherContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "fd5208c3f724aa69b93dc7ebdef23d7b";

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setCurrentLocation(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  const handleSearch = (query) => {
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

  const handleSelectLocation = (location) => {
    return () => {
      setSelectedLocation(location);
    };
  };

  const handleAddFavorite = (location) => {
    const exists = favoriteLocations.some((fav) => fav.id === location.id);
    if (!exists) {
      setFavoriteLocations((prevState) => [...prevState, location]);
      localStorage.setItem(
        "favoriteLocations",
        JSON.stringify([...favoriteLocations, location])
      );
    }
  };

  const contextValue = {
    currentLocation,
    favoriteLocations,
    searchResults,
    selectedLocation,
    handleSearch,
    handleSelectLocation,
    handleAddFavorite,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {props.children}
    </WeatherContext.Provider>
  );
}
