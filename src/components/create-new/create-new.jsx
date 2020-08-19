import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// Icons
import FilesIcon from '../../assets/svgs/files.icon';
import OptionHeader from '../../components/option-header/option-header';
import ItemsBox from '../../components/items-box/items-box';
import Fade from 'react-bootstrap/Fade';

const CreateNew = ({ show, onSubmit, onHide }) => {
  return (
    <Fade in={show}>
      <div>
        <Form className='p-3 ' onSubmit={onSubmit}>
          <OptionHeader>
            <FilesIcon height={50} color='currentColor' />
          </OptionHeader>

          <Row className='mx-0 justify-content-around'>
            <ItemsBox title='left side' />
            <ItemsBox title='Right side' />
          </Row>

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
                className='py-4 border border-dark'
                placeholder='Enter A Name to Save Results'
              />
            </Col>
            <Col sm={2} className='my-1'>
              <Button block className='py-3' variant='dark' type='submit'>
                Generate
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Fade>
  );
};

export default CreateNew;
