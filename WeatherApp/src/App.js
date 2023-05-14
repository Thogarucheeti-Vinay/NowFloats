import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import DetailScreen from "./components/DetailScreen";

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/detail/:id" element={<DetailScreen />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_KEY = "fd5208c3f724aa69b93dc7ebdef23d7b";
// function App() {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [favoriteLocations, setFavoriteLocations] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       axios
//         .get(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
//         )
//         .then((response) => {
//           setCurrentLocation(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
//   }, []);

//   const handleSearch = (query) => {
//     axios
//       .get(
//         `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${API_KEY}&units=metric`
//       )
//       .then((response) => {
//         setSearchResults(response.data.list);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSelectLocation = (location) => {
//     setSelectedLocation(location);
//   };

//   const handleAddFavorite = (location) => {
//     setFavoriteLocations((prevState) => [...prevState, location]);
//   };

//   return (
//     <div>
//       {/* Home Screen */}
//       {currentLocation && (
//         <div>
//           <h2>Current Location</h2>
//           <div>
//             <p>
//               Location: {currentLocation.name}, {currentLocation.sys.country}
//             </p>
//             <p>Temperature: {currentLocation.main.temp}°C</p>
//             <p>Description: {currentLocation.weather[0].description}</p>
//           </div>
//         </div>
//       )}
//       {favoriteLocations.length > 0 && (
//         <div>
//           <h2>Favorite Locations</h2>
//           <ul>
//             {favoriteLocations.map((location) => (
//               <li key={location.id}>
//                 <button onClick={() => handleSelectLocation(location)}>
//                   {location.name}, {location.sys.country}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Search Screen */}
//       <div>
//         <h2>Search</h2>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSearch(e.target.elements.query.value);
//           }}
//         >
//           <input
//             type="text"
//             name="query"
//             placeholder="Enter location name, city, state, or country"
//           />
//           <button type="submit">Search</button>
//         </form>
//         <ul>
//           {searchResults.map((location) => (
//             <li key={location.id}>
//               <button onClick={() => handleSelectLocation(location)}>
//                 {location.name}, {location.sys.country}
//               </button>
//               <button onClick={() => handleAddFavorite(location)}>
//                 Add to favorites
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Detail Screen */}
//       {selectedLocation && (
//         <div>
//           <h2>
//             {selectedLocation.name}, {selectedLocation.sys.country}
//           </h2>
//           <div>
//             <p>Temperature: {selectedLocation.main.temp}°C</p>
//             <p>Description: {selectedLocation.weather[0].description}</p>
//           </div>
//           <button onClick={() => setSelectedLocation(null)}>
//             Back to search
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
