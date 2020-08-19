import React from 'react';

const ItemBoxTitle = ({ title }) => (
  <div className='contact-header position-relative text-capitalize bg-yellow d-flex justify-content-center w-100 py-4 mb-5'>
    <h2 className='mb-0'>{title}</h2>
    <span className='arrow-bottom'></span>
  </div>
);

export default ItemBoxTitle;
