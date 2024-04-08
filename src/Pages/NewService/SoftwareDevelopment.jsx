import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Style/NewSoftwareDev.css";
import "../../Style/SoftwareDevelopmentMobile.css";
import CustomSoftware from "../../Assets/Image/NewService/Software/Contact-1.svg";
import MVPDevelopment from "../../Assets/Image/NewService/Software/Msg.svg";
import SaaSApplication from "../../Assets/Image/NewService/Software/Clk.svg";
import ProductEngineering from "../../Assets/Image/NewService/Software/Layer.svg";
import MobileApp from "../../Assets/Image/NewService/Software/Gold.svg";
import WebsiteDevelopment from "../../Assets/Image/NewService/Software/cup.svg";
import Contacts from "../../Assets/Image/NewService/Software/Contactss.svg";
import World from "../../Assets/Image/NewService/Software/world.svg";
import Slider from "react-slick";
import RR from "../../Assets/Image/NewService/Software/rr.svg";
import Festive from "../../Assets/Image/NewService/Software/festiv.svg";
import Win from "../../Assets/Image/NewService/Software/win.svg";
import Finance from "../../Assets/Image/NewService/Software/Finance.webp";
import Banking from "../../Assets/Image/NewService/Software/Banking.webp";
import Insurance from "../../Assets/Image/NewService/Software/Insurance.webp";
import Investment from "../../Assets/Image/NewService/Software/Investment.webp";
import Fintech from "../../Assets/Image/NewService/Software/Fintech.webp";
import Payment from "../../Assets/Image/NewService/Software/Payment.webp";
import Retail from "../../Assets/Image/NewService/Software/Retail.webp";
import Health from "../../Assets/Image/NewService/Software/Health.webp";
import Manufacturing from "../../Assets/Image/NewService/Software/Manufacturing.webp";
import Professional from "../../Assets/Image/NewService/Software/Professional.webp";
import Transport from "../../Assets/Image/NewService/Software/Transport.webp";
import Tele from "../../Assets/Image/NewService/Software/Tele.webp";
import Construction from "../../Assets/Image/NewService/Software/Construction.webp";
import Hospital from "../../Assets/Image/NewService/Software/Hospital.webp";
import NewCallToAction from "../../Components/NewCallToAction";
import NewContactForm from "../../Components/NewContactForm";
import corporate from "../../Assets/Image/NewService/Software/corporate.svg";
import GreaterArrow from "../../Assets/Image/NewService/Software/GreaterArrow.svg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import HeadimageRight from "../../Assets/Image/NewService/Software/softwareHeadImg.svg";
import LeftImageSecTwo from "../../Assets/Image/NewService/Software/softSec2leftImg.svg";
import Customer from "../../Assets/Image/NewService/Software/Customer.svg";
import Loyality from "../../Assets/Image/NewService/Software/loyality.svg";
import Holistic from "../../Assets/Image/NewService/Software/Holistic.png";
import Budget from "../../Assets/Image/NewService/Software/Budget.svg";
import Diverse from "../../Assets/Image/NewService/Software/Diverse.svg";
import Assistance from "../../Assets/Image/NewService/Software/Assistance.png";
import Accordion from "react-bootstrap/Accordion";
import EvloutionBlog from "../../Assets/Image/NewService/Software/EvloutionBlog.svg";
import TopDevpBlog from "../../Assets/Image/NewService/Software/TopDevpBlog.svg";
import WebDevBlog from "../../Assets/Image/NewService/Software/WebDevBlog.svg";
import NewFaq from "../../Components/NewFaq";
import NewBlogPage from "../../Components/NewBlogPage";
import MobileFaq from "../../Components/MobileFaq";
import MobileForm from "../../Components/MobileForm";


function SoftAboutCanva({ show, handleClose }) {
  return (
    <section className="homeAboutCanva">
      <Offcanvas
        id="SoftAboutCanva"
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="homeAboutCanvaText">
            <Row className="homeAboutImg">
              <img src={LeftImageSecTwo} alt="" />
            </Row>
            <Row>
              <Col lg={12}>
                <small>Akkenna</small>
              </Col>
              <Col lg={12}>
                <h5 className="DMSansBold fw-bold">
                  Enhance Your Business with Custom Software Solutions
                </h5>
              </Col>
              <Col lg={12}>
                <p className="DMSansRegular">
                  Akkenna Technologies, a leading software development company,
                  utilizes cutting-edge technology to provide innovative
                  software solutions that elevate your company. Our web, mobile,
                  and blockchain app development skills provide endurance and
                  scalability. Akkenna Technologies guarantees your IT-based
                  company solutions match changing needs and strengthen
                  connections.
                </p>
                <p className="DMSansRegular">
                  As one of the top custom software development companies, we
                  employ the
                  <a href="https://github.com/">latest development tools</a> ,
                  management strategies, and engineering practices. Our
                  reputation and track record in software development speak for
                  themselves, consistently satisfying our customers' needs and
                  expectations. Trust Akkenna Technologies to drive your
                  business forward with reliable and customized software
                  solutions.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <button>About Us</button>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}




const SoftwareDevelopment = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [state1, setState1] = useState("question-1");
  const handleChange1 = (value) => {
    setState1(value);
  };

  

  const settingssoft = {
    centerMode: true,
    speed: 500,
    arrows: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const array1 = [
    {
      question: `What software development services does Akkenna offer?`,
      answer:
        "In addition to product engineering services, mobile application development, web application development, and MVP development, Akkenna provides an extensive array of software development services.",
    },
    {
      question: "How can custom software benefit my company?",
      answer:
        "Custom software can benefit a business by delivering solutions that are tailored to its particular requirements and obstacles, thereby increasing market competitiveness, efficiency, and productivity.",
    },
    {
      question: "What is MVP development, and why is it important?",
      answer:
        "MVP (Minimum Viable Product) development entails the creation of a software version of a product that possesses the bare minimum of features in order to rapidly validate concepts and collect user feedback. It is crucial because it aids in minimizing product development expenses, accelerating time to market, and mitigating associated risks.",
    },
    {
      question: "How does Akkenna ensure the quality of its software development services?",
      answer:
        "In software development, Akkenna adheres to industry best practices and quality standards. We have a dedicated team of seasoned developers, stringent testing procedures, and a strong sense of responsibility for providing our clients with dependable, high-quality software solutions.",
    },
    {
      question:
        "What technologies does Akkenna specialize in for software development?",
      answer:
        "Blockchain, web3, machine learning, artificial intelligence, and other cutting-edge technologies for software development are among the many areas of expertise of Akkenna.",
    },
    {
      question:
        "How can I get started with software development services from Akkenna?",
      answer:
        "Contact us via our website or via email to initiate the process of acquiring software development services from Akkenna. Our correspondence will be dedicated to addressing the specific demands and goals of your project. We will collaborate with you to develop an exceptional solution that exceeds your needs and expectations.",
    },
    
  ]

  

  return (
    <main id="Soft">
      {/* Expert Partner section */}

      <section className="section1 Banner DesktopBanner">
        <Container fluid className="Banner">
          <Container>
            <Row>
              <Col lg={6}>
                <Container className="leftcontent">
                  <Col lg={11}>
                    <div className="ContentDiv">
                      <div className="Content">
                        <h4>
                          Innovative Software<br></br> Development Company
                        </h4>
                      </div>
                      <div className="subhead">
                        <h5>Your Expert Partner for Tailored Solutions</h5>
                      </div>
                      <div className="Content">
                        <p>
                          Akkenna is your partner in creating bespoke software
                          solutions. Drive<br></br> innovation, streamline
                          operations, and accelerate growth with us.
                        </p>
                      </div>
                      <div className="Content">
                        <button>Get Engaged</button>
                      </div>
                    </div>
                  </Col>
                </Container>
              </Col>
              <Col lg={6}>
                <div className="headimgright">
                  <img src={HeadimageRight} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section className="MobileBanner">
        <Container fluid className="bannerbg">
          <Container>
            <Row>
              <Col lg={6} className="bannercontent">
                <div className="headcontent">
                  <h2>
                    Your Expert Partner<br></br> for Tailored Solutions
                  </h2>
                </div>
                <div>
                  <p>
                    Akkenna is your partner in creating bespoke<br></br>{" "}
                    software solutions. Drive innovation, streamline<br></br>{" "}
                    operations, and accelerate growth with us
                  </p>
                </div>
              </Col>
              <Row>
                <Col lg={6}>
                  <div className="bannerbtn">
                    <button>Get Engaged</button>
                  </div>
                </Col>
               
              </Row>
            </Row>
          </Container>
        </Container>
      </section>

      {/* Decoding section */}

      <section className="DesktopSec2">
        <Container>
          <Row className="Decoding-Banner">
            <Col lg={6} className="bannerSec">
              <img src={LeftImageSecTwo} alt="" />
            </Col>
            <Col lg={6} className="mt-5 p-5 sec2contentRight">
              <div className="Decoding-Heading mb-2">
                <h5>Enhance Your Business with Custom Software Solutions</h5>
              </div>
              <div className="Decoding-Content d-flex flex-column gap-2">
                <p>
                  Akkenna Technologies, a leading software development company,
                  utilizes cutting-edge technology to provide innovative
                  software solutions that elevate your company. Our web, mobile,
                  and blockchain app development skills provide endurance and
                  scalability. Akkenna Technologies guarantees your IT-based
                  company solutions match changing needs and strengthen
                  connections.
                </p>
                <p>
                  As one of the top custom software development companies, we
                  employ the
                  <b><a href="https://github.com/" className="textclrsec2"> latest development tools</a></b> ,
                  management strategies, and engineering practices. Our
                  reputation and track record in software development speak for
                  themselves, consistently satisfying our customers' needs and
                  expectations. Trust Akkenna Technologies to drive your
                  business forward with reliable and customized software
                  solutions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="MobileSec2 homeAboutMobile"
        onClick={() => {
          setShow(true);
        }}
      >
        <Container fluid>
          <div className="homeAboutCardMobileRow">
            <div className="homeAboutMobileRowImg">
              <img src={corporate} alt="" />
            </div>
            <div>
              <p>About Us</p>
              <h6>
                Akkenna - Enhance Your Business with Custom Software Solutions
              </h6>
            </div>
            <div>
              <img src={GreaterArrow} alt="" />
            </div>
          </div>
        </Container>
      </section>

      {/* Development Solutions Section */}

      <section className="DesktopSec3">
        <Container>
          <Row className="d-flex flex-column text-center sec3Top">
            <Col
              lg={8}
              className="Solution-Heading justify-content-center align-items-center"
            >
              <h4>Uncover Our Bespoke Software Development Solutions</h4>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              lg={8}
              className="d-flex flex-column  text-center Solution-Heading"
            >
              <p>
                We specialize in full-cycle custom software product development
                services at Akkenna Technologies. Navigate each phase
                of the endeavor with ease. Our committed staff guarantees
                accuracy, ingenuity, and outstanding performance
                throughout the entire process, guaranteeing significant outcomes
                for your organization
              </p>
            </Col>
          </Row>
          <Row className="Solution-Row">
            <Col lg={3}>
              <div className="d-flex mt-4 gap-4 Solution-Content">
                <div>
                  <img src={CustomSoftware} alt="Description" />
                </div>
                <div>
                  <h5 className="mb-2">Custom Software <br></br>Development</h5>
                  <p className=" mb-3 nunitoMedium">
                    Custom software development is Akkenna's forte; the company
                    transforms distinct business requirements into inventive,
                    scalable, and efficient solutions.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex mt-4 gap-4 Solution-Content">
                <div>
                  <img src={MVPDevelopment} alt="Description" />
                </div>
                <div>
                  <h5 className="mb-2">MVP<br></br> Development</h5>
                  <p className=" mb-3 nunitoMedium">
                    Akkenna expedites your success through MVP development,
                    efficiently and effectively transitioning your concepts into
                    market-ready products.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex mt-4 gap-4 Solution-Content">
                <div>
                  <img src={SaaSApplication} alt="Description" />
                </div>
                <div>
                  <h5 className="mb-2">SaaS Application<br></br> Development</h5>
                  <p className=" mb-3 nunitoMedium">
                    Akkenna excels in SaaS application development, tailoring
                    solutions to enhance efficiency and propel your business
                    forward.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex mt-4 gap-4 Solution-Content">
                <div>
                  <img src={ProductEngineering} alt="Description" />
                </div>
                <div>
                  <h5 className="mb-2">Product Engineering <br></br>Services</h5>
                  <p className=" mb-3 nunitoMedium">
                    Akkenna provides product engineering services, building
                    innovative solutions that benefit your company. Offer
                    stable, interactive, and high-performance products to boost
                    sales.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex mt-4 gap-4 Solution-Content">
                <div>
                  <img src={MobileApp} alt="Description" />
                </div>
                <div>
                  <h5 className="mb-2">Mobile App<br></br> Development</h5>
                  <p className=" mb-3 nunitoMedium">
                    Akkenna specializes in <a href="https://www.akkenna.com/app-development-company-coimbatore">
                      mobile application development
                    </a>
                    , providing applications that are scalable, secure, and
                    high-performing, allowing enterprises to achieve
                    transformational agility.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex mt-4 gap-4 Solution-Content">
                <div>
                  <img src={WebsiteDevelopment} alt="Description" />
                </div>
                <div>
                  <h5 className="mb-2">Website <br></br>Development</h5>
                  <p className=" mb-3 nunitoMedium">
                    Akkenna provides specialized{" "}
                    <a href="https://www.akkenna.com/website-development-company-coimbatore">
                      website development services
                    </a>
                    . A powerful, engaging, and efficient website can help you
                    increase sales and build customer <br></br>loyalty.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section3 mobile */}
      <section className="MobileSec3">
        <Container fluid className="homeserviceCont">
          <Row className="headRow">
            <h3 className="heading">
              Uncover Our Bespoke Software Development Solutions
            </h3>
          </Row>
          <Row className="homeServiceRow">
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={CustomSoftware} alt="" />
                  <h5>
                    Custom Software<br></br> Development
                  </h5>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={MVPDevelopment} alt="" />
                  <h5>
                    MVP<br></br> Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain d-flex">
                <Col>
                  <img src={SaaSApplication} alt="" />
                  <h5>
                    SaaS Application<br></br> Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={ProductEngineering} alt="" />
                  <h5>
                    Product <br></br>Engineering Services
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={MobileApp} alt="" />
                  <h5>
                    Mobile App<br></br> Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={WebsiteDevelopment} alt="" />
                  <h5>
                    Website<br></br> Development
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CallToAction Section */}
      <section className="DesktopCTA">
        <NewCallToAction
          header="Need Help with Your Software Development Journey?"
          buttonText="Get Started"
        />
      </section>



      {/* Exemplary Partner section */}

      <section className="container-fluid mt-5 mb-5 process-section DesktopPartnerSec">
        <div className="container">
          <div className="row text-center d-flex justify-content-center align-items-center">
            <div className="col-md-10 mb-2">
              <div className="process-title text-center">
                <p>Why We're Your Exemplary Partner</p>
              </div>
            </div>
            <div className="col-md-10 process-description nunitoRegular mb-3">
              <div className="">
                <p>
                  Begin your generative AI journey with a comprehensive
                  consultation from a <br />
                  leading generative AI development company.
                </p>
              </div>
            </div>
          </div>
          <div className="row experience-details d-flex justify-content-center align-items-center mb-3">
            <div className="col-lg-11 processCard">
              <Slider {...settingssoft} className="row RowsDIv">
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={Contacts} alt="" />
                    <h5>Elite Proficiency</h5>
                    <p>
                      Our software development skills and knowledge have been
                      polished throughout time, guaranteeing that we provide
                      market-leading solutions
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={World} alt="" />
                    <h5>Tailored Innovations</h5>
                    <p>
                      For your{" "}
                      <a href="https://www.akkenna.com/">
                        software development project
                      </a>
                      , Akkenna offers individualized solutions that are
                      constructed to fulfill the exact needs that you have
                      specified.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={Customer} alt="" />
                    <h5>Customer Focused</h5>
                    <p>
                      Maintaining a focus on the requirements and contentment of
                      the customer throughout the whole of the software
                      development process.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={Loyality} alt="" />
                    <h5>Exceptional Loyalty</h5>
                    <p>
                      Establishing long-term connections and establishing trust
                      with our customers while demonstrating an unrelenting
                      dedication to them.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={Holistic} alt="" />
                    <h5>Holistic Development</h5>
                    <p>
                      We take a comprehensive approach to the creation of our
                      software, including all areas from the idea stage to the
                      deployment phase.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={Budget} alt="" />
                    <h5>Budget-Conscious</h5>
                    <p>
                      While keeping in mind the importance of financial
                      concerns, and providing cost-effective solutions without
                      sacrificing quality.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={Diverse} alt="" />
                    <h5>Diverse Talent</h5>
                    <p>
                      To provide complete solutions for every project, a diverse
                      staff that knows a variety of fields is required.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 centered-div">
                  <div className="content">
                    <img src={Assistance} alt="" />
                    <h5>Continued Assistance</h5>
                    <p>
                      Support and direction continue even after the project has
                      been finished, assuring continued success and satisfaction
                      over the long term.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>


      <section className="MobileKeyService mt-5">
        <Container fluid className="homeserviceCont">
          <Row>
            <h3 className="headtext">Why We're Your<br></br> Exemplary Partner</h3>
          </Row>
          <Row className="homeServiceRow">
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Contacts} alt="" />
                </Col>
                <Col>
                  <h5>
                  Elite Proficiency
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={World} alt="" />
                </Col>
                <Col>
                  <h5>
                  Tailored Innovations
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Customer} alt="" />
                </Col>
                <Col>
                  <h5>
                  Customer Focused
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Loyality} alt="" />
                </Col>
                <Col>
                  <h5>
                  Exceptional Loyalty
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Holistic} alt="" />
                </Col>
                <Col>
                  <h5>
                  Holistic Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Budget} alt="" />
                </Col>
                <Col>
                  <h5>
                  Budget-Conscious
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Diverse} alt="" />
                </Col>
                <Col>
                  <h5>
                  Diverse Talent
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Assistance} alt="" />
                </Col>
                <Col>
                  <h5>
                  Continued Assistance
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  section blackbackground */}
      <section className="DevelopMvp">
        <Container fluid className="mainbox">
          <Row>
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex align-items-center mb-5">
                    <div
                      className={`nav `}
                      onClick={() => {
                        handleChange1("question-1");
                      }}
                    >
                      <div className="DevelopMvpRadioDiv">
                        <div
                          className={`radiobox ${
                            state1 === "question-1" && "active"
                          }`}
                        >
                          <h5>1</h5>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="radio1"
                            className="custom-radio"
                            name="questionGroup"
                            checked={state1 === "question-1"}
                          />
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        <label for="radio1" className="fw-bold">
                          How Can Custom Software Benefit Your Company?
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex align-items-center mb-5">
                    <div
                      className={`nav `}
                      onClick={() => {
                        handleChange1("question-2");
                      }}
                    >
                      <div className="DevelopMvpRadioDiv">
                        <div
                          className={`radiobox ${
                            state1 === "question-2" && "active"
                          }`}
                        >
                          <h5>2</h5>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="custom-radio"
                            id="radio2"
                            name="questionGroup"
                            checked={state1 === "question-2"}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label for="radio2" className="fw-bold">
                          Important Aspects of Custom Software Development{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-5">
                    <div
                      className={`nav `}
                      onClick={() => {
                        handleChange1("question-3");
                      }}
                    >
                      <div className="DevelopMvpRadioDiv">
                        <div
                          className={`radiobox ${
                            state1 === "question-3" && "active"
                          }`}
                        >
                          <h5>3</h5>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="custom-radio"
                            id="radio3"
                            name="questionGroup"
                            checked={state1 === "question-3"}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label for="radio3" className="fw-bold">
                          Guidelines for Crafting a Custom Software Development
                          Plan{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-5">
                    <div
                      className={`nav `}
                      onClick={() => {
                        handleChange1("question-4");
                      }}
                    >
                      <div className="DevelopMvpRadioDiv">
                        <div
                          className={`radiobox ${
                            state1 === "question-4" && "active"
                          }`}
                        >
                          <h5>4</h5>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="custom-radio"
                            id="radio4"
                            name="questionGroup"
                            checked={state1 === "question-4"}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label for="radio4" className="fw-bold">
                          Resources for Building Custom Software Solutions{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-5">
                    <div
                      className={`nav `}
                      onClick={() => {
                        handleChange1("question-5");
                      }}
                    >
                      <div className="DevelopMvpRadioDiv lastradio">
                        <div
                          className={`radiobox ${
                            state1 === "question-5" && "active"
                          }`}
                        >
                          <h5>5</h5>
                        </div>
                        <div>
                          <input
                            type="radio"
                            className="custom-radio"
                            id="radio5"
                            name="questionGroup"
                            checked={state1 === "question-5"}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label for="radio5" className="fw-bold">
                          Development Process from Custom Software to
                          Full-Fledged Product{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="d-flex flex-column">
              <Row className="DevelopScroll">
                {state1 === "question-1" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    How Can Custom Software Benefit Your Company?
                    </h4>
                    <p className="mb-3 paracontent">
                    •<b>Tailored Solutions:</b> Engaging with a custom software development company enables businesses to create solutions specifically tailored to their unique needs and objectives.
                    </p>
                    <p className="mb-3 paracontent">
                    •<b>Enhanced Efficiency:</b> Custom software development services focus on optimizing processes and workflows, leading to increased efficiency and productivity within the organization.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Cost-effectiveness: </b> While the initial investment in custom software may be higher, long-term savings are achieved through improved operational efficiency and reduced reliance on off-the-shelf solutions.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Scalability:</b>  Custom software solutions can be easily scaled and adapted to accommodate growth and changing business requirements, providing flexibility and agility in a competitive market.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Competitive Advantage:</b> Partnering with the best software development companies ensures that businesses can differentiate themselves from competitors with generic off-the-shelf solutions, offering unique features and capabilities tailored to their target audience.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Greater Control and Ownership:</b> Custom software development grants businesses full control and ownership over their software, allowing for continuous optimization and customization to meet evolving needs.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Integration Capabilities:</b>  Custom software seamlessly integrates with existing systems and third-party applications, facilitating smooth data exchange and communication across different platforms.
                    </p>
                    <p className="mb-3 paracontent">
                    • <b>Expertise and Support:</b> Utilizing software development services from reputable companies provides access to a team of experienced professionals who offer expertise and guidance throughout the development process, ensuring successful outcomes and long-term support.
                    </p>
                    <p className="mb-3 paracontent">
                    • <b>Enhanced Security:</b> Custom software development prioritizes robust security measures tailored to the specific needs of the business, reducing the risk of data breaches and ensuring compliance with industry regulations.
                    </p>
                    <p className="mb-3 paracontent">
                    • <b>Customer Satisfaction:</b> Custom software solutions are designed with the end-user in mind, resulting in a better user experience and higher levels of customer satisfaction, ultimately leading to increased loyalty and retention.
                    </p>
                  </div>
                )}
                {state1 === "question-2" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    Important Aspects of Custom Software Development

                    </h4>
                    <p className="mb-3 paracontent">
                    • <b>Requirements Gathering:</b> Collaborate closely with the custom software development company to clearly define project objectives, user needs, and functional requirements.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Planning and Strategy:</b> Develop a comprehensive project plan outlining timelines, milestones, resources, and risk management strategies in coordination with the software development service provider.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Design and Prototyping:</b>  Work closely with designers and developers to create wireframes, mockups, and prototypes that align with the project's goals and user expectations.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Agile Methodology: </b> Embrace an agile approach to custom software development, allowing for iterative development, frequent feedback loops, and adaptability to changing requirements.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Quality Assurance:</b> Implement rigorous testing processes throughout the development lifecycle to ensure the reliability, performance, and security of the custom software solution.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Scalability and Flexibility:</b>  Design the custom software solution with scalability in mind to accommodate future growth and evolving business needs, ensuring long-term viability.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Integration Capabilities:</b> Ensure seamless integration with existing systems, databases, and third-party applications to facilitate data exchange and interoperability.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>User Experience (UX) Design:</b> Prioritize user-centric design principles to create intuitive, engaging, and accessible interfaces that enhance user satisfaction and adoption.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Ongoing Support and Maintenance:</b> Partner with a software development company that offers comprehensive support and maintenance services to address issues, provide updates, and optimize performance post-launch.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Communication and Collaboration: </b> Foster open communication and collaboration between stakeholders, developers, and project teams to ensure alignment, transparency, and successful project outcomes
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Documentation and Training:</b> Provide thorough documentation and training materials to facilitate user onboarding, troubleshooting, and knowledge transfer, ensuring a smooth transition to the new custom software solution.
                    </p>
                    
                  </div>
                )}
                {state1 === "question-3" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    Guidelines for Crafting a Custom Software Development Plan
                    </h4>
                    <p className="mb-3 paracontent">
                      • <b>Define Objectives:</b> Clearly outline the goals and objectives of the custom software development project in collaboration with the software development company to ensure alignment with business needs.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Conduct Requirements Analysis:</b> Conduct a thorough analysis of user needs, technical requirements, and functional specifications to inform the development plan and project scope.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Establish Timeline and Milestones:</b> Develop a realistic timeline with clearly defined milestones and deliverables in coordination with the custom software development service provider to ensure project progress and accountability.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Allocate Resources: </b> Identify and allocate the necessary resources, including budget, personnel, and technology infrastructure, to support the custom software development project effectively.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Select Development Methodology:</b> Choose an appropriate development methodology, such as Agile, Waterfall, or Hybrid, based on project requirements, timeline, and team dynamics, in consultation with the software development company.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Prioritize Features:</b> Prioritize features and functionalities based on user needs, business value, and technical feasibility to ensure efficient use of resources and timely delivery of key components.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Plan for Testing and Quality Assurance:</b> Develop a comprehensive testing plan that includes unit testing, integration testing, and user acceptance testing to ensure the quality, reliability, and performance of the custom software solution.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Consider Scalability and Flexibility:</b> Design the custom software solution with scalability and flexibility in mind to accommodate future growth, changes in user requirements, and emerging technologies.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Mitigate Risks:</b> Identify potential risks and develop mitigation strategies to address issues related to technology dependencies, resource constraints, scope changes, and external factors that may impact project success.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Communicate and Collaborate:</b> Foster open communication and collaboration between stakeholders, project teams, and the software development company to ensure transparency, alignment, and timely resolution of issues.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Document and Review:</b> Document key decisions, project requirements, and development progress throughout the custom software development lifecycle and conduct regular reviews to evaluate project status and make informed adjustments as needed.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Plan for Deployment and Maintenance:</b>  Develop a plan for deployment, training, and ongoing maintenance of the custom software solution, including user support, software updates, and performance monitoring, to ensure long-term success and satisfaction.
                    </p>
                  </div>
                )}
                {state1 === "question-4" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    Resources for Building Custom Software Solutions
                    </h4>
                    <p className="mb-3 paracontent">
                      • <b>Identify Competent Providers:</b> Research and identify reputable software development companies with expertise in custom software solutions.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Evaluate Expertise:</b> Assess the technical skills, industry experience, and track record of custom software development companies to ensure they can meet your project requirements.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Portfolio Review:</b>  Review the portfolio of potential software development service providers to gauge the quality and diversity of their past projects.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Client Testimonials:</b> Seek client testimonials and case studies to gain insights into the satisfaction levels and success stories of previous clients who have worked with custom software development companies.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Industry Recognition:</b>  Look for custom software development companies that have received industry awards, certifications, or recognition for their excellence in delivering innovative solutions.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Collaboration Process:</b>  Evaluate the communication channels, project management methodologies, and collaboration tools used by custom software development companies to ensure smooth and effective collaboration.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Scalability and Flexibility:</b> Choose a software development company that can accommodate the scalability and flexibility needs of your project, allowing for future expansion and adjustments as needed.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Budget Considerations:</b> Discuss pricing models, cost estimates, and payment schedules with custom software development companies to ensure alignment with your budget constraints and financial objectives.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Support and Maintenance:</b>  Inquire about post-launch support and maintenance services offered by custom software development companies to address any issues, provide updates, and ensure ongoing optimization of the software solution.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Legal Considerations:</b> Review contracts, agreements, and intellectual property rights with custom software development companies to ensure clarity on ownership, confidentiality, and liability issues.
                    </p>
                    
                  </div>
                )}
                {state1 === "question-5" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    Development Process from Custom Software to Full-Fledged Product
                    </h4>
                    <p className="mb-3 paracontent">
                      <b>Requirement Analysis:</b><br></br> • Review contracts, agreements, and intellectual property rights with custom software development companies to ensure clarity on ownership, confidentiality, and liability issues.
                    </p>
                    <p className="mb-3 paracontent">• Conduct thorough market research to identify trends, competition, and target audience preferences. </p>
                    <p className="mb-3 paracontent">• Gather feedback from stakeholders and end-users to refine the project scope and align expectations. </p>
                    <h4>Planning and Design:</h4>
                    <p className="mb-3 paracontent">
                      • Develop a comprehensive project plan outlining timelines, milestones, resources, and risk management strategies.
                    </p>
                    <p className="mb-3 paracontent">
                      • Work closely with designers and developers to create wireframes, mockups, and prototypes that reflect the desired functionality and user experience.
                    </p>
                    <p className="mb-3 paracontent">
                      • Define the technology stack, architecture, and infrastructure requirements necessary for the custom software solution.

                    </p>
                    <h4>Development:</h4>
                    <p className="mb-3 paracontent">
                      • Utilize agile development methodologies to facilitate iterative development, continuous integration, and frequent feedback loops.

                    </p>
                    <p className="mb-3 paracontent">
                      • Collaborate with cross-functional teams to implement features, functionalities, and integrations according to the project specifications.

                    </p>
                    <p className="mb-3 paracontent">
                    • Ensure adherence to coding standards, best practices, and quality assurance processes throughout the development lifecycle.
                    </p>
                    <h4>Testing and Quality Assurance:</h4>
                    <p className="mb-3 paracontent">
                      • Conduct comprehensive testing to identify and address bugs, errors, and performance issues in the custom software solution.

                    </p>
                    <p className="mb-3 paracontent">
                      • Perform functional testing, integration testing, user acceptance testing, and security testing to validate the reliability, scalability, and security of the product.

                    </p>
                    <p className="mb-3 paracontent">
                    • Engage stakeholders and end-users in beta testing to gather feedback and make necessary refinements before the product launch.
                    </p>
                    <h4>Deployment and Launch:</h4>
                    <p className="mb-3 paracontent">
                      • Prepare the custom software solution for deployment by configuring servers, databases, and environments as per the production requirements.

                    </p>
                    <p className="mb-3 paracontent">
                      • Coordinate with stakeholders to plan and execute the product launch, including marketing campaigns, communication strategies, and user training sessions.

                    </p>
                    <p className="mb-3 paracontent">
                    • Monitor the deployment process closely to ensure a smooth transition and minimize downtime or disruptions for end-users.

                    </p>
                    <h4>Post-launch Support and Maintenance:</h4>
                    <p className="mb-3 paracontent">
                      • Provide ongoing support and maintenance services to address issues, bugs, and feature requests reported by users.

                    </p>
                    <p className="mb-3 paracontent">
                      • Monitor system performance, security vulnerabilities, and user feedback to identify areas for improvement and optimization.

                    </p>
                    <p className="mb-3 paracontent">
                    • Collaborate with the software development company to plan and implement future updates, enhancements, and expansions based on evolving business needs and market trends. 

                    </p>
                  </div>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="GuideTopic">
        <Container className="homeProduct">
          <Row>
            <Col lg={10}>
              <Row>
                <Col lg={6}>
                  <Row className="homeProductMain">
                    <Col lg={12}>
                      <h1 className="headcont">
                        Guide topic
                      </h1>
                    </Col>

                    <Col lg={7} className="mt-2 mb-4">
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                          How Can Custom Software Benefit Your Company?
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                    •<b>Tailored Solutions:</b> Engaging with a custom software development company enables businesses to create solutions specifically tailored to their unique needs and objectives.
                    </p>
                    <p className="mb-3 paracontent">
                    •<b>Enhanced Efficiency:</b> Custom software development services focus on optimizing processes and workflows, leading to increased efficiency and productivity within the organization.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Cost-effectiveness: </b> While the initial investment in custom software may be higher, long-term savings are achieved through improved operational efficiency and reduced reliance on off-the-shelf solutions.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Scalability:</b>  Custom software solutions can be easily scaled and adapted to accommodate growth and changing business requirements, providing flexibility and agility in a competitive market.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Competitive Advantage:</b> Partnering with the best software development companies ensures that businesses can differentiate themselves from competitors with generic off-the-shelf solutions, offering unique features and capabilities tailored to their target audience.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Greater Control and Ownership:</b> Custom software development grants businesses full control and ownership over their software, allowing for continuous optimization and customization to meet evolving needs.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Integration Capabilities:</b>  Custom software seamlessly integrates with existing systems and third-party applications, facilitating smooth data exchange and communication across different platforms.
                    </p>
                    <p className="mb-3 paracontent">
                    • <b>Expertise and Support:</b> Utilizing software development services from reputable companies provides access to a team of experienced professionals who offer expertise and guidance throughout the development process, ensuring successful outcomes and long-term support.
                    </p>
                    <p className="mb-3 paracontent">
                    • <b>Enhanced Security:</b> Custom software development prioritizes robust security measures tailored to the specific needs of the business, reducing the risk of data breaches and ensuring compliance with industry regulations.
                    </p>
                    <p className="mb-3 paracontent">
                    • <b>Customer Satisfaction:</b> Custom software solutions are designed with the end-user in mind, resulting in a better user experience and higher levels of customer satisfaction, ultimately leading to increased loyalty and retention.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                          Important Aspects of Custom Software Development
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                    • <b>Requirements Gathering:</b> Collaborate closely with the custom software development company to clearly define project objectives, user needs, and functional requirements.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Planning and Strategy:</b> Develop a comprehensive project plan outlining timelines, milestones, resources, and risk management strategies in coordination with the software development service provider.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Design and Prototyping:</b>  Work closely with designers and developers to create wireframes, mockups, and prototypes that align with the project's goals and user expectations.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Agile Methodology: </b> Embrace an agile approach to custom software development, allowing for iterative development, frequent feedback loops, and adaptability to changing requirements.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Quality Assurance:</b> Implement rigorous testing processes throughout the development lifecycle to ensure the reliability, performance, and security of the custom software solution.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Scalability and Flexibility:</b>  Design the custom software solution with scalability in mind to accommodate future growth and evolving business needs, ensuring long-term viability.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Integration Capabilities:</b> Ensure seamless integration with existing systems, databases, and third-party applications to facilitate data exchange and interoperability.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>User Experience (UX) Design:</b> Prioritize user-centric design principles to create intuitive, engaging, and accessible interfaces that enhance user satisfaction and adoption.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Ongoing Support and Maintenance:</b> Partner with a software development company that offers comprehensive support and maintenance services to address issues, provide updates, and optimize performance post-launch.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Communication and Collaboration: </b> Foster open communication and collaboration between stakeholders, developers, and project teams to ensure alignment, transparency, and successful project outcomes
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Documentation and Training:</b> Provide thorough documentation and training materials to facilitate user onboarding, troubleshooting, and knowledge transfer, ensuring a smooth transition to the new custom software solution.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                          Guidelines for Crafting a Custom Software Development Plan
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                      • <b>Define Objectives:</b> Clearly outline the goals and objectives of the custom software development project in collaboration with the software development company to ensure alignment with business needs.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Conduct Requirements Analysis:</b> Conduct a thorough analysis of user needs, technical requirements, and functional specifications to inform the development plan and project scope.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Establish Timeline and Milestones:</b> Develop a realistic timeline with clearly defined milestones and deliverables in coordination with the custom software development service provider to ensure project progress and accountability.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Allocate Resources: </b> Identify and allocate the necessary resources, including budget, personnel, and technology infrastructure, to support the custom software development project effectively.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Select Development Methodology:</b> Choose an appropriate development methodology, such as Agile, Waterfall, or Hybrid, based on project requirements, timeline, and team dynamics, in consultation with the software development company.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Prioritize Features:</b> Prioritize features and functionalities based on user needs, business value, and technical feasibility to ensure efficient use of resources and timely delivery of key components.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Plan for Testing and Quality Assurance:</b> Develop a comprehensive testing plan that includes unit testing, integration testing, and user acceptance testing to ensure the quality, reliability, and performance of the custom software solution.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Consider Scalability and Flexibility:</b> Design the custom software solution with scalability and flexibility in mind to accommodate future growth, changes in user requirements, and emerging technologies.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Mitigate Risks:</b> Identify potential risks and develop mitigation strategies to address issues related to technology dependencies, resource constraints, scope changes, and external factors that may impact project success.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Communicate and Collaborate:</b> Foster open communication and collaboration between stakeholders, project teams, and the software development company to ensure transparency, alignment, and timely resolution of issues.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Document and Review:</b> Document key decisions, project requirements, and development progress throughout the custom software development lifecycle and conduct regular reviews to evaluate project status and make informed adjustments as needed.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Plan for Deployment and Maintenance:</b>  Develop a plan for deployment, training, and ongoing maintenance of the custom software solution, including user support, software updates, and performance monitoring, to ensure long-term success and satisfaction.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                          Resources for Building Custom Software Solutions
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                      • <b>Identify Competent Providers:</b> Research and identify reputable software development companies with expertise in custom software solutions.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Evaluate Expertise:</b> Assess the technical skills, industry experience, and track record of custom software development companies to ensure they can meet your project requirements.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Portfolio Review:</b>  Review the portfolio of potential software development service providers to gauge the quality and diversity of their past projects.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Client Testimonials:</b> Seek client testimonials and case studies to gain insights into the satisfaction levels and success stories of previous clients who have worked with custom software development companies.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Industry Recognition:</b>  Look for custom software development companies that have received industry awards, certifications, or recognition for their excellence in delivering innovative solutions.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Collaboration Process:</b>  Evaluate the communication channels, project management methodologies, and collaboration tools used by custom software development companies to ensure smooth and effective collaboration.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Scalability and Flexibility:</b> Choose a software development company that can accommodate the scalability and flexibility needs of your project, allowing for future expansion and adjustments as needed.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Budget Considerations:</b> Discuss pricing models, cost estimates, and payment schedules with custom software development companies to ensure alignment with your budget constraints and financial objectives.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Support and Maintenance:</b>  Inquire about post-launch support and maintenance services offered by custom software development companies to address any issues, provide updates, and ensure ongoing optimization of the software solution.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Legal Considerations:</b> Review contracts, agreements, and intellectual property rights with custom software development companies to ensure clarity on ownership, confidentiality, and liability issues.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                          Development Process from Custom Software to Full-Fledged Product
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                      <b>Requirement Analysis:</b><br></br> • Review contracts, agreements, and intellectual property rights with custom software development companies to ensure clarity on ownership, confidentiality, and liability issues.
                    </p>
                    <p className="mb-3 paracontent">• Conduct thorough market research to identify trends, competition, and target audience preferences. </p>
                    <p className="mb-3 paracontent">• Gather feedback from stakeholders and end-users to refine the project scope and align expectations. </p>
                    <h4>Planning and Design:</h4>
                    <p className="mb-3 paracontent">
                      • Develop a comprehensive project plan outlining timelines, milestones, resources, and risk management strategies.
                    </p>
                    <p className="mb-3 paracontent">
                      • Work closely with designers and developers to create wireframes, mockups, and prototypes that reflect the desired functionality and user experience.
                    </p>
                    <p className="mb-3 paracontent">
                      • Define the technology stack, architecture, and infrastructure requirements necessary for the custom software solution.

                    </p>
                    <h4>Development:</h4>
                    <p className="mb-3 paracontent">
                      • Utilize agile development methodologies to facilitate iterative development, continuous integration, and frequent feedback loops.

                    </p>
                    <p className="mb-3 paracontent">
                      • Collaborate with cross-functional teams to implement features, functionalities, and integrations according to the project specifications.

                    </p>
                    <p className="mb-3 paracontent">
                    • Ensure adherence to coding standards, best practices, and quality assurance processes throughout the development lifecycle.
                    </p>
                    <h4>Testing and Quality Assurance:</h4>
                    <p className="mb-3 paracontent">
                      • Conduct comprehensive testing to identify and address bugs, errors, and performance issues in the custom software solution.

                    </p>
                    <p className="mb-3 paracontent">
                      • Perform functional testing, integration testing, user acceptance testing, and security testing to validate the reliability, scalability, and security of the product.

                    </p>
                    <p className="mb-3 paracontent">
                    • Engage stakeholders and end-users in beta testing to gather feedback and make necessary refinements before the product launch.
                    </p>
                    <h4>Deployment and Launch:</h4>
                    <p className="mb-3 paracontent">
                      • Prepare the custom software solution for deployment by configuring servers, databases, and environments as per the production requirements.

                    </p>
                    <p className="mb-3 paracontent">
                      • Coordinate with stakeholders to plan and execute the product launch, including marketing campaigns, communication strategies, and user training sessions.

                    </p>
                    <p className="mb-3 paracontent">
                    • Monitor the deployment process closely to ensure a smooth transition and minimize downtime or disruptions for end-users.

                    </p>
                    <h4>Post-launch Support and Maintenance:</h4>
                    <p className="mb-3 paracontent">
                      • Provide ongoing support and maintenance services to address issues, bugs, and feature requests reported by users.

                    </p>
                    <p className="mb-3 paracontent">
                      • Monitor system performance, security vulnerabilities, and user feedback to identify areas for improvement and optimization.

                    </p>
                    <p className="mb-3 paracontent">
                    • Collaborate with the software development company to plan and implement future updates, enhancements, and expansions based on evolving business needs and market trends. 

                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Recent Works section */}

      <section className="DesktopRecentWork">
        <Container>
          <div className="Our-Banner mb-5 ">
            <Row className="mb-5">
              <Col>
                <div className="d-flex flex-column gap-2 justify-content-center align-items-center text-center Our-Heading">
                  <h4>Our Recent Works</h4>
                  <p>
                    Dive into Akkenna's Portfolio, which features our most
                    current works and serves as a demonstration of our
                    commitment to innovation, <br /> originality, and
                    professional excellence. Explore how we bring ideas to life
                    via the application of precision and technological
                    expertise.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="Our-Row-wrapper">
            <Row className="Our-Row">
              <Col lg={4}>
                <div className="Our-Content">
                  <div className="Our-Img">
                    <img src={RR} alt="" />
                  </div>
                  <div className="ourworkpara">
                    <p>
                      React.js boosts the Rehabilitation center listing site:
                      modular,fast rendering, dynamic content, and simplified
                      UI for seamless browsing.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="Our-Content">
                  <div className="Our-Img">
                    <img src={Festive} alt="" />
                  </div>
                  <div className="ourworkpara">
                    <p>
                      Choose React.js for Event Carnival Management: modular,
                      fast rendering, extensive ecosystem for dynamic platform.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="Our-Content">
                  <div className="Our-Img">
                    <img src={Win} alt="" />
                  </div>
                  <div className="ourworkpara">
                    <p>
                      Opt for React.js: efficient component reuse, fast
                      performance, simplified state management.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            </div>
            
          </div>
        </Container>
      </section>

      {/* Industry section */}

      <section className="DesktopIndustrySec">
        <Container className="max-width-100 mb-3">
          <div className="main-Div">
            <Row className=" mt-5  ">
              <div className="RecentHeading">
                <div className="text-center texts-Heading">
                  <h4 className=" DMSansBold">
                    Industry We Serve 
                  </h4>
                </div>
                {/* <div className="text-center texts-Heading">
                  <p className="DMSansRegular">
                    Industry We Serve For SaaS Application Development
                  </p>
                </div> */}
              </div>
            </Row>
            <Row className="sass-App">
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Finance} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Financial  services
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Banking} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Banking services</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Insurance} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Insurance services</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Investment} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Investment planning</h6>
                </div>
              </Col>

              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Fintech} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Fintech solutions</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Payment} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Payments method</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Retail} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Retail option</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Health} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Healthcare solutions</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Manufacturing} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Manufacturing company</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Professional} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Professional 
                    Services
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Transport} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Transportation
                    
                    and Logistics
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Tele} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Tele communications</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Construction} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Construction method</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Hospital} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Travel and  Hospitality
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Banking} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Construction method
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Hospital} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Travel and  Hospitality
                  </h6>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CallToAction Section */}
      <section className="DesktopCTA2">
        <NewCallToAction
          header="Are you prepared to enhance your software products? Collaborate with Akkenna for outstanding software development services"
          buttonText="Innovate Now"
        />
      </section>
<section className="DesktopFaq" >
<NewFaq array1={array1} />
</section>
      

      
      < MobileFaq items={array1} title={"Addressing Popular Queries with Expertise and Innovation!"}/>

<section className="DesktopForm">
<NewContactForm />
</section>
      
      <MobileForm/>

      <NewBlogPage/>

      <section className="MobileBlogMain">
        <Container>
          <Row>
            <Col lg={12}>
              <h3>
                Recent Blogs &<br></br> Post From Akkenna
              </h3>
            </Col>
          </Row>
          <Row className="MobileBlogMainSlide">
            <div className="MobileBlogList">
              <div className="MobileBlogListImg">
                <img src={EvloutionBlog} alt="" />
              </div>
              <div>
                <h5>Revolutionizing mobile apps</h5>
                <p>
                  The synergy of Artificial Intelligence in the evolution of app
                  ...
                </p>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
            <div className="MobileBlogList">
              <div className="MobileBlogListImg">
                <img src={WebDevBlog} alt="" />
              </div>
              <div>
                <h5>Choosing between web and mobile app development</h5>
                <p>
                  Tailor your strategy based on business goals for optimal
                  digital presence....
                </p>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
            <div className="MobileBlogList">
              <div className="MobileBlogListImg">
                <img src={TopDevpBlog} alt="" />
              </div>
              <div>
                <h5>Top-10 DevOps Configuration Management Tools</h5>
                <p>
                  DevOps configuration & automation tools are crucial for
                  streamlining ...
                </p>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
            <div className="MobileBlogList">
              <div className="MobileBlogListImg">
                <img src={EvloutionBlog} alt="" />
              </div>
              <div>
                <h5>Revolutionizing mobile apps</h5>
                <p>
                  The synergy of Artificial Intelligence in the evolution of app
                  ...
                </p>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
            <div className="MobileBlogList">
              <div className="MobileBlogListImg">
                <img src={WebDevBlog} alt="" />
              </div>
              <div>
                <h5>Choosing between web and mobile app development</h5>
                <p>
                  Tailor your strategy based on business goals for optimal
                  digital presence....
                </p>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <SoftAboutCanva show={show} handleClose={handleClose} />      
    </main>
  );
};

export default SoftwareDevelopment;
