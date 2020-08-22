import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Root(props) {
  return (
    <Container fluid>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5rem",
        }}
      >
        <Col xs="auto">
          <h1>({props.name})</h1>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What's left todo?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary">Add</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
