import React, { useState } from 'react';
import './option.styles.css';
import { Button, Row, Col } from 'react-bootstrap';

import CheckBox from '../../components/check-box/check-box';

// Icons
import SubMenu from '../../assets/svgs/subMenu.icon';

import CreateNew from '../../components/create-new/create-new';
import ManageExisting from '../../components/manage-existing/manage-existing';

const OptionOne = () => {
  const [show, setShow] = useState(false);

  const closeCreateNew = () => setShow(false);
  const openCreateNew = () => setShow((prev) => !prev);

  const [showManageExisting, setShowManageExisting] = useState(false);

  const closeManageExisting = () => setShowManageExisting(false);
  const openManageExisting = () => setShowManageExisting((prev) => !prev);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
          <h3 className='font-bold heading-color'>Option 1 Name</h3>
        </Col>
        <Col>
          <Button
            block
            variant='link'
            className='border p-3 d-flex align-items-center justify-content-between'
            onClick={() => setShow((prev) => !prev)}
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
            onClick={openManageExisting}
          >
            <CheckBox text='Manage Existing' checked={showManageExisting} />
            <span>
              <SubMenu height={50} color='currentColor' />
            </span>
          </Button>
        </Col>
      </Row>
      <CreateNew show={show} onHide={closeCreateNew} onSubmit={handleSubmit} />
      <ManageExisting show={showManageExisting} onHide={closeManageExisting} />
    </>
  );
};

export default OptionOne;
