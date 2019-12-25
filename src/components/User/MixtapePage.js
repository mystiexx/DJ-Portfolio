import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Card, Row, Col} from 'react-bootstrap'
import { FaPlay } from 'react-icons/fa'
import image from '../../assets/mixtape.jpg'

export class MixtapePage extends Component {
    render() {
        return (
            <div className="dashboard">
                <Container fluid className="p-5">
                    <div style={{ marginTop: 5 }}>
                        <Card className="event-card shadow-sm mb-4" border="light">
                            <Card.Body>
                                <div className="mt-4 ml-2">
                                    <Row>
                                        <Col md={2}>
                                            <div className="d-flex justify-content-center">
                                                <img
                                                    src={image}
                                                    className="mixtape-img img-fluid"
                                                    alt="mixtape"
                                                />
                                            </div>
                                        </Col>

                                        <Col sm={4} md={2}>
                                        <h5 className="text-center mt-2">Best of December</h5>
                                        </Col>

                                        <Col sm={4} md={3}>
                                        <h5 className="text-center mt-2">01:30:00</h5>
                                        </Col>

                                        <Col sm={4} md={3}>
                                        <div className="d-flex justify-content-center">
                                                <button className="mt-1">Edit</button>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="d-flex justify-content-center">
                                                <button className="mt-1">Delete</button>
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

export default MixtapePage;
