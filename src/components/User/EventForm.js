import React, { Component } from 'react';
import { Container, Card, Form, Row, Col } from "react-bootstrap";

export class EventForm extends Component {
    render() {
        return (
            <div className="dashboard">
                 <Container fluid className="p-5">
                    <div style={{marginTop: 50}}>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card className="shadow-sm" border="light">
                                <Card.Body>
                                    <h4 className="text-center mb-3">Add New Event</h4>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date"/>
                                        </Form.Group>

                                        <Form.Group>
                                        <Form.Label>Theme</Form.Label>
                                            <Form.Control type="text"/>
                                        </Form.Group>

                                        <Form.Group>
                                        <Form.Label>Time</Form.Label>
                                            <Form.Control type="time"/>
                                        </Form.Group>

                                        <Form.Group>
                                        <Form.Label>Venue</Form.Label>
                                            <Form.Control type="text"/>
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <button className="book">Post</button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default EventForm;
