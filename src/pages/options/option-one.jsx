import React, { useState } from 'react';
import './option.styles.css';
import { Button, Row, Col } from 'react-bootstrap';

import CheckBox from '../../components/check-box/check-box';

// Icons
import FilesIcon from '../../assets/svgs/files.icon';

import CreateNew from '../../components/create-new/create-new';

const OptionOne = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Row className='mx-0'>
        <Col
          md={12}
          className='py-5 d-flex align-items-center justify-content-center'
        >
          <span className='bg-dark badge badge-pill text-white p-2 mr-3'>
            <FilesIcon height={30} color='currentColor' />
          </span>
          <h3>Option 1 Name</h3>
        </Col>
        <Col>
          <Button
            block
            variant='link'
            className='border p-3 d-flex align-items-center justify-content-between'
            onClick={handleShow}
          >
            <CheckBox text='create new' />
            <span>
              <FilesIcon height={50} color='currentColor' />
            </span>
          </Button>
        </Col>
        <Col>
          <Button
            block
            variant='link'
            className='border p-3 d-flex align-items-center justify-content-between'
            onClick={handleShow}
          >
            <CheckBox text='create new' />
            <span>
              <FilesIcon height={50} color='currentColor' />
            </span>
          </Button>
        </Col>
      </Row>
      <CreateNew show={show} onHide={handleClose} onSubmit={handleSubmit} />
    </>
  );
};

export default OptionOne;
