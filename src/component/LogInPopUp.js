import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

function LogInPopUp(props) {
  let handleLogIn = (event) => {
    console.log("login success");
    alert("Login successfull");
  } 
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Log In Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
    </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" onSubmit = { () => handleLogIn }>Log In</Button>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
  
export default LogInPopUp;

