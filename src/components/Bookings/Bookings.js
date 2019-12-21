import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

export class Bookings extends Component {
    render() {
        return (
            <div>
                <Container className="mb-5 pb-5 pt-5">
                    <h4 className="text-center mb-5">Booking & Enquiries</h4>
                    <div className="booking-box">
                        <div>
                            <Row>
                                <Col></Col>
                                <Col md={7}>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-5">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="YOUR NAME"
                                                    />
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group className="mb-5">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="EMAIL ADDRESS"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-5">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="PHONE NUMBER"
                                                    />
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group className="mb-5">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="LOCATION"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-5">
                                            <Form.Control
                                                as="textarea"
                                                rows="5"
                                                placeholder="YOUR MESSAGE"
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <button className="book">Send Message</button>
                                        </div>
                                    </Form>
                                </Col>
                                <Col></Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Bookings;
