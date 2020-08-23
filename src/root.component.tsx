import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";
import { TodoSubject, Priority } from "@dananb/eventmanager";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Root(props) {
  const [priority, setPriority] = useState<Priority>(Priority.LOW);
  const [description, setDescription] = useState<string>("");
  const [showToast, setShowToast] = useState(false);

  const submit = () => {
    TodoSubject.next({
      priority: priority,
      description: description,
    });

    setShowToast(true);
    reset();
  };

  const reset = () => {
    setPriority(Priority.LOW);
    setDescription("");
  };

  const SuccessToast = () => (
    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={3000}
      autohide
      style={{
        position: "absolute",
        bottom: 0,
        width: "20rem",
        right: "1rem",
        zIndex: 100,
        marginBottom: "1rem",
      }}
    >
      <Toast.Header style={{ backgroundColor: "#d4edda" }}>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Success</strong>
        <small>Just now</small>
      </Toast.Header>
      <Toast.Body>Added Todo</Toast.Body>
    </Toast>
  );

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
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
              >
                {Object.values(Priority).map((v) => (
                  <option>{v}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ marginRight: "1rem" }}
              variant="primary"
              onClick={() => submit()}
            >
              Add
            </Button>
            <Button variant="danger" onClick={() => reset()}>
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
      <SuccessToast />
    </Container>
  );
}
