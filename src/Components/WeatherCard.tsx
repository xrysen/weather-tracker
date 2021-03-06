import RemoveFave from "./RemoveFave";
import "./WeatherCard.css";

const WeatherCard = (props: any) => {
  if (props.city) {
    return (
      <div className="weather-card-container">
        <span className = "card-title"><h3>{props.city}</h3></span>
        <div className="weather-card-content">
          <div className="weather-card-current">
            <span className = "city"><strong>{props.current}</strong></span>
            <span className = "current-temp">{props.temp}°</span>
          </div>
          <div className = "weather-card-high-low">
            <ul style={{listStyleType: "none", textAlign: "left"}}>
              <li>High: {props.maxTemp}°</li>
              <li>Low: {props.minTemp}°</li>
              <li>Hum: {props.humidity}%</li>
            </ul>
          </div>
        </div>
          {props.fav ? <RemoveFave onClick = {props.onClick} /> : "" }
      </div>
    );

  }

  return <div></div>;
};

export default WeatherCard;
