import React from 'react';
import { Button } from 'react-bootstrap';

const TableRow = ({
  row,
  recordsCount,
  savedName,
  createdDatetime,
  lastUpdatedDatetime,
}) => {
  return (
    <tr className='font-weight-600 text-center'>
      <td>{row}</td>
      <td className='text-green'>{recordsCount}</td>
      <td>
        <input
          type='text'
          value={savedName}
          className='w-100 border font-weight-600 text-black-80 p-2'
        />
      </td>
      <td>{createdDatetime}</td>
      <td>{lastUpdatedDatetime}</td>
      <td>
        <span className='d-flex justify-content-between align-items-center'>
          <Button
            variant='warning'
            size='sm'
            className='rounded-pill pb-1 pt-0 px-2 text-capitalize '
          >
            Click to view/update
          </Button>
          <Button variant='btn-link' className='close'>
            <small className='text-danger'>&times;</small>
          </Button>
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
