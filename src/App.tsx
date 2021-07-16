import React, { useState } from "react";
import "./App.css";
import SearchContainer from "./Components/SearchContainer";
import WeatherFavourites from "./Components/WeatherFavourites";
import BottomNav from "./Components/BottomNav";

function App() {
  const [view, setView] = useState("SEARCH");

  return (
    <div>
      {view === "SEARCH" && (
        <div className="weather-search-container">
          <SearchContainer />
        </div>
      )}
      {view === "FAVE" && (
        <div className="weather-search-container">
          <WeatherFavourites />
        </div>
      )}
      <nav className="nav">
        <BottomNav clickSearch = {()=> setView("SEARCH")} clickFav = {()=> setView("FAVE")} />
      </nav>
    </div>
  );
}

export default App;
