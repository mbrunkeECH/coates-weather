import React from 'react';
import './input.css';

import Search from '../../assets/Search.svg';

const Input = ({ placeholder, onChange, buttonText, onSubmit }) => {
  return (
    <div className='inputCont'>
        <form onSubmit={onSubmit}>
      <img src={Search} alt="" className='search-icon' />
      <input type="text" placeholder={placeholder} onChange={onChange} className="search" />
      <button className='btn' >{buttonText}</button>
        </form>
    </div>
  );
};

export default Input;