import React from 'react';
import './input.css';

import Search from '../../assets/Search.svg';

const Input = ({ placeholder, onChange, buttonText, onClick }) => {
  return (
    <div className='inputCont'>
      <img src={Search} alt="" className='search-icon' />
      <input type="text" placeholder={placeholder} onChange={onChange} className="search" />
      <button className='btn' onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Input;