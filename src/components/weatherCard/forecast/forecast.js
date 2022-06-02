import React from 'react';
import { format } from 'date-fns';
import './forecast.css';

const Forecast = ({ weatherForcecast }) => {
  return (
    <div className='forecast-cont'>
      {weatherForcecast.map(day => {
        const date = new Date(day.dt * 1000);
        const dayOfWeek = format(new Date(date), 'EEEE');

        return (
          <div className="item" key={day.dt.toString()} >
            <p>{dayOfWeek}</p>
            <div className="icon">
              <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="current weather icon" />
            </div>
            <div className="temp">
              <p id='min'>{day.temp.min.toFixed(0)} <span>{'\u00b0'} C</span> </p>
              <p id='max'>{day.temp.max.toFixed(0)} <span>{'\u00b0'} C</span></p>
            </div>
          </div>
        );


      })}
    </div >);
};

export default Forecast;