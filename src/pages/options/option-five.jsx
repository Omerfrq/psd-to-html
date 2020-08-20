import React, { useState } from 'react';
import './option.styles.css';
import { Button, Row, Col } from 'react-bootstrap';

import CheckBox from '../../components/check-box/check-box';

// Icons
import SubMenu from '../../assets/svgs/subMenu.icon';

import ManageExisting from '../../components/manage-existing/manage-existing';
import ToggleView from '../../components/create-new/create-new';

import { OptionOneCreateNew } from '../../components/option-one/index';
const OptionFive = () => {
  const [show, setShow] = useState(false);
  const [showManageExisting, setShowManageExisting] = useState(false);

  const closeManageExisting = () => {
    setShowManageExisting(false);
  };

  const toggleShow = () => {
    closeManageExisting();
    setShow((prev) => !prev);
  };

  const toggleManageExisting = () => {
    setShow(false);
    setShowManageExisting((prev) => !prev);
  };

  return (
    <>
      <Row className='mx-0'>
        <Col
          md={12}
          className='py-5 d-flex align-items-center justify-content-center'
        >
          <span className='bg-grey-light badge badge-pill text-white p-3 mr-3'>
            <SubMenu height={30} color='currentColor' />
          </span>
          <h3 className='font-bold heading-color'>Option 5 Name</h3>
        </Col>
        <Col>
          <Button
            block
            variant='link'
            className='border p-3 d-flex align-items-center justify-content-between'
            onClick={toggleShow}
          >
            <CheckBox text='create new' checked={show} />
            <span>
              <SubMenu height={50} color='currentColor' />
            </span>
          </Button>
        </Col>
        <Col>
          <Button
            block
            variant='link'
            className='border p-3 d-flex align-items-center justify-content-between'
            onClick={toggleManageExisting}
          >
            <CheckBox text='Manage Existing' checked={showManageExisting} />
            <span>
              <SubMenu height={50} color='currentColor' />
            </span>
          </Button>
        </Col>
      </Row>
      <ToggleView show={show}>{show && <h1>Option Four</h1>}</ToggleView>

      <ToggleView show={showManageExisting}>
        {showManageExisting && <ManageExisting onHide={closeManageExisting} />}
      </ToggleView>
    </>
  );
};

export default OptionFive;
