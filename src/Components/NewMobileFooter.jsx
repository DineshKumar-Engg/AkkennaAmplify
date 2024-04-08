import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Menu from '../Assets/Image/NewFooter/menu.svg'
import call from '../Assets/Image/NewFooter/call.svg'
import bot from '../Assets/Image/NewFooter/bot.svg'
import whatsapp from '../Assets/Image/NewFooter/whatsapp.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';


function MenuCanva({ show, handleClose }) {


    return (
        <section>
            <Offcanvas show={show} onHide={handleClose} placement='start'>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    );
}








const NewFooter = () => {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);



  return (
    <section className='newMobileFooter'>
        <Container fluid className='newMobileFooterCont'>
            <Row className='newMobileFooterRow'>
                <Col onClick={()=>{setShow(true)}}>
                    <img src={Menu} alt="" />
                </Col>
                <Col>
                <img src={call} alt="" />
                </Col>
                <Col>
                <img src={bot} alt="" />
                </Col>
                <Col>
                <img src={whatsapp} alt="" />
                </Col>
            </Row>
        </Container>
        <MenuCanva show={show} handleClose={handleClose} />
    </section>
  )
}

export default NewFooter
