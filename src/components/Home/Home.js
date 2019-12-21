import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import image from '../../assets/dj.png'

export class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Row>
                        <Col>
                        <div className="jumbo-text">
                            <h2>One and only</h2>
                            <h1>DJ Name</h1>
                            <div className="button d-flex flex-row">
                                <a href="#about">
                                <button className="about-btn">About me</button></a>
                                <a href="#booking">
                                <button className="book ml-3">Book me</button></a>
                            </div>
                        </div>
                        
                        </Col>

                        <Col md={6}>
                        <img src={image} className="home-image img-fluid" alt="dj"/>
                        </Col>
                    </Row>
                </Jumbotron>
                
            </div>
        );
    }
}

export default Home;
