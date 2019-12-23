import React, { Component } from "react";
import "./dashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Container fluid className="p-5">
                    <div style={{marginTop: 150}}>
                    <Row>
                        <Col>
                            <Card className="dash-card shadow-sm" border="light">
                                <Card.Body>
                                    <a href="/add/about">About Me</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="dash-card shadow-sm" border="light">
                                <Card.Body>
                                    <a href="/add/event">Add New Event</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="dash-card shadow-sm" border="light">
                                <Card.Body>
                                    <a href="/add/mixtape">Add New Mixtape</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col>
                            <Card className="dash-card shadow-sm mt-5" border="light">
                                <Card.Body>
                                    <a href="/">Add to Gallery</a>
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

export default Dashboard;
