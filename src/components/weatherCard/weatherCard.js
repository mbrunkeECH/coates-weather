import React from "react";
import { format } from "date-fns";

import "./weatherCard.css";

import Humidity from "../../assets/humidity.svg";
import Wind from "../../assets/wind.svg";
import Forecast from "./forecast/forecast";
import Stat from "./stats/stat";

const WeatherCard = ({ weather, city }) => {
  const daily = weather.daily.slice(0, 5);
  const forecast = daily;
  const current = weather.current;
  const temp = current.temp;
  const formattedTemp = temp.toFixed(1);
  const date = new Date(current.dt * 1000);
  const dayTime = format(new Date(date), "EEEE, h:mmaaa");
  const windSpeed = current.wind_speed.toFixed(0);
  const feels = current.feels_like.toFixed(0);
  const humidity = current.humidity;

  return (
    <div className="card-container">
      <div className="current-icon">
        <img
          src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="current">
        <h4 className="current-city">{city}</h4>
        <h3 className="current-temp">
          {formattedTemp} <span id="degrees">{"\u00b0"} C</span>
        </h3>
        <h5 className="current-time">{dayTime}</h5>
        <div className="stats">
          <Stat
            image={Wind}
            text={`${windSpeed}km/h`}
            bgColor="rgba(94, 79, 193, 0.1)"
            color="#5e4fc1"
          />
          <Stat
            image={Humidity}
            text={`${humidity}%`}
            bgColor="rgba(216, 97, 145, 0.1)"
            color="#d86191"
          />
          <Stat
            text={`feels like: ${feels}`}
            bgColor="rgba(101, 142, 217, 0.1)"
            color="#658ed9"
          />
        </div>
      </div>
      <div className="forecasts">
        <Forecast weatherForecast={forecast} />
      </div>
    </div>
  );
};

export default WeatherCard;
