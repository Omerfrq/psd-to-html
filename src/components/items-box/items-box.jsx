import React from 'react';
import './items-box.styles.css';
import { Col, Form } from 'react-bootstrap';
import ItemBoxChildren from './item-box-children';
import ItemBoxField from './item-box-field';
import ItemBoxTitle from './item-box-title';

const ItemsBox = ({ title }) => {
  return (
    <Col
      md={6}
      className='d-flex flex-column align-items-center pb-5 px-0  bg-yellow-light'
    >
      <ItemBoxTitle title={title} />
      <h6 className='text-muted font-weight-bold text-capitalize'>
        Double click any item to add
      </h6>
      <div className='col col-md-6  flex-fill border border-dark rounded pr-1 py-2 mb-5'>
        <div className='items-box scroll-box bg-white'>
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
          <ItemBoxChildren text='Option 40 - text 12334' />
          <ItemBoxChildren text='Option 50 - text 12334' />
          <ItemBoxChildren text='Option 2 - text 12334' />
        </div>
      </div>
      <ItemBoxField>
        <Form.Group>
          <Form.Control
            as='select'
            className='w-130px'
            id='inlineFormCustomSelectPref'
            custom
          >
            <option value='0'>First</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md='3'>
          <Form.Control
            isInvalid
            className='rounded mt-4'
            type='text'
            required
          />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='2'>
          <Form.Control
            isValid
            defaultValue={23}
            className='rounded '
            type='text'
            required
          />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
      </ItemBoxField>
      <ItemBoxField>
        <Form.Group>
          <Form.Control
            as='select'
            className='w-130px'
            id='inlineFormCustomSelectPref'
            custom
          >
            <option value='0'>Second</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Control>
        </Form.Group>
      </ItemBoxField>
      <ItemBoxField>
        <Form.Group>
          <Form.Control
            as='select'
            className='w-130px'
            id='inlineFormCustomSelectPref'
            custom
          >
            <option value='0'>Third</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} xs={5} md={3}>
          <Form.Control className='rounded' type='text' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
      </ItemBoxField>
      <ItemBoxField>
        <Form.Group>
          <Form.Control
            as='select'
            className='w-130px'
            id='inlineFormCustomSelectPref'
            custom
          >
            <option value='0'>Forth</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md='2'>
          <Form.Control className='rounded' type='text' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='2'>
          <Form.Control className='rounded' type='text' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
      </ItemBoxField>
    </Col>
  );
};

export default ItemsBox;
