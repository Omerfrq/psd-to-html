import React, { useState } from 'react';
import './option.styles.css';
import { Button, Row, Col } from 'react-bootstrap';

import CheckBox from '../../components/check-box/check-box';

// Icons
import SubMenu from '../../assets/svgs/subMenu.icon';

import ManageExisting from '../../components/manage-existing/manage-existing';
import ToggleView from '../../components/create-new/create-new';

import { OptionOneCreateNew } from '../../components/option-one/index';
import OptionTitle from '../../components/option/option-title';
const OptionFour = () => {
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
        <OptionTitle title='Option 4 Name' />
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

export default OptionFour;
