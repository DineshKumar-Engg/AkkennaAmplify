import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import IconF from "../Assets/Image/NewFooter/IconF.svg";
import IconF from "../Assets/Image/NewFooter/IconF.svg";
import IconV from "../Assets/Image/NewFooter/IconV.svg";
import IconIn from "../Assets/Image/NewFooter/IconIn.svg";
import IconX from "../Assets/Image/NewFooter/IconX.svg";
import Akkenna from "../Assets/Image/NewFooter/akkenna.png";
import Phone from "../Assets/Image/NewFooter/Phone.png";
import Msg from "../Assets/Image/NewFooter/Msg.png";
import "../Style/NewFooter.css"


   
const NewFooter = () => {
    return(
        <section id="NewFooter">

    <Container fluid className="fluid-bg ">
      <Container className="Footer">
        <Row className="">
          <Col lg={4} className="">
            <Col className="mb-3 mt-5">
              <img src={Akkenna} alt="akkenna Logo" />
            </Col>
            <Col className="mb-1">
              <h5 className="text-white "> Akkenna Animation and Technologies Pvt Ltd </h5>
            </Col>
            <Col className="mb-4">
              <p className="foot-para">
                Start your day with the spirit of exercising and <br />you will
                get many very important benefits
              </p>
            </Col>
            <Col className="d-flex gap-3 mb-2">
              <img src={Phone} alt="" className="phone" />
              <p className="text-white ">+91 74185 55205</p>
            </Col>
            <Col className="d-flex gap-3 mb-4">
              <img src={Msg} alt="" className="phone" />
              <p className="text-white ">sales@akkenna.com</p>
            </Col>
            <Col className="d-flex mb-1  gap-3">
              <div className="Icon-Div">
                <img src={IconF} alt="FaceBook" className="Icons-Style" />
              </div>
              <div className="Icon-Div">
                <img src={IconV} alt="V" className="Icons-Style" />
              </div>
              <div className="Icon-Div Normal">
                <img src={IconX} alt="App" className="Icons-Style" />
              </div>
              <div className="Icon-Div">
                <img src={IconIn} alt="InApp" className="Icons-Style" />
              </div>
            </Col>
          </Col>
          <Col lg={3} className="mt-5">
            <Col>
              <h5 className="text-white text-heads">Address</h5>
            </Col>
            <Col className="mt-2">
              <h6 className="text-USA">USA-New Jersey</h6>{" "}
            </Col>
            <Col className="mt-2">
              <p className="foot-para">
                1040D Orchard Street, North <br /> Brunswick, New Jersey
                08902.
              </p>
            </Col>
            <Col className="mt-4">
              <h6 className="text-head">India-Coimbatore</h6>
            </Col>
            <Col className="mt-2">
              <p className="foot-para">
                No.37/1, First Floor, Rajeshwari Nager,
                <br /> Udayampalayam Main Road, <br />
                Nava India, Coimbatore-641028
              </p>
            </Col>
          </Col>
          <Col lg={2} className="">
            <Col className="mt-3">
              <h5 className="text-white mt-5 text-heads">Service</h5>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">UI/UX Design</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Web Development</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">App Development</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Digital Marketing</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Blockchain Development</p>
            </Col>
          </Col>
          <Col lg={2} className="">
            <Col className="mt-3">
              <h5 className="text-white mt-5 text-heads">
                Dedicated Developers
              </h5>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Hire Reactjs Developer</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Hire Angular Developer</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Hire NodeJs Developer</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Hire Flutter Developer</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">PHP Developer</p>
            </Col>
          </Col>
          <Col lg={1} className="">
            <Col className="mt-3">
              <h5 className="text-white mt-5 text-heads">Company</h5>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">About Us</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Careers</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Blogs</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Services</p>
            </Col>
            <Col className="mt-3">
              <p className="foot-para">Contact Us</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className="foot-bgc">
      <Container>
        <Row>
          <Col lg={4}>
            <h5 className="bt-footer mt-3">
              © 2024 Akkenna Animation & Technologies Pvt Ltd 
            </h5>
          </Col>
          <Col lg={4}>
            <h5 className="bt-footer mt-3">CIN : U72200TZ2022PTC039323</h5>
          </Col>
          <Col lg={4}>
            <h5 className="bt-footer m-3 text-decoration-underline">Privacy Policy | Terms of use</h5>
          </Col>
        </Row>
      </Container>
    </Container>
  </section>
        
    
    )
}
export default NewFooter