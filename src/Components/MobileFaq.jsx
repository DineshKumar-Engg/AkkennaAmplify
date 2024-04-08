import React, { useCallback, useEffect, useRef, useState } from 'react'
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import GreaterArrow from "../Assets/Image/NewHome/GreaterArrow.svg";
import '../Style/NewMobileFaq.css'

function FaqCanva({ show, item, titles, onHide }) {

    const handleOnHide = (e) => {
        if (e) {
            e.stopPropagation();
        }
        
        onHide();
    };
    {console.log(show)}
    {console.log(onHide)}
    return (
        <section className="homeFaqCanva">
            <Offcanvas
                id="homeFaqCanva"
                show={show}
               
                placement="bottom"
                onHide={handleOnHide}
            >
                <Offcanvas.Header closeButton>
                    
                </Offcanvas.Header>
                <Offcanvas.Body >
                    
                    <Container className="homeFaqCanvaText">
                        <Row>
                            <Col>
                                <h5>
                                    {titles}
                                  
                                </h5>
                            </Col>
                        </Row>
                        <Row className="homeFaqCanvaRow">
                            <Accordion>
                                {
                                    item?.map((data, index) => (
                                        
                                        <Accordion.Item eventKey={index.toString()}>
                                            <Accordion.Header>
                                            
                                            <div dangerouslySetInnerHTML={{__html:data?.question}}></div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <div dangerouslySetInnerHTML={{__html:data?.answer}}></div> 
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    ))
                                }
                            </Accordion>
                        </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    );
}


const MobileFaq = ({ items, title }) => {

    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
        // setShow(true)
    };
    return (
        <section
            className="homeFaqMobile"
            onClick={toggleShow}
        >
            <Container>
                <Row>
                    <div className="homeFaqMobileMain">
                        <div>
                            <h3>
                                {title}
                            </h3>
                        </div>
                        <div>
                            <img src={GreaterArrow} alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
            <FaqCanva show={show} item={items} titles={title} onHide={toggleShow} />
        </section>
    )
}

export default MobileFaq