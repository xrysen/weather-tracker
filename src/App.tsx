import React from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";

function App() {
  return (
    <div>
      <div className="weather-search-container">
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
