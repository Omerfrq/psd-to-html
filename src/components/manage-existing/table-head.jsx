import React from 'react';
import { Button } from 'react-bootstrap';

const TableHead = () => (
  <thead className='bg-light text-black-50 text-uppercase small'>
    <tr>
      <th className='position-relative'>
        <span>row</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0 bg-muted '>
            <h6 className='mb-0'>&times;</h6>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0'>
            <small className='mb-0'>▼</small>
          </Button>
        </span>
      </th>
      <th className='position-relative'>
        <span>records count</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0'>
            <h6 className='mb-0'>&times;</h6>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0'>
            <small className='mb-0'>▼</small>
          </Button>
        </span>
      </th>
      <th className='position-relative'>
        <span>saved name</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0'>
            <h6 className='mb-0'>&times;</h6>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0'>
            <small className='mb-0'>▼</small>
          </Button>
        </span>
      </th>
      <th className='position-relative'>
        <span>created date time</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0'>
            <h6 className='mb-0'>&times;</h6>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0'>
            <small className='mb-0'>▼</small>
          </Button>
        </span>
      </th>
      <th className='position-relative'>
        <span>last updated date time</span>
        <span className='pos-top d-flex flex-column'>
          <Button variant='light' size='sm' className='align-top p-0'>
            <h6 className='mb-0'>&times;</h6>
          </Button>
          <Button variant='light' size='sm' className='align-top p-0'>
            <small className='mb-0'>▼</small>
          </Button>
        </span>
      </th>
      <th>
        <span>actions</span>
      </th>
    </tr>
  </thead>
);

export default TableHead;
