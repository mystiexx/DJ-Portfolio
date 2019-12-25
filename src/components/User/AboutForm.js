import React, { Component } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import Modal from 'react-modal'

export class AboutForm extends Component {
    render() {
        const {open, close } = this.props
        return (
            <div>
                    
                            <Modal isOpen={open} onRequestClose={close}>
                              
                                    <h4 className="text-center mb-3">About Me</h4>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control as="textarea" rows="10" />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <button className="book">Post</button>
                                        </div>
                                    </Form>
                               
                            </Modal>
            </div>
        );
    }
}

export default AboutForm;
