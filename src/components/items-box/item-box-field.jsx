import React from 'react';
import { Form } from 'react-bootstrap';
import './items-box.styles.css';

import QuestionCircle from '../../assets/svgs/question-circle';
import CheckBox from '../check-box/check-box';

const ItemBoxField = ({ children }) => {
  return (
    <Form.Row className='mx-3 align-items-center align-self-baseline mb-3'>
      <span className='lines mr-2'>|||</span>
      <Form.Group>
        <span className='item-box-check'>
          <CheckBox text='Any text 123123' />
        </span>
      </Form.Group>
      <span className='d-flex mx-2 btn btn-link p-0'>
        <QuestionCircle height={15} color='#888' />
      </span>
      {children}
    </Form.Row>
  );
};

export default ItemBoxField;
