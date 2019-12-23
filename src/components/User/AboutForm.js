import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";

export class AboutForm extends Component {
    render() {
        return (
            <div className="dashboard">
                <Container fluid className="p-5">
                    <div style={{marginTop: 60}}>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card className="shadow-sm" border="light">
                                <Card.Body>
                                    <h4 className="text-center mb-3">About Me</h4>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control as="textarea" rows="10" />
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

export default AboutForm;
