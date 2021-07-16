import WeatherCard from "./WeatherCard";
import { useState } from "react";

interface Weather {
  weather: [
    {
      main: string;
    }
  ];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  name: string;
}

const SearchContainer = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather>();

  const handleInput = (e: any) => {
    setCity(e.target.value);
  };

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
          current = {weather.weather[0].main}
          city={weather?.name}
          temp={weather?.main.temp}
          maxTemp={weather?.main.temp_max}
          minTemp={weather?.main.temp_min}
          humidity={weather?.main.humidity}
        />
      <button>Add To Favourites</button>
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
