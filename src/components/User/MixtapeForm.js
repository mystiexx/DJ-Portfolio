import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";

export class MixtapeForm extends Component {
    render() {
        return (
            <div className="dashboard">
                <Container fluid className="p-5">
                    <div style={{ marginTop: 50 }}>
                        <Row>
                            <Col sm={4}></Col>
                            <Col>
                                <Card className="shadow-sm" border="light">
                                    <Card.Body>
                                        <h4 className="text-center mb-3">Add New Mixtape</h4>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Choose Image</Form.Label>
                                                <Form.Control type="file" />
                                            </Form.Group>

                                            <TextField
                                                id="standard-basic"
                                                label="Title"
                                                fullWidth
                                                margin="normal"
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Duration"
                                                fullWidth
                                                margin="normal"
                                            />

                                            <div className="d-flex justify-content-center mt-4">
                                                <button className="book">Post</button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default MixtapeForm;
