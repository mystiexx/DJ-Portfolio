import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import data from "./images";

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({ data: data });
    }
    render() {
        const { data } = this.state;

        return (
            <div>
                <Container>
                    <h4 className="text-center mb-5 mt-5">Gallery</h4>
                <Carousel>
                        {data.map((data, i) => {
                            return (
                                    
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={data.image}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                   
                                
                            );
                        })}
                         </Carousel>
                </Container>
            </div>
        );
    }
}

export default Gallery;
