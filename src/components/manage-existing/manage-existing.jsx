import React from 'react';
import './manage-existing.styles.css';
import { Button, Form, Table, Col, Pagination } from 'react-bootstrap';
import TableRow from './table-row';
import TableHead from './table-head';

const ManageExisting = ({ onHide }) => {
  return (
    <Form className='p-3'>
      <h2 className='my-4 text-capitalize text-center font-weight-bold'>
        Manage Existing
      </h2>

      <Table hover responsive>
        <TableHead />
        <tbody className='small'>
          <TableRow
            row='1'
            recordsCount='123'
            savedName='Sample 1234'
            createdDatetime='01/01/2000 9:35AM'
            lastUpdatedDatetime='01/01/2000 9:35AM'
          />
          <TableRow
            row='2'
            recordsCount='123'
            savedName='Sample 1234'
            createdDatetime='01/01/2000 9:35AM'
            lastUpdatedDatetime='01/01/2000 9:35AM'
          />
          <TableRow
            row='3'
            recordsCount='123'
            savedName='Sample 1234'
            createdDatetime='01/01/2000 9:35AM'
            lastUpdatedDatetime='01/01/2000 9:35AM'
          />
          <TableRow
            row='4'
            recordsCount='123'
            savedName='Sample 1234'
            createdDatetime='01/01/2000 9:35AM'
            lastUpdatedDatetime='01/01/2000 9:35AM'
          />
          <TableRow
            row='5'
            recordsCount='123'
            savedName='Sample 1234'
            createdDatetime='01/01/2000 9:35AM'
            lastUpdatedDatetime='01/01/2000 9:35AM'
          />
        </tbody>
      </Table>

      <Form.Row className='w-100 align-items-center mx-0'>
        <Col sm={2} className='my-1'>
          <Form.Group className='d-flex align-items-end'>
            <Form.Control className='col-3' type='text' value='10' />
            <Form.Label className='col small font-weight-600 color-heading'>
              Rows Per Page
            </Form.Label>
          </Form.Group>
        </Col>

        <Col className='my-1 mx-auto d-flex'>
          <Pagination className='mx-auto w-50 d-flex justify-content-around'>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
          </Pagination>
        </Col>
        <Col sm={2} className='my-1'>
          <Form.Group className='row mx-0 align-items-center justify-content-end'>
            <Form.Control className='col-3' type='text' />
            <Form.Label className='col-3'>
              <Button variant='link' className='p-0'>
                Go
              </Button>
            </Form.Label>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default ManageExisting;
