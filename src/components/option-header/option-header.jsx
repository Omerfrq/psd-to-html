import React from 'react';

import { Row, Button } from 'react-bootstrap';

const OptionHeader = ({ children }) => {
  return (
    <Row className='mx-0 mb-3 px-3 py-2 bg-yellow justify-content-between align-items-center'>
      <h5 className='mb-0 font-weight-bold text-capitalize text-muted'>
        List 2 Options
      </h5>
      <div className='d-flex align-items-center'>
        <div className='text-center'>
          <h5 className='font-weight-bold text-muted'>
            Select Item(s) from List 2
          </h5>
          <h6 className='mb-0 text-danger font-weight-bold text-capitalize'>
            0 items selected
          </h6>
        </div>
        <Button variant='success' className='ml-4 p-3 border-0'>
          {children}
        </Button>
      </div>
      <small className='bg-light pb-2'>
        <div className='bg-grey-light font-bold mb-2 py-2'>
          <span className='px-1'>
            The box Contain for help details when asking options
          </span>
        </div>
        <div className='d-flex justify-content-between px-2'>
          <span>Enter text here...</span>
          <span>Enter text here...</span>
        </div>
        <div className='d-flex justify-content-between px-2'>
          <span>Enter text here...</span>
          <span>Enter text here...</span>
        </div>
      </small>
    </Row>
  );
};

export default OptionHeader;
