import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-md-5 p-0  border border-dark'>
        <h4 className='bg-dark p-2 text-center text-light'>Login Page</h4>
        <Form className='p-5'>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control
              className='border border-dark'
              type='email'
              placeholder='Username'
            />
          </Form.Group>

          <Form.Group className='mt-3' controlId='formBasicPassword'>
            <Form.Control
              className='border border-dark'
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'></Form.Group>
          <div className='d-flex justify-content-between'>
            <Button
              className='mt-2 bg-grey-light border-0 text-muted font-bold'
              type='submit'
            >
              RESET
            </Button>
            <Button
              className='mt-2 bg-yellow border-0 text-dark font-bold'
              type='submit'
              onClick={() => history.push('/data')}
            >
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
