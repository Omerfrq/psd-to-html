import React, { useState } from 'react';
import './option.styles.css';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

import CheckBox from '../../components/check-box/check-box';

// Icons
import FilesIcon from '../../assets/svgs/files.icon';
import OptionHeader from '../../components/option-header/option-header';
import ItemsBox from '../../components/items-box/items-box';

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
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <OptionHeader>
            <FilesIcon height={50} color='currentColor' />
          </OptionHeader>

          <Modal.Body className='px-0 pb-0'>
            <Row className='mx-0 justify-content-around'>
              <ItemsBox title='left side' />
              <ItemsBox title='Right side' />
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Form.Row className='w-100 align-items-center mx-0'>
              <Col sm={2} className='my-1'>
                <Button
                  block
                  className='py-3'
                  variant='secondary'
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Col>
              <Col sm={2} className='my-1'>
                <Button block className='py-3' variant='secondary' type='reset'>
                  Reset
                </Button>
              </Col>
              <Col className='my-1'>
                <Form.Label htmlFor='inlineFormInputName' srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  id='inlineFormInputName'
                  className='py-4'
                  placeholder='Enter A Name to Save Results'
                />
              </Col>
              <Col sm={2} className='my-1'>
                <Button block className='py-3' variant='dark' type='submit'>
                  Generate
                </Button>
              </Col>
            </Form.Row>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default OptionOne;
