import React from 'react';
import Option from '../../components/option/option';
import { Row } from 'react-bootstrap';
import './data.styles.css';

// Icons
import FilesIcon from '../../assets/svgs/files.icon';
import KeywordIcon from '../../assets/svgs/keyword.icon';
import ViewFilesIcon from '../../assets/svgs/view-files.icon';

const Data = () => {
  return (
    <div className='my-5'>
      <h2 className='text-center font-weight-bold'>
        Select A Data Type to Manage
      </h2>
      <Row className='justify-content-around my-5 mx-5'>
        <Option text='option 1' to='/option-one'>
          <FilesIcon height={65} color='currentColor' />
        </Option>
        <Option text='option 2'>
          <FilesIcon height={65} color='currentColor' />
        </Option>
        <Option text='option 3'>
          <FilesIcon height={65} color='currentColor' />
        </Option>
        <Option text='option 4'>
          <FilesIcon height={65} color='currentColor' />
        </Option>
        <Option text='option 5'>
          <FilesIcon height={65} color='currentColor' />
        </Option>
      </Row>
    </div>
  );
};

export default Data;
