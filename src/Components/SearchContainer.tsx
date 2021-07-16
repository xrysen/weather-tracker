import WeatherCard from "./WeatherCard";
import { useState } from "react";
import { favouriteCities, Weather } from "../globals";
import ConfirmModal from "./ConfirmModal";

const SearchContainer = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather>();
  const [modalOpen, setModalOpen] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const handleInput = (e: any) => {
    setCity(e.target.value);
  };

  const addFavourite = (name: string) => {
    if (!favouriteCities.includes(name)) {
      favouriteCities.push(name);
      handleModal(true);
    } else {
      handleModal(false);
    }
  }

  const handleModal = (success: boolean) => {
    if (success) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
    setModalOpen(true);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af9d6c4e7a164853ec010647718ce37a&units=metric`,
      {
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((res) => setWeather(res));
  };

  return (
    <div className="search-container">
      {modalOpen ? <ConfirmModal success = {isFav}  onClick = {()=> setModalOpen(false)} /> : ""}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e: any) => handleInput(e)}
          type="text"
          placeholder="Enter city name"
          required
        />
        <input type="submit" value="Search" />
      </form>
      {weather ? (
        <div>
        <WeatherCard
          current = {weather?.weather[0].main}
          city={weather?.name}
          temp={weather?.main.temp}
          maxTemp={weather?.main.temp_max}
          minTemp={weather?.main.temp_min}
          humidity={weather?.main.humidity}
        />
      <button onClick = {()=> addFavourite(city)}>Add To Favourites</button>
      </div>
      ) : (
        <div style = {{ padding: "0 10px"}}>
          <h1>Search by City Name</h1>
        </div>
      )}

    </div>
  );
};

export default SearchContainer;
