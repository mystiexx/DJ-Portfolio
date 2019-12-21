import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class About extends Component {
    render() {
        return (
            <div>
                <Container className="mt-4 mb-5 pb-5">
                    <Row>
                        <Col></Col>

                        <Col md={6}>
                            <h4 className="mt-5">About Me</h4>

                            <article className="text-justify">
                                Lorem ipsum dolor sit amet, nec id vel. Purus vel eu aenean nam
                                ante. Velit non, feugiat odio malesuada nullam, risus duis tempus,
                                sollicitudin morbi pharetra magna pellentesque vivamus. Id velit a
                                sed pede sed, sapien maecenas elementum in, a justo condimentum,
                                eget magna ligula. Faucibus ante ornare leo sapien. At nec
                                fermentum, qui praesent, etiam duis proin dictum, elit tristique
                                scelerisque, risus eget nec erat etiam. Pede cras, nonummy ipsum id
                                consequat in, pretium tincidunt est id tellus, congue eleifend,
                                omnis dapibus turpis amet ipsum. In nascetur vehicula unde aliquam
                                sed nunc, accumsan montes ut elit. Aliquam justo. Mauris mauris
                                urna, rutrum pellentesque sed amet pellentesque, pede amet dapibus
                                quam. Aliquam eget egestas cursus per, enim cras, bibendum nulla
                                ligula mollis consectetuer ut, tempus elit dolor ipsum non, enim
                                consequat venenatis ac.
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
