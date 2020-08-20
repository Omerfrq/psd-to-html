import React from 'react';
import './manage-existing.styles.css';
import { Button, Form, Table, Col, Pagination } from 'react-bootstrap';
import TableRow from './table-row';

const ManageExisting = ({ onHide }) => {
  return (
    <Form className='p-3'>
      <h2 className='my-4 text-capitalize text-center font-weight-bold'>
        Manage Existing
      </h2>

      <Table bordered hover responsive>
        <thead className='bg-light text-black-50 text-uppercase small'>
          <tr>
            <th className='position-relative'>
              <span>row</span>
              <span className='pos-top d-flex flex-column'>
                <Button
                  variant='warning'
                  size='sm'
                  className='align-top p-0 bg-muted '
                >
                  <h6 className='mb-0 text-muted bg-light'>&times;</h6>
                </Button>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <small className='mb-0 text-muted bg-light'>▼</small>
                </Button>
              </span>
            </th>
            <th className='position-relative'>
              <span>records count</span>
              <span className='pos-top d-flex flex-column'>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <h6 className='mb-0 text-muted bg-light'>&times;</h6>
                </Button>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <small className='mb-0 text-muted bg-light'>▼</small>
                </Button>
              </span>
            </th>
            <th className='position-relative'>
              <span>saved name</span>
              <span className='pos-top d-flex flex-column'>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <h6 className='mb-0 text-muted bg-light'>&times;</h6>
                </Button>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <small className='mb-0 text-muted bg-light'>▼</small>
                </Button>
              </span>
            </th>
            <th className='position-relative'>
              <span>created date time</span>
              <span className='pos-top d-flex flex-column'>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <h6 className='mb-0 text-muted bg-light'>&times;</h6>
                </Button>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <small className='mb-0 text-muted bg-light'>▼</small>
                </Button>
              </span>
            </th>
            <th className='position-relative'>
              <span>last updated date time</span>
              <span className='pos-top d-flex flex-column'>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <h6 className='mb-0 text-muted bg-light'>&times;</h6>
                </Button>
                <Button variant='warning' size='sm' className='align-top p-0'>
                  <small className='mb-0 text-muted bg-light'>▼</small>
                </Button>
              </span>
            </th>
            <th>
              <span>actions</span>
            </th>
          </tr>
        </thead>
        <tbody className='small'>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
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
          <Pagination className='mx-auto'>
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
