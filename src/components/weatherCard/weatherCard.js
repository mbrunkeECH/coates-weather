import React from 'react';
import { format } from 'date-fns';

import './weatherCard.css';

import Humidity from '../../assets/humidity.svg';
import Wind from '../../assets/wind.svg';
import Forecast from './forecast/forecast';

const WeatherCard = ({ weather, city }) => {
  const daily = weather.daily.slice(0, 5);
  const forecast = daily;
  const current = weather.current;
  const temp = current.temp;
  const formattedTemp = temp.toFixed(1);
  const date = new Date(current.dt * 1000);
  const dayTime = format(new Date(date), 'EEEE, h:mmaaa');

  return (
    <div className='card-container'>
      <div className="current-icon">
        <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="weather icon" />
      </div>
      <div className='current'>
        <h4 className='current-city'>{city}</h4>
        <h3 className='current-temp'>{formattedTemp} <span id='degrees'>{'\u00b0'} C</span></h3>
        <h5 className='current-time'>{dayTime}</h5>
        <div className="stats">
          {/* create this as a component with {...children} */}
          <div className="stat" id='humidity'>
            <img src={Humidity} alt="" />
            <p>{current.humidity}%</p>
          </div>
          <div className="stat" id='wind'>
            <img src={Wind} alt="" />
            <p> {current.wind_speed.toFixed(0)} km/h</p>
          </div>
          <div className="stat" id='feels'>
            <p> Feels like: {current.feels_like.toFixed(0)}</p>
          </div>
        </div>
      </div>
      <div className='forecasts'>
        <Forecast weatherForcecast={forecast} />
      </div>
    </div>
  );
};

export default WeatherCard;