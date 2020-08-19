import React from 'react';
import './check-box.styles.css';

const CheckBox = ({ text }) => {
  return (
    <div className='position-relative text-capitalize text-left'>
      <div className='checkbox-fp'>
        <label className='mb-0'>
          <input type='checkbox' />
          <span className='box'></span>
          <h4 className='ml-4 mb-0'>{text}</h4>
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
