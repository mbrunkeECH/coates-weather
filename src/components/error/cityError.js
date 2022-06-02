import React from 'react';
import './cityError.css';

const CityError = () => {
  return (
    <div className='error-cont'>
      <p> No weather data could be found for that city.</p>
    </div>
  );
};

export default CityError;