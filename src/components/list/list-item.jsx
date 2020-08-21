import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CaretRight from '../../assets/svgs/caret-right';

const ListItem = ({ listKey, name }) => (
  <ListGroup.Item
    action
    variant='light'
    href={listKey}
    className='py-2 my-2 border-0 d-flex justify-content-between align-items-center'
  >
    <span className='text-capitalize font-bold'>{name}</span>
    <span className='bg-grey-light-2 px-2'>
      <CaretRight height={18} color='currentColor' />
    </span>
  </ListGroup.Item>
);

export default ListItem;
