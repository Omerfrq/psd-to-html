import React from 'react';
import './option.styles.css';
import { Col } from 'react-bootstrap';
import SubMenu from '../../assets/svgs/subMenu.icon';

const OptionTitle = ({ title }) => (
  <Col
    md={12}
    className='py-5 d-flex align-items-center justify-content-center'
  >
    <span className='bg-dark badge badge-pill text-white option-title mr-3'>
      <SubMenu height={30} color='currentColor' />
    </span>
    <h3 className='font-bold heading-color mb-0'>{title}</h3>
  </Col>
);

export default OptionTitle;
