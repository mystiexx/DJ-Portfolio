import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import data from "./images";
import Swiper from "react-id-swiper";

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            data: data
        };
    }

    render() {
        const params = {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: ".swiper-pagination"
            }
        };
        const { data } = this.state;

        return (
            <div>
                <Container>
                    <h4 className="text-center mb-5 mt-5">Gallery</h4>
                    <h5 className="small text-center">Swipe left or right to view images</h5>
                    <Swiper {...params}>
                        {data.map((data, i) => {
                            return (
                                <div key={i}>
                                    <img className="img-slider" src={data.image} alt="First slide" />
                                </div>
                            );
                        })}
                    </Swiper>
                </Container>
            </div>
        );
    }
}

export default Gallery;
