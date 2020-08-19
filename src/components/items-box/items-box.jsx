import React from 'react';
import './items-box.styles.css';
import { Col, Form } from 'react-bootstrap';
import ItemBoxChildren from './item-box-children';
import QuestionCircle from '../../assets/svgs/question-circle';
import ItemBoxField from './item-box-field';

const ItemsBox = () => {
  return (
    <Col
      md={6}
      className='d-flex flex-column align-items-center py-5 bg-yellow-light'
    >
      <h6 className='text-muted font-weight-bold text-capitalize'>
        Double click any item to add
      </h6>
      <div className='w-50 border border-dark rounded pr-1 py-2 mb-5'>
        <div className='items-box scrollbox bg-white'>
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
        <Form.Group as={Col}>
          <Form.Control
            as='select'
            className='my-1 mr-sm-2'
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
          <Form.Control className='rounded' type='number' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3'>
          <Form.Control className='rounded' type='number' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
      </ItemBoxField>
      <ItemBoxField>
        <Form.Group as={Col}>
          <Form.Control
            as='select'
            className='my-1 mr-sm-2'
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
        <Form.Group as={Col}>
          <Form.Control
            as='select'
            className='my-1 mr-sm-2'
            id='inlineFormCustomSelectPref'
            custom
          >
            <option value='0'>Third</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md='3'>
          <Form.Control className='rounded' type='number' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
      </ItemBoxField>
      <ItemBoxField>
        <Form.Group as={Col}>
          <Form.Control
            as='select'
            className='my-1 mr-sm-2'
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
          <Form.Control className='rounded' type='number' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='2'>
          <Form.Control className='rounded' type='number' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='2'>
          <Form.Control className='rounded' type='number' required />
          <Form.Control.Feedback type='invalid'>
            <small className='text-nowrap'>A value must be entered</small>
          </Form.Control.Feedback>
        </Form.Group>
      </ItemBoxField>
    </Col>
  );
};

export default ItemsBox;
