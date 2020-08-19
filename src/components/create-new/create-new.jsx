import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

// Icons
import FilesIcon from '../../assets/svgs/files.icon';
import OptionHeader from '../../components/option-header/option-header';
import ItemsBox from '../../components/items-box/items-box';

const CreateNew = ({ show, onHide, onSubmit }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Form
        className='p-3'
        // noValidate
        // validated={validated}
        onSubmit={onSubmit}
      >
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
                onClick={onHide}
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
  );
};

export default CreateNew;
