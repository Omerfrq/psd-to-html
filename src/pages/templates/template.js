import React from 'react';
import Option from '../../components/option/option';
import { Row } from 'react-bootstrap';
import '../data/data.styles.css';

// Icons
import FilesIcon from '../../assets/svgs/files.icon';

const ManageTemplates = () => {
  return (
    <div className='my-5'>
      <h2 className='text-center heading-color font-bold'>
        Select A ManageTemplates Type to Manage
      </h2>
      <Row className='justify-content-around my-5 mx-5'>
        <Option text='template 1' to='/manage-templates/template-one'>
          <FilesIcon height={50} color='currentColor' />
        </Option>
        <Option text='template 2' to='/manage-templates/template-two'>
          <FilesIcon height={50} color='currentColor' />
        </Option>
        <Option text='template 3' to='/manage-templates/template-three'>
          <FilesIcon height={50} color='currentColor' />
        </Option>
        <Option text='template 4' to='/manage-templates/template-four'>
          <FilesIcon height={50} color='currentColor' />
        </Option>
        <Option text='template 5' to='/manage-templates/template-five'>
          <FilesIcon height={50} color='currentColor' />
        </Option>
      </Row>
    </div>
  );
};

export default ManageTemplates;
