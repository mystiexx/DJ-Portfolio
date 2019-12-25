import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";

export class EventForm extends Component {
    render() {
        const {open, close} = this.props
        return (
            <div className="dashboard">
                <Container fluid className="p-5">
                    <div style={{ marginTop: 10 }}>
                        <Row>
                            <Col sm={4}></Col>
                            <Col>
                                <Card className="shadow-sm" border="light">
                                    <Card.Body>
                                        <h4 className="text-center mb-3">Add New Event</h4>

                                        <Form>
                                            <TextField
                                                id="standard-date-input"
                                                label="Date"
                                                fullWidth
                                                margin="normal"
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Theme"
                                                fullWidth
                                                margin="normal"
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Time"
                                                fullWidth
                                                margin="normal"
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Venue"
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

export default EventForm;
