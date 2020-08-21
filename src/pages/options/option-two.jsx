import React from 'react';
import { Row, Col, Form, Button, ListGroup, Tab } from 'react-bootstrap';
import OptionTitle from '../../components/option/option-title';
import CaretRight from '../../assets/svgs/caret-right';
import ListItem from '../../components/list/list-item';

export const OptionTwo = () => {
  return (
    <Row className='mx-0'>
      <OptionTitle title='Option 2 Name' />
      <Col>
        <Form>
          <div className='nk-list-title bg-dark text-white py-4 text-center'>
            <h5 className='mb-0 font-weight-bold'>List 1</h5>
          </div>
          <Tab.Container defaultActiveKey='#link1'>
            <Row className='nk-list-container mx-0 p-3 border border-dark vh-100 overflow-auto scroll-box'>
              <Col sm={3} className='h-100 p-0 pb-3 '>
                <ListGroup className='px-3 mr-5 bg-grey-light rounded-lg '>
                  <ListItem listKey='#link1' name='Item 1' />
                  <ListItem listKey='#link2' name='Item 2' />
                  <ListItem listKey='#link3' name='Item 3' />
                  <ListItem listKey='#link4' name='Item 4' />
                  <ListItem listKey='#link5' name='Item 5' />
                  <ListItem listKey='#link6' name='Item 6' />
                  <ListItem listKey='#link7' name='Item 7' />
                  <ListItem listKey='#link8' name='Item 8' />
                  <ListItem listKey='#link9' name='Item 9' />
                  <ListItem listKey='#link10' name='Item 10' />
                  <ListItem listKey='#link11' name='Item 11' />
                  <ListItem listKey='#link12' name='Item 12' />
                  <ListItem listKey='#link13' name='Item 13' />
                  <ListItem listKey='#link14' name='Item 14' />
                  <ListItem listKey='#link15' name='Item 15' />
                  <ListItem listKey='#link16' name='Item 16' />
                </ListGroup>
                <div class='bg-dark position-relative text-center text-white h-18px'>
                  <small class='position-absolute'>▼</small>
                </div>
              </Col>
              <Col sm={8} className='p-0'>
                <Tab.Content>
                  <Tab.Pane eventKey='#link1'>
                    <Row>
                      <ListGroup className='col-md-3 mx-4 px-3 bg-grey-light rounded-lg'>
                        <ListItem listKey='#link1' name='Item 1' />
                        <ListItem listKey='#link2' name='Item 2' />
                        <ListItem listKey='#link3' name='Item 3' />
                        <ListItem listKey='#link4' name='Item 4' />
                        <ListItem listKey='#link5' name='Item 5' />
                        <ListItem listKey='#link6' name='Item 6' />
                        <ListItem listKey='#link7' name='Item 7' />
                        <ListItem listKey='#link8' name='Item 8' />
                        <ListItem listKey='#link9' name='Item 9' />
                        <ListItem listKey='#link10' name='Item 10' />
                        <ListItem listKey='#link11' name='Item 11' />
                        <ListItem listKey='#link12' name='Item 12' />
                        <ListItem listKey='#link13' name='Item 13' />
                        <ListItem listKey='#link14' name='Item 14' />
                        <ListItem listKey='#link15' name='Item 15' />
                        <ListItem listKey='#link16' name='Item 16' />
                      </ListGroup>
                      <ListGroup className='col-md-3 mx-4 px-3 bg-grey-light rounded-lg'>
                        <ListItem listKey='#link1' name='Item 1' />
                        <ListItem listKey='#link2' name='Item 2' />
                        <ListItem listKey='#link3' name='Item 3' />
                        <ListItem listKey='#link4' name='Item 4' />
                        <ListItem listKey='#link5' name='Item 5' />
                        <ListItem listKey='#link6' name='Item 6' />
                        <ListItem listKey='#link7' name='Item 7' />
                        <ListItem listKey='#link8' name='Item 8' />
                        <ListItem listKey='#link9' name='Item 9' />
                        <ListItem listKey='#link10' name='Item 10' />
                        <ListItem listKey='#link11' name='Item 11' />
                        <ListItem listKey='#link12' name='Item 12' />
                        <ListItem listKey='#link13' name='Item 13' />
                        <ListItem listKey='#link14' name='Item 14' />
                        <ListItem listKey='#link15' name='Item 15' />
                        <ListItem listKey='#link16' name='Item 16' />
                      </ListGroup>
                      <ListGroup className='col-md-3 mx-4 px-3 bg-grey-light rounded-lg'>
                        <ListItem listKey='#link1' name='Item 1' />
                        <ListItem listKey='#link2' name='Item 2' />
                        <ListItem listKey='#link3' name='Item 3' />
                        <ListItem listKey='#link4' name='Item 4' />
                        <ListItem listKey='#link5' name='Item 5' />
                        <ListItem listKey='#link6' name='Item 6' />
                        <ListItem listKey='#link7' name='Item 7' />
                        <ListItem listKey='#link8' name='Item 8' />
                        <ListItem listKey='#link9' name='Item 9' />
                        <ListItem listKey='#link10' name='Item 10' />
                        <ListItem listKey='#link11' name='Item 11' />
                        <ListItem listKey='#link12' name='Item 12' />
                        <ListItem listKey='#link13' name='Item 13' />
                        <ListItem listKey='#link14' name='Item 14' />
                        <ListItem listKey='#link15' name='Item 15' />
                        <ListItem listKey='#link16' name='Item 16' />
                      </ListGroup>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col sm={3} className='p-0'>
                <Tab.Content>
                  <Tab.Pane eventKey='#link2'>
                    <ListGroup className='px-3 bg-grey-light rounded-lg h-100 overflow-auto scroll-box'>
                      <ListItem listKey='#link1' name='Item 1' />
                      <ListItem listKey='#link2' name='Item 2' />
                      <ListItem listKey='#link3' name='Item 3' />
                      <ListItem listKey='#link4' name='Item 4' />
                      <ListItem listKey='#link5' name='Item 5' />
                      <ListItem listKey='#link6' name='Item 6' />
                      <ListItem listKey='#link7' name='Item 7' />
                      <ListItem listKey='#link8' name='Item 8' />
                      <ListItem listKey='#link9' name='Item 9' />
                      <ListItem listKey='#link10' name='Item 10' />
                      <ListItem listKey='#link11' name='Item 11' />
                      <ListItem listKey='#link12' name='Item 12' />
                      <ListItem listKey='#link13' name='Item 13' />
                      <ListItem listKey='#link14' name='Item 14' />
                      <ListItem listKey='#link15' name='Item 15' />
                      <ListItem listKey='#link16' name='Item 16' />
                    </ListGroup>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

          <Form.Row className='w-100 align-items-center mx-0 my-3 text-capitalize'>
            <Col sm={1} className='my-1 px-0 mr-3'>
              <Button block className='py-3' variant='secondary'>
                Back
              </Button>
            </Col>
            <Col sm={1} className='my-1 px-0 mr-auto'>
              <Button block className='py-3' variant='secondary' type='reset'>
                Reset
              </Button>
            </Col>

            <Col sm={1} className='my-1 px-0'>
              <Button block className='py-3' variant='dark' type='submit'>
                Next
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
};
