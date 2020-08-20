import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// Icons
import SubMenu from '../../assets/svgs/subMenu.icon';
import OptionHeader from '../../components/option-header/option-header';
import ItemsBox from '../../components/items-box/items-box';

export const OptionOneCreateNew = ({ onHide }) => {
  return (
    <Form className='p-3 '>
      <OptionHeader>
        <SubMenu height={50} color='currentColor' />
      </OptionHeader>

      <Row className='mx-0 justify-content-around'>
        <ItemsBox title='left side' />
        <ItemsBox title='Right side' />
      </Row>

      <Form.Row className='w-100 align-items-center mx-0'>
        <Col sm={2} className='my-1'>
          <Button
            block
            className='py-3'
            variant='secondary'
            onClick={() => onHide}
          >
            Close
          </Button>
        </Col>
        <Col sm={2} className='my-1'>
          <Button block className='py-3' variant='secondary' type='reset'>
            Reset
          </Button>
        </Col>
        <Col className='my-1'>
          <Form.Label htmlFor='inlineFormInputName' srOnly>
            Name
          </Form.Label>
          <Form.Control
            id='inlineFormInputName'
            className='py-4 border border-dark'
            placeholder='Enter A Name to Save Results'
          />
        </Col>
        <Col sm={2} className='my-1'>
          <Button block className='py-3' variant='dark' type='submit'>
            Generate
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};
