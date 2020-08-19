import React from 'react';
import './manage-existing.styles.css';
import { Button, Modal, Form, Table, Col } from 'react-bootstrap';

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
                <th>Row</th>
                <th>records count</th>
                <th>saved name</th>
                <th>created date time</th>
                <th>last updated date time</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody className='small'>
              <tr>
                <td>1</td>
                <td className='text-green'>1234</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan='2'>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Form.Row className='w-100 align-items-center mx-0'>
            <Col sm={2} className='my-1'>
              <Button
                block
                className='py-3'
                variant='secondary'
                onClick={onHide}
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
                className='py-4'
                placeholder='Enter A Name to Save Results'
              />
            </Col>
            <Col sm={2} className='my-1'>
              <Button block className='py-3' variant='dark' type='submit'>
                Generate
              </Button>
            </Col>
          </Form.Row>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ManageExisting;
