import React from 'react';
import { Col, Form } from 'react-bootstrap';
import './items-box.styles.css';

import QuestionCircle from '../../assets/svgs/question-circle';

const ItemBoxField = ({ children }) => {
  return (
    <Form.Row className='mx-3 align-items-center align-self-baseline mb-3'>
      <span className='lines mr-2'>|||</span>
      <Form.Group>
        <Form.Check
          className='small'
          required
          label='Any text 123123'
          feedback='You must agree before submitting.'
        />
      </Form.Group>
      <span className='mx-3'>
        <QuestionCircle height={15} color='#888' />
      </span>
      {children}
    </Form.Row>
  );
};

export default ItemBoxField;
