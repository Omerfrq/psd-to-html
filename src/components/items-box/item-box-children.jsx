import React from 'react';
import { Button } from 'react-bootstrap';

import QuestionCircle from '../../assets/svgs/question-circle';

const ItemBoxChildren = ({ text }) => (
  <Button
    variant='link'
    className='d-flex font-weight-bold heading-color align-items-center pl-3'
  >
    <span className='mr-3'>{text}</span>
    <QuestionCircle height={15} color='#888' />
  </Button>
);

export default ItemBoxChildren;
