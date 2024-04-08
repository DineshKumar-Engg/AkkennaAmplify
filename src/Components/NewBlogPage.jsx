import { Col, Container, Row } from 'react-bootstrap';
import cardEye from '../Assets/Image/NewHome/cardEye.svg';
import cardTime from '../Assets/Image/NewHome/cardTime.svg';
import Slider from "react-slick";
import '../Style/NewBlogPage.css';

const NewBlogPage = () =>{
    const BlogSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
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
    }

    return(
        
            <section id="NewBlogPage">
                <Container className='homeBlog'>
                    <Row className='homeBlogHead'>
                        <h1>Crafting AI Seekers with <br></br> Akkenna Narratives</h1>
                    </Row>
                    <Row className='justify-content-center mt-4'>
                        <Col lg={10}>
                            <div className="slider-container">
                                <Slider {...BlogSetting}>

                                    <div className="homeBlogCard">
                                        <div className="row">

                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5>Coronavirus global health emergency</h5>
                                            </div>
                                            <div className="col-lg-12">
                                                <h6>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...</h6>
                                            </div>
                                            <div className="col-lg-12 homeBlogCardTime">
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardTime} alt="" />
                                                    <p>
                                                        Dec 28, 2022
                                                    </p>
                                                </div>
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardEye} alt="" />
                                                    <p>
                                                        1,526 views
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="homeBlogCard">
                                        <div className="row">

                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5>Coronavirus global health emergency</h5>
                                            </div>
                                            <div className="col-lg-12">
                                                <h6>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...</h6>
                                            </div>
                                            <div className="col-lg-12 homeBlogCardTime">
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardTime} alt="" />
                                                    <p>
                                                        Dec 28, 2022
                                                    </p>
                                                </div>
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardEye} alt="" />
                                                    <p>
                                                        1,526 views
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="homeBlogCard">
                                        <div className="row">

                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5>Coronavirus global health emergency</h5>
                                            </div>
                                            <div className="col-lg-12">
                                                <h6>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...</h6>
                                            </div>
                                            <div className="col-lg-12 homeBlogCardTime">
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardTime} alt="" />
                                                    <p>
                                                        Dec 28, 2022
                                                    </p>
                                                </div>
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardEye} alt="" />
                                                    <p>
                                                        1,526 views
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="homeBlogCard">
                                        <div className="row">

                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5>Coronavirus global health emergency</h5>
                                            </div>
                                            <div className="col-lg-12">
                                                <h6>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...</h6>
                                            </div>
                                            <div className="col-lg-12 homeBlogCardTime">
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardTime} alt="" />
                                                    <p>
                                                        Dec 28, 2022
                                                    </p>
                                                </div>
                                                <div className='homeBlogCardTimeTxt'>
                                                    <img src={cardEye} alt="" />
                                                    <p>
                                                        1,526 views
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        
    )
}

export default NewBlogPage;