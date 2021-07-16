import { favouriteCities } from "../globals";
import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const WeatherFavourites = () => {
  const [cities, setCities] = useState(favouriteCities);
  const [weather, setWeather] = useState([
    {
      weather: [{ main: "" }],
      name: "",
      main: { temp: "", temp_max: "", temp_min: "", humidity: "" },
    },
  ]);

  useEffect(() => {
    setWeather([
      {
        weather: [{ main: "" }],
        name: "",
        main: { temp: "", temp_max: "", temp_min: "", humidity: "" },
      },
    ]);
    for (const city of cities) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
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

  if (cities.length) {
    return (
      <div className="weather-fav-container">
        {weather.map((city) => {
          return (
            <WeatherCard
              key={city.name}
              current={city?.weather[0].main}
              onClick={() => removeFavourite(city.name)}
              fav={true}
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
  } else {
    return (
      <div style = {{ padding: "0px 20px"}} className="weather-card-container">
        <h1>Go add some favourites!</h1>
      </div>
    );
  }
};

export default WeatherFavourites;
