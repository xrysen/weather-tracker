import "./WeatherCard.css";

const WeatherCard = (props: any) => {
  return (
    <div className="weather-card-container">
      <span className = "card-title"><h3>Duncan</h3></span>
      <div className="weather-card-content">
        <div className="weather-card-current">
          <span className = "city"><strong>Sunny</strong></span>
          <span className = "current-temp">30°</span>
        </div>
        <div className = "weather-card-high-low">
          <span>High: 36°</span>
          <span>Low: 28°</span>
          <span>Hum: 30%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
