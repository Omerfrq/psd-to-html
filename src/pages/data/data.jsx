import React from 'react';
import Option from '../../components/option/option';
import { Row } from 'react-bootstrap';
import FilesIcon from '../../assets/svgs/files.icon';

const Data = () => {
  return (
    <div className='my-5'>
      <h1 className='text-center font-weight-bold'>
        Select A Data Type to Manage
      </h1>
      <Row className='justify-content-around my-5 mx-5'>
        <Option text='option 1'>
          <FilesIcon height={70} />
        </Option>
        <Option text='option 2'>
          <FilesIcon height={70} />
        </Option>
        <Option text='option 3'>
          <FilesIcon height={70} />
        </Option>
        <Option text='option 4'>
          <FilesIcon height={70} />
        </Option>
        <Option text='option 5'>
          <FilesIcon height={70} />
        </Option>
      </Row>
    </div>
  );
};

export default Data;
