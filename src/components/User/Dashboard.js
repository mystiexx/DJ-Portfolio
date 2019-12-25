import React, { Component } from "react";
import "./dashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EventForm from "./EventForm";
import AboutForm from "./AboutForm";
import MixtapeForm from "./MixtapeForm";

export class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            modalIsOpen: false
        }
    }

    handleOpen = () => {
        this.setState({ modalIsOpen: true})
    }

    handleClose =()=> {
        this.setState({ modalIsOpen: false})
    }
    render() {
        return (
            <div className="dashboard">
                <Container fluid className="p-5">
                    <div style={{marginTop: 150}}>
                    <Row>
                        <Col>
                            <Card className="dash-card shadow-sm" border="light">
                                <Card.Body>
                                    <div onClick={this.handleOpen}>About Me</div>
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
                    <AboutForm open={this.state.modalIsOpen} close={this.handleClose}/>
                </Container>
            </div>
        );
    }
}

export default Dashboard;
