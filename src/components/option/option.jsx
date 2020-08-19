import React from 'react';
import './option.styles.css';

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Option = ({ text, to, children }) => {
  return (
    <Col
      as={Link}
      to={to}
      xs={8}
      sm={3}
      lg={2}
      className='option-link  text-center border border-muted py-4 mb-4 mb-lg-0 mr-2 mr-lg-0'
    >
      {children}
      <h5 className='text-capitalize heading-color font-bold mt-3'>{text}</h5>
    </Col>
  );
};

export default Option;
