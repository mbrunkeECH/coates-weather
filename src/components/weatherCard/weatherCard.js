import React from 'react';
import './weatherCard.css';

import Humidity from '../../assets/humidity.svg';
import Wind from '../../assets/wind.svg';
import Forecast from './forecast/forecast';

const WeatherCard = () => {
  return (
    <div className='card-container'>
      <div className='current'>
        <h4 className='current-city'>Brisbane, Australia</h4>
        <h3 className='current-temp'>15 <span id='degrees'>{'\u00b0'} C</span></h3>
        <h5 className='current-time'>Sunday, 11am</h5>
        <div className="stats">
          <div className="stat" id='humidity'>
            <img src={Humidity} alt="" />
            <p>90%</p>
          </div>
          <div className="stat" id='wind'>
            <img src={Wind} alt="" />
            <p>90%</p>
          </div>
        </div>
      </div>

      <div className='forecast'>
        <Forecast />
      </div>
    </div>
  );
};

export default WeatherCard;