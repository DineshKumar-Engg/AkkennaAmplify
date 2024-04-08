import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import Slider from "react-slick";
import Github from "../Assets/Image/NewHome/Github_icon.svg";
import python from "../Assets/Image/NewHome/Python_icon.svg";
import Cprogram from "../Assets/Image/NewHome/Cprgm_icon.svg";
import Aws from "../Assets/Image/NewHome/Aws_icon.svg";
import Docker from "../Assets/Image/NewHome/Docker_icon.svg";
import Java from "../Assets/Image/NewHome/Java_icon.svg";
import { Col, Container, Row } from "react-bootstrap";
import '../Style/NewTechSlider.css'


const TechSlide = () => {

    const techSetting = {
        centerMode: true,
        speed: 500,
        arrows: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                },
            },{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                },
            },{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                },
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <section id='sliderMobile' className="homeSliderMobile">
            <Container fluid>
                <Row className="homeSliderMobileRow">
                    <div className="homeSliderMobileCol">
                        <Slider {...techSetting}>
                            <div className="col-lg-2 techCard">
                                <div className="frontCard">
                                    {/* <img src={Hubspot} alt="Software-Development" /> */}
                                    <img src={Java} alt="Software-Development" />
                                </div>
                                <div className="techCard-title">
                                    <h6>Java</h6>
                                    <small>Versatile language for robust program</small>
                                </div>
                            </div>
                            <div className="col-lg-2 techCard">
                                <div className="frontCard">
                                    {/* <img src={Spotify} alt="UI-UX-Designing" /> */}
                                    <img src={python} alt="Software-Development" />
                                </div>
                                <div className="techCard-title">
                                    <h6>python</h6>
                                    <small>Efficient, readable, and versatile</small>
                                </div>
                            </div>
                            <div className="col-lg-2 techCard">
                                <div className="frontCard">
                                    {/* <img src={Slack} alt="Web-Development" /> */}
                                    <img src={Cprogram} alt="Software-Development" />
                                </div>
                                <div className="techCard-title">
                                    <h6>C </h6>
                                    <small>Efficient, low-level, consistent programming</small>
                                </div>
                            </div>
                            <div className="col-lg-2 techCard">
                                <div className="frontCard">
                                    {/* <img src={Hubspot} alt="App-Development" /> */}
                                    <img src={Aws} alt="Software-Development" />
                                </div>
                                <div className="techCard-title">
                                    <h6>AWS</h6>
                                    <small>Secure, scalable, and reliable cloud</small>
                                </div>
                            </div>
                            <div className="col-lg-2 techCard">
                                <div className="frontCard">
                                    <img src={Docker} alt="App-Development" />
                                </div>
                                <div className="techCard-title">
                                    <h6>Docker</h6>
                                    <small>Containerization for consistent and scalable</small>
                                </div>
                            </div>
                            <div className="col-lg-2 techCard">
                                <div className="frontCard">
                                    <img src={Github} alt="App-Development" />
                                </div>
                                <div className="techCard-title">
                                    <h6>GitHub</h6>
                                    <small>Collaborate seamlessly, manage code </small>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default TechSlide;