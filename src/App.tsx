import React from "react";
import "./App.css";
import SearchContainer from "./Components/SearchContainer";
import WeatherFavourites from "./Components/WeatherFavourites";

function App() {
  return (
    <div>
      {/* <div className="weather-search-container">
        <SearchContainer />
      </div> */}
      <div className="weather-search-container">
        <WeatherFavourites />
      </div>
    </div>
  );
}

export default App;
