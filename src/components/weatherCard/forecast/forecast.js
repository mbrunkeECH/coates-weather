import React from 'react';
import './forecast.css';

const Forecast = () => {
  return (
    <div className='forecast-cont'>
      <div className="item">
        <p>Monday</p>
        <p>icon</p>
        <p>15 <span>{'\u00b0'} C</span></p>
      </div>
    </div>);
};

export default Forecast;