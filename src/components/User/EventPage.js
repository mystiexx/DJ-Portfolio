import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

export class EventPage extends Component {
    render() {
        return (
            <div className="dashboard">
                <Container fluid className="p-5">
                    <div style={{ marginTop: 10 }}>
                        <Card className="event-card shadow-sm mb-4" border="light">
                            <Card.Body>
                                <div className="mt-4 ml-2">
                                    <Row>
                                        <Col>
                                            <h3 className="text-center">25</h3>
                                            <p className="text-center">December</p>
                                        </Col>

                                        <Col>
                                            <h5 className="text-center mt-2">Dj New Breakout</h5>
                                        </Col>

                                        <Col>
                                            <h5 className="text-center mt-2">8:00pm</h5>
                                        </Col>

                                        <Col>
                                            <h5 className="text-center mt-2">Club Dips</h5>
                                        </Col>

                                        <Col>
                                            <div className="d-flex justify-content-center">
                                                <button className="mt-2">Edit</button>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="d-flex justify-content-center">
                                                <button className="mt-2">Delete</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        );
    }
}

export default EventPage;
