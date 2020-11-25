import React from "react";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";

const LeftSide = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LeftSide;
