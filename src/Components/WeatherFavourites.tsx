import { favouriteCities } from "../globals";
import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import RemoveFave from "./RemoveFave";

const WeatherFavourites = () => {
  const [cities, setCities] = useState(favouriteCities);
  const [weather, setWeather] = useState([
    { name: "", main: { temp: "", temp_max: "", temp_min: "", humidity: "" } },
  ]);

  useEffect(() => {
    setWeather([
      {
        name: "",
        main: { temp: "", temp_max: "", temp_min: "", humidity: "" },
      },
    ]);
    for (const city of cities) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af9d6c4e7a164853ec010647718ce37a&units=metric`,
        {
          mode: "cors",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setWeather((current) => [...current, res]);
        });
    }
  }, [cities]);

  const removeFavourite = (name: string) => {
    const arr = [...cities];
    const index = arr.indexOf(name);
    if (index > -1) {
      favouriteCities.splice(index, 1);
      arr.splice(index, 1);
      setCities(arr);
    }
  };

  return (
    <div className="weather-fav-container">
      {weather.map((city) => {
        return (
            <WeatherCard
              onClick = {()=> removeFavourite(city.name)}
              fav = {true}
              city={city?.name}
              temp={city?.main.temp}
              maxTemp={city?.main.temp_max}
              minTemp={city?.main.temp_min}
              humidity={city?.main.humidity}
            />
        );
      })}
    </div>
  );
};

export default WeatherFavourites;
