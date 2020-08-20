import React from 'react';
import { Button } from 'react-bootstrap';

const TableHead = () => (
  <thead className='bg-light  text-uppercase small'>
    <tr className='text-center text-black-50'>
      <th className='position-relative'>
        <span>row</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0 px-2 mb-1'>
            <span className='font-weight-bold'>&times;</span>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0 px-2'>
            <span className='font-small'>▼</span>
          </Button>
        </span>
      </th>
      <th className='position-relative'>
        <span>records count</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0 px-2 mb-1'>
            <span className='font-weight-bold'>&times;</span>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0 px-2'>
            <span className='font-small'>▼</span>
          </Button>
        </span>
      </th>
      <th className='position-relative text-left pl-4'>
        <span>saved name</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0 px-2 mb-1'>
            <span className='font-weight-bold'>&times;</span>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0 px-2'>
            <span className='font-small'>▼</span>
          </Button>
        </span>
      </th>
      <th className='position-relative'>
        <span>created date time</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0 px-2 mb-1'>
            <span className='font-weight-bold'>&times;</span>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0 px-2'>
            <span className='font-small'>▼</span>
          </Button>
        </span>
      </th>
      <th className='position-relative'>
        <span>last updated date time</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0 px-2 mb-1'>
            <span className='font-weight-bold'>&times;</span>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0 px-2'>
            <span className='font-small'>▼</span>
          </Button>
        </span>
      </th>
      <th className='text-left pl-4'>
        <span>actions</span>
      </th>
    </tr>
  </thead>
);

export default TableHead;
