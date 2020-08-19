import React from 'react';
import './manage-existing.styles.css';
import { Button, Modal, Form, Table, Col, Pagination } from 'react-bootstrap';
import TableRow from './table-row';

const tabletitle = [
  'Row',
  'records count',
  'saved name',
  'created date time',
  'last updated date time',
];

const ManageExisting = ({ show, onHide, onSubmit }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Form className='p-3' onSubmit={onSubmit}>
        <h2 className='my-4 text-capitalize text-center font-weight-bold'>
          Manage Existing
        </h2>

        <Modal.Body className='px-0 pb-0'>
          <Table bordered hover responsive>
            <thead className='bg-light text-black-50 text-uppercase small'>
              <tr>
                <th className='position-relative'>
                  <span>row</span>
                  <span className='pos-top d-flex flex-column'>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <h6 className='mb-0'>&times;</h6>
                    </Button>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <small className='mb-0'>▼</small>
                    </Button>
                  </span>
                </th>
                <th className='position-relative'>
                  <span>records count</span>
                  <span className='pos-top d-flex flex-column'>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <h6 className='mb-0'>&times;</h6>
                    </Button>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <small className='mb-0'>▼</small>
                    </Button>
                  </span>
                </th>
                <th className='position-relative'>
                  <span>saved name</span>
                  <span className='pos-top d-flex flex-column'>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <h6 className='mb-0'>&times;</h6>
                    </Button>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <small className='mb-0'>▼</small>
                    </Button>
                  </span>
                </th>
                <th className='position-relative'>
                  <span>created date time</span>
                  <span className='pos-top d-flex flex-column'>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <h6 className='mb-0'>&times;</h6>
                    </Button>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <small className='mb-0'>▼</small>
                    </Button>
                  </span>
                </th>
                <th className='position-relative'>
                  <span>last updated date time</span>
                  <span className='pos-top d-flex flex-column'>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <h6 className='mb-0'>&times;</h6>
                    </Button>
                    <Button
                      variant='warning'
                      size='sm'
                      className='align-top p-0'
                    >
                      <small className='mb-0'>▼</small>
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
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Form.Row className='w-100 align-items-center mx-0'>
            <Col sm={2} className='my-1'>
              <Form.Group className='row mx-0 align-items-center'>
                <Form.Control className='col-3' type='text' value='10' />
                <Form.Label className='col'>rows per page</Form.Label>
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
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ManageExisting;
