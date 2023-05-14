// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListScreen from "./components/ListScreen";
import FormScreen from "./components/FormScreen";
import DetailScreen from "./components/DetailScreen";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/form" element={<FormScreen />} />
          <Route path="/books/:id" element={<DetailScreen />} />
          <Route path="/" element={<ListScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
