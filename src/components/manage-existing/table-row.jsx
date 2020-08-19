import React from 'react';
import { Button } from 'react-bootstrap';

const TableRow = () => {
  return (
    <tr>
      <td>1</td>
      <td className='text-green'>1234</td>
      <td>
        <input type='text' value='Sample 1234' className='w-100 py-1 px-2' />
      </td>
      <td>01/01/2000 9:35AM</td>
      <td>01/01/2000 9:35AM</td>
      <td>
        <span className='d-flex justify-content-between align-items-center'>
          <Button
            variant='warning'
            size='sm'
            className='rounded-pill pb-1 pt-0 px-2'
          >
            <small>Click to view/update</small>
          </Button>
          <Button
            variant='outline-danger'
            size='sm'
            className='rounded-pill pb-1 pt-0 px-2'
          >
            <h5 className='mb-0'>&times;</h5>
          </Button>
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
