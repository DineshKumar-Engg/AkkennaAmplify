import React, { useState } from "react";
import "../../Style/NewSaasDevelopment.css";
import "../../Style/SaasMobile.css";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import BannerRightimg from "../../Assets/Image/NewService/Saas/SaasbannerRightImage.svg";
import Process1 from "../../Assets/Image/NewService/Saas/Discover1.svg";
import Process2 from "../../Assets/Image/NewService/Saas/design2.svg";
import Process3 from "../../Assets/Image/NewService/Saas/development3.svg";
import Process4 from "../../Assets/Image/NewService/Saas/testing4.svg";
import Process5 from "../../Assets/Image/NewService/Saas/deployment5.svg";
import Process6 from "../../Assets/Image/NewService/Saas/training8.svg";
import Process7 from "../../Assets/Image/NewService/Saas/iterator7.svg";
import NewCallToAction from "../../Components/NewCallToAction";
import Leftimage from "../../Assets/Image/NewService/Saas/sec4Leftimg.svg";

import RR from "../../Assets/Image/NewService/Saas/rr.svg";
import Festive from "../../Assets/Image/NewService/Saas/festiv.svg";
import Win from "../../Assets/Image/NewService/Saas/win.svg";

import Finance from "../../Assets/Image/NewService/Saas/Finance.webp";
import Banking from "../../Assets/Image/NewService/Saas/Banking.webp";
import Insurance from "../../Assets/Image/NewService/Saas/Insurance.webp";
import Investment from "../../Assets/Image/NewService/Saas/Investment.webp";
import Fintech from "../../Assets/Image/NewService/Saas/Fintech.webp";
import Payment from "../../Assets/Image/NewService/Saas/Payment.webp";
import Retail from "../../Assets/Image/NewService/Saas/Retail.webp";
import Health from "../../Assets/Image/NewService/Saas/Health.webp";
import Manufacturing from "../../Assets/Image/NewService/Saas/Manufacturing.webp";
import Professional from "../../Assets/Image/NewService/Saas/Professional.webp";
import Transport from "../../Assets/Image/NewService/Saas/Transport.webp";
import Tele from "../../Assets/Image/NewService/Saas/Tele.webp";
import Construction from "../../Assets/Image/NewService/Saas/Construction.webp";
import Hospital from "../../Assets/Image/NewService/Saas/Hospital.webp";
import Num1 from "../../Assets/Image/NewService/Saas/Num1.svg";
import Num2 from "../../Assets/Image/NewService/Saas/Num2.svg";
import Num3 from "../../Assets/Image/NewService/Saas/Num3.svg";
import Num4 from "../../Assets/Image/NewService/Saas/Num4.svg";
import Ai from "../../Assets/Image/NewService/Saas/Ai.svg";
import Robot from "../../Assets/Image/NewService/Saas/Robot.svg";
import Tag1 from "../../Assets/Image/NewService/Saas/Tag1.svg";
import Tag2 from "../../Assets/Image/NewService/Saas/Tag2.svg";
import SaasIcon from "../../Assets/Image/NewService/Saas//SaascomponentIcon.svg";
import NewFaq from "../../Components/NewFaq";
import NewContactForm from "../../Components/NewContactForm";
import NewBlogPage from "../../Components/NewBlogPage";
import RightArrow from "../../Assets/Image/NewService/Saas/rightarrowbgnill.svg";
import TechSlide from "../../Components/TechSlide";
import MobileForm from "../../Components/MobileForm";
import MobileFaq from "../../Components/MobileFaq";
import Rehappymobile from "../../Assets/Image/NewService/Saas/MobileRehappy.svg"
import FestiveMobile from "../../Assets/Image/NewService/Saas/MobileFestive.svg"
import EvloutionBlog from "../../Assets/Image/NewService/Saas/EvloutionBlog.svg";
import WebDevBlog from "../../Assets/Image/NewService/Saas/WebDevBlog.svg";
import TopDevpBlog from "../../Assets/Image/NewService/Saas/TopDevpBlog.svg";
import GreaterArrow from "../../Assets/Image/NewService/Saas/GreaterArrow.svg";
const SaaSDevelopment = () => {
  
  const [hide, Setshow] = useState({
    Expertise: true,
    Business: false,
    Smooth: false,
    Design: false,
  });

  

  const handleMouseOver = (val) => {
    switch (val) {
      case "Expertise":
        Setshow({
          ...hide,
          Expertise: true,
          Business: false,
          Smooth: false,
          Design: false,
        });
        break;
      case "Business":
        Setshow({
          ...hide,
          Expertise: false,
          Business: true,
          Smooth: false,
          Design: false,
        });
        break;
      case "Smooth":
        Setshow({
          ...hide,
          Expertise: false,
          Business: false,
          Smooth: true,
          Design: false,
        });
        break;
      case "Design":
        Setshow({
          ...hide,
          Expertise: false,
          Business: false,
          Smooth: false,
          Design: true,
        });
        break;
      default:
        Setshow({
          ...hide,
          Expertise: true,
          Business: false,
          Smooth: false,
          Design: false,
        });
    }
  };

  const techSetting = {
    centerMode: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    autoplayTimeout: 3000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
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
  };
  const [state, setState] = useState("question-1");
  const handleChange = (value) => {
    setState(value);
  };
  const [state1, setState1] = useState("question-1");
  const handleChange1 = (value) => {
    setState1(value);
  };

  const sampleArray = [
    {
      question: `<h6>1. Which key metrics hold the greatest significance for SaaS businesses, and what is the reasoning behind their importance?</h6>`,
      answer: `<p>The most crucial SaaS business metrics revolve around customer acquisition, retention, and revenue generation. Metrics such as Customer Lifetime Value (CLV), Monthly Recurring Revenue (MRR), and Churn Rate are of utmost importance. CLV provides insights into the long-term value of a customer, MRR reflects the stability and growth of recurring revenue, while Churn Rate indicates customer retention success. Monitoring these metrics enables SaaS businesses to assess performance, make informed decisions, and strategize for sustainable growth.</p>`,
    },
    {
      question: `<h6>2. What is the estimated expense for developing a SaaS application?</h6>`,
      answer: `<p>The cost of developing a SaaS application can vary widely based on factors such as the complexity of features, design requirements, development hours, and the expertise of the development team. A basic SaaS application may cost tens of thousands of dollars, while more intricate and feature-rich solutions can incur a higher investment. It's advisable to consult with a development team, providing detailed project specifications, to receive a more accurate and personalized cost estimate for your specific SaaS development needs.</p>`,
    },
    {
      question: `<h6>3. How would you define the architecture of Software as a Service (SaaS)?</h6>`,
      answer: `<p>SaaS architecture refers to the design and structure of Software as a Service, a cloud computing model where applications are hosted centrally and delivered to users over the internet. It involves a multi-tenant framework, and scalable infrastructure, and often follows a modular design to provide flexible and accessible software solutions.</p>`,
    },
    {
      question: `<h6>4. What is the functioning mechanism of a SaaS model?</h6>`,
      answer: `<p>The SaaS model delivers software programs via subscription over the Internet. SaaS lets customers use apps in a web browser instead of buying and installing them. This concept removes local installations and maintenance by charging a monthly subscription charge for software and updates. Software centralization on the provider's servers simplifies upgrades, scalability, and user access from any internet-connected device.</p>`,
    },
    {
      question: `<h6>5. Can you integrate a SaaS application with existing software or third-party tools?</h6>`,
      answer: `<p>Absolutely. Our SaaS development includes robust integration capabilities, ensuring seamless connections with your existing software stack or third-party tools. This integration enhances overall business efficiency and workflow.</p>`,
    },
    {
      question: `<h6>6. How is data security ensured in SaaS application development?</h6>`,
      answer: `<p>Security is a top priority. A reliable SaaS development company follows industry best practices, implements encryption protocols, and conducts regular security audits to identify and address potential vulnerabilities.</p>`,
    },
    {
      question: `<h6>7. What makes Akkenna's SaaS application development stand out in the market?</h6>`,
      answer: `<p>Akkenna's SaaS development stands out due to unmatched expertise, tailored solutions, seamless integration capabilities, user-centric design, and a commitment to timely delivery and support. Choose Akkenna for precision, innovation, and dedication to your success.</p>`,
    },
    {
      question: `<h6>8. What technologies are employed in your SaaS development process?</<h6>`,
      answer: `<p>We leverage cutting-edge technologies like React.js, Node.js, and MongoDB for scalable and innovative SaaS application development.</p>`,
    },
  ];

  return (
    <main id="SSD">
      {/* Discover section */}

      <section className="Discover DesktopBanner">
        <Container fluid className=" Banner">
          <Container>
            <Row>
              <Col lg={7} className="leftcontent">
                <Container>
                  <Col lg={11}>
                    <div className="DisContent">
                      <div>
                        <h4>
                          Expert SaaS Development Company Focused On Your
                          Success
                        </h4>
                      </div>
                      <div>
                        <p>
                          We seamlessly blend technology and human insight to
                          create SaaS that adapts to your needs, not the other
                          way around. Progress without limits.
                        </p>
                      </div>
                      <div>
                        <button>Build Your SaaS Today</button>
                      </div>
                    </div>
                  </Col>
                </Container>
              </Col>
              <Col lg={5}>
                <div className="headimgright">
                  <img src={BannerRightimg} alt="" />
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
                    Expert SaaS Development Company Focused On Your Success
                  </h2>
                </div>
                <div>
                  <p>
                    We seamlessly blend technology and human insight to create
                    SaaS that adapts to your needs, not the other way around.
                    Progress without limits.
                  </p>
                </div>
              </Col>
              <Row>
                <Col lg={6}>
                  <div className="bannerbtn">
                    <button>Build Your SaaS Today</button>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </Container>
      </section>

      <section className="process DesktopSec2">
        <Container>
          <Row className="ContentBoxSec2">
            <Col lg={8}>
              <Row>
                <Col lg={12}>
                  <h4>Process We Follow at Akkenna Animation & Technologies</h4>
                </Col>
              </Row>
              <Row className="parabox">
                <Col lg={8}>
                  <p>
                    Begin your generative AI journey with a comprehensive
                    consultation from a leading generative AI development
                    company.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center ContentBox2">
            <Col>
              <img src={Process1} alt="" />
              <p>Discovery and Planning</p>
            </Col>
            <Col>
              <img src={Process2} alt="" />
              <p>Design and Prototyping</p>
            </Col>
            <Col>
              <img src={Process3} alt="" />
              <p>
                Development <br></br> Process
              </p>
            </Col>
            <Col>
              <img src={Process4} alt="" />
              <p>Testing and Quality Assurance</p>
            </Col>
            <Col>
              <img src={Process5} alt="" />
              <p>Deployment and Ongoing Support</p>
            </Col>
            <Col>
              <img src={Process6} alt="" />
              <p>User Training and Documentation</p>
            </Col>
            <Col>
              <img src={Process7} alt="" />
              <p>Iterative Improvements</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="MobileSec2">
        <Container className="backgroundsec">
          <Row className="Sec2cont">
            <Col className="col-3 contbox">
              <div className="boxcontainer">
                <img src={Process1} alt="" />
              </div>
              <div>
                <p>Discovery and Planning </p>
              </div>
            </Col>
            <Col className="col-3 contbox">
              <div className="boxcontainer">
                <img src={Process2} alt="" />
              </div>
              <div>
                <p>Design and Prototyping </p>
              </div>
            </Col>
            <Col className="col-3 contbox">
              <div className="boxcontainer">
                <img src={Process3} alt="" />
              </div>
              <div>
                <p>
                  Development <br></br> Process{" "}
                </p>
              </div>
            </Col>
            <Col className="col-3 contbox">
              <div className="boxcontainer">
                <img src={Process4} alt="" />
              </div>
              <div>
                <p>Testing and Quality Assurance </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CallToAction Section */}
      <section className="DesktopCTA">
        <NewCallToAction
          header="We Build SaaS That Powers Your Digital Transformation"
          buttonText="Request a Custom SaaS Demo"
        />
      </section>

      

      <section className="DesktopSec4">
        <Container>
          <Row className="unveilingRow">
            <Col lg={6}>
              <div className="leftimg">
                <img src={Leftimage} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="HeadingDiv">
                <h4>
                  Unveiling SaaS Applications <br />
                  and Characteristics
                </h4>
                <p>
                  SaaS application development is a dynamic and disruptive
                  software delivery method. <a href="https://www.akkenna.com/app-development-company-coimbatore">SaaS apps</a> are hosted centrally and
                  available online for subscription. This paradigm simplifies
                  and scales by eliminating device installations and
                  maintenance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="MobileSec4">
        <div className="topcontent">
          <div className="col-8">
            <h3>Unveiling SaaS Applications and Characteristics</h3>
          </div>
          <div className="col-11">
            <p>
              SaaS application development is a dynamic and disruptive software
              delivery method. SaaS apps are hosted centrally and available
              online for subscription. This paradigm simplifies and scales by
              eliminating device installations and maintenance.
            </p>
          </div>
          <div className="col-8">
            <h3 className="tecxclr">
              Key Characteristics of SaaS Applications
            </h3>
          </div>
        </div>
        <div className="col-11 saasacordian">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="acchead">
                  <div className="col-3">
                    <img src={SaasIcon} alt="" />
                  </div>
                  <div className="col-12 headbox">
                    <h2>Accessibility</h2>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Accessible Anytime, Anywhere: Users <br></br>can access SaaS
                    applications through web browsers,
                    <br></br> providing flexibility and convenience.
                  </li>
                  <li>
                    Cross-Device Compatibility: SaaS<br></br> applications are
                    designed to work seamlessly <br></br>across various devices,
                    including desktops,
                    <br></br> laptops, tablets, and{" "}
                    <a href="https://www.amazon.in/Smartphones/b?ie=UTF8&node=1805560031">
                      smartphones
                    </a>
                    .
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="acchead">
                  <div className="col-3">
                    <img src={SaasIcon} alt="" />
                  </div>
                  <div className="col-12 headbox">
                    <h2>Subscription-Based Model</h2>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Cost-Effective: Users pay a subscription fee, reducing
                    upfront costs associated with software purchases and
                    maintenance.
                  </li>
                  <li>
                    Scalability: Easy to scale up or down based on business
                    needs, allowing for efficient cost management.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="acchead">
                  <div className="col-3">
                    <img src={SaasIcon} alt="" />
                  </div>
                  <div className="col-12 headbox">
                    <h2>Centralized Management</h2>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Single Point of Control: SaaS applications are centrally
                    managed, enabling updates, patches, and maintenance to be
                    performed efficiently without user intervention.
                  </li>
                  <li>
                    Consistent User Experience: Users access the latest version
                    of the software, ensuring a consistent and up-to-date
                    experience.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="acchead">
                  <div className="col-3">
                    <img src={SaasIcon} alt="" />
                  </div>
                  <div className="col-12 headbox">
                    <h2>Automatic Updates</h2>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Continuous Improvement: Regular updates and enhancements are
                    delivered automatically, keeping the software current with
                    the latest features and security measures.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <div className="acchead">
                  <div className="col-3">
                    <img src={SaasIcon} alt="" />
                  </div>
                  <div className="col-12 headbox">
                    <h2>Collaboration and Integration</h2>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Seamless Collaboration:{" "}
                    <a href="https://medium.com/@evincedevelop/top-15-emerging-saas-applications-in-2024-beyond-c4ff9a8e8fea">
                      SaaS applications
                    </a>{" "}
                    often facilitate collaboration among users, fostering
                    teamwork and productivity.
                  </li>
                  <li>
                    Integration Capabilities: Integration with other SaaS or
                    on-premise solutions for a comprehensive business ecosystem.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

      {/* Key Characteristics of SaaS Applications */}
      <section className="ApplicationSaas DesktopSec5">
        <Container>
          <Row className="rowmain">
            <Col
              lg={12}
              className="d-flex flex-column justify-content-center text-center"
            >
              <h5 className="headcontent">
                Key Characteristics of SaaS Applications
              </h5>
              <p className="paracontent">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </Col>

            <Col lg={12} className="mainrow">
              <Col lg={3} className="analytics-left ">
                <div
                  className={`nav py-2 px-3 ${
                    state === "question-1" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-1");
                  }}
                >
                  <div>
                    <h5>Accessibility</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="gen" />
                  </div>
                </div>

                <div
                  className={`nav py-2 px-3 ${
                    state === "question-2" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-2");
                  }}
                >
                  <div>
                    <h5>Subscription-Based Model</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="gen" />
                  </div>
                </div>

                <div
                  className={`nav py-2 px-3 ${
                    state === "question-3" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-3");
                  }}
                >
                  <div>
                    <h5>Centralized Management</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="gen" />
                  </div>
                </div>
              </Col>

              <Col lg={3} className="analytics-left secrow">
                <div
                  className={`nav py-2 px-3 ${
                    state === "question-4" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-4");
                  }}
                >
                  <div>
                    <h5>Automatic Updates</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="gen" />
                  </div>
                </div>

                <div
                  className={`nav py-2 px-3 ${
                    state === "question-5" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-5");
                  }}
                >
                  <div>
                    <h5>Collaboration and Integration</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="gen" />
                  </div>
                </div>

                <div
                  className={`nav py-2 px-3 ${
                    state === "question-6" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-6");
                  }}
                >
                  <div>
                    <h5>Asset Analytics</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="gen" />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <Col lg={9} className="rightbox">
                  {state === "question-1" && (
                    <div className="analytics-right">
                      <div>
                        <img src={SaasIcon} alt="icon" />
                      </div>
                      <div className="m-2">
                        <h4>Accessibility</h4>
                      </div>
                      <div className="rightparacont">
                        <ul>
                          <li>
                            Accessible Anytime, Anywhere: Users <br></br>can
                            access SaaS applications through web browsers,
                            <br></br> providing flexibility and convenience.
                          </li>
                          <li>
                            Cross-Device Compatibility: SaaS<br></br>{" "}
                            applications are designed to work seamlessly{" "}
                            <br></br>across various devices, including desktops,
                            <br></br> laptops, tablets, and{" "}
                            <a href="https://www.amazon.in/Smartphones/b?ie=UTF8&node=1805560031">
                              smartphones
                            </a>
                            .
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-2" && (
                    <div className="analytics-right">
                      <div>
                        <img src={SaasIcon} alt="icon" />
                      </div>
                      <div className="m-2">
                        <h4>Subscription-Based Model</h4>
                      </div>
                      <div className="rightparacont">
                        <ul>
                          <li>
                            Cost-Effective: Users pay a subscription fee,
                            reducing upfront costs associated with software
                            purchases and maintenance.
                          </li>
                          <li>
                            Scalability: Easy to scale up or down based on
                            business needs, allowing for efficient cost
                            management.
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-3" && (
                    <div className="analytics-right">
                      <div>
                        <img src={SaasIcon} alt="icon" />
                      </div>
                      <div className="m-2">
                        <h4>Centralized Management</h4>
                      </div>
                      <div className="rightparacont">
                        <ul>
                          <li>
                            Single Point of Control: SaaS applications are
                            centrally managed, enabling updates, patches, and
                            maintenance to be performed efficiently without user
                            intervention.
                          </li>
                          <li>
                            Consistent User Experience: Users access the latest
                            version of the software, ensuring a consistent and
                            up-to-date experience.
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-4" && (
                    <div className="analytics-right">
                      <div>
                        <img src={SaasIcon} alt="icon" />
                      </div>
                      <div>
                        <h4 className="m-2">Automatic Updates</h4>
                      </div>
                      <div className="rightparacont">
                        <ul>
                          <li>
                            Continuous Improvement: Regular updates and
                            enhancements are delivered automatically, keeping
                            the software current with the latest features and
                            security measures.
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-5" && (
                    <div className="analytics-right">
                      <div>
                        <img src={SaasIcon} alt="icon" />
                      </div>
                      <div>
                        <h4 className="m-2">Collaboration and Integration</h4>
                      </div>
                      <div className="rightparacont">
                        <ul>
                          <li>
                            Seamless Collaboration:{" "}
                            <a href="https://medium.com/@evincedevelop/top-15-emerging-saas-applications-in-2024-beyond-c4ff9a8e8fea">
                              SaaS applications
                            </a>{" "}
                            often facilitate collaboration among users,
                            fostering teamwork and productivity.
                          </li>
                          <li>
                            Integration Capabilities: Integration with other
                            SaaS or on-premise solutions for a comprehensive
                            business ecosystem.
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-6" && (
                    <div className="analytics-right">
                      <div>
                        <img src={SaasIcon} alt="icon" />
                      </div>
                      <div>
                        <h4 className="m-2">Financial Analytics 6</h4>
                      </div>
                      <div className="rightparacont">
                        <ul>
                          <li>
                            Assessing firm revenue, costs, and profitability.
                          </li>
                          <li>
                            Assessing profitability and financial performance.
                          </li>
                          <li>Long-term company strategies, budgeting.</li>
                          <li>Money risk forecasting and management.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ServiceSaaS section  */}

      <section className="ServiceSaaS DesktopSec6">
        <Container>
          <div className="SaasService">
            <Row className="w-100">
              <Col lg={12} className="servicetop">
                <Col lg={8}>
                  <h1>
                    Why Choose Akkenna for SaaS Application Development
                    Services?
                  </h1>
                </Col>
                <Col lg={6}>
                  <p>
                    Begin your Sass journey with a comprehensive
                    consultation from a leading generative AI development
                    company.
                  </p>
                </Col>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <Col lg={12} className="SaasServiceRow">
                <Row className="rowcolor">
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Expertise");
                    }}
                  >
                    <Row className="SaasServiceColMain ">
                      <Col>
                        <img src={Ai} alt="" />
                      </Col>
                      <Col>
                        <img src={Num1} alt="" />
                      </Col>
                      <Col>
                        <h5>
                        Unmatched <br></br>Expertise
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Business");
                    }}
                  >
                    <Row className="SaasServiceColMain ">
                      <Col>
                        <img src={Robot} alt="" />
                      </Col>
                      <Col>
                        <img src={Num2} alt="" />
                      </Col>
                      <Col>
                        <h5>
                        Business-specific  <br></br>solutions
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Smooth");
                    }}
                  >
                    <Row className="SaasServiceColMain ">
                      <Col>
                        <img src={Tag1} alt="" />
                      </Col>
                      <Col>
                        <img src={Num3} alt="" />
                      </Col>
                      <Col>
                        <h5>
                        Smooth <br></br>Integration
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Design");
                    }}
                  >
                    <Row className="SaasServiceColMain ">
                      <Col>
                        <img src={Tag2} alt="" />
                      </Col>
                      <Col>
                        <img src={Num4} alt="" />
                      </Col>
                      <Col>
                        <h5>
                        User-Centric<br></br> Design
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center mt-3">
              <Col lg={10}>
                {hide.Expertise && (
                  <Row className=" SaasServiceRowText">
                    <Col lg={5}>
                      <h4>Unmatched Expertise</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                      Akkenna has extensive SaaS application development services experience. Our experienced developers comprehend the latest technology and industry trends, ensuring that your project is in good hands.
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.Business && (
                  <Row className=" SaasServiceRowText">
                    <Col lg={5}>
                      <h4> Business-specific solutions</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                      We specialize in cutting-edge SaaS apps that match your business's needs. To maximize effect and efficiency, we focus on understanding your goals and creating solutions that match them.
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.Smooth && (
                  <Row className=" SaasServiceRowText">
                    <Col lg={5}>
                      <h4> Smooth Integration</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                      Akkenna Animation and Technologies values a strong digital ecology. SaaS systems with powerful integration features can seamlessly integrate with existing software or third-party technologies. Your business activities will remain simplified and integrated.

                      </p>
                    </Col>
                  </Row>
                )}
                {hide.Design && (
                  <Row className=" SaasServiceRowText">
                    <Col lg={5}>
                      <h4>User-Centric Design</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                      We prioritize user experience in SaaS application development services. We prioritize straightforward interfaces, responsive design, and user-friendly features to improve your users' experience. We make your SaaS product powerful and fun by focusing on user-centric design.
                      </p>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
<section className="MobileSec6">
<Container fluid>
  <Row className="Applicationhead">
    <Col sm={11}>
      <h1>Why Choose Akkenna for SaaS Application Development Services?</h1>
    </Col>
  </Row>
  <Row className="appRow">
    <Col sm={12} className="fullbox">
      <Col sm={6} className="boxcont">
        <div>
        <img src={Num1} alt=""/>
        </div>
        <div>
          <h2>Unmatched <br></br>Expertise</h2>
        </div>
       
      </Col>
      <Col sm={6} className="boxcont">
      <div>
        <img src={Num2} alt=""/>
        </div>
        <div>
          <h2>Business-specific <br></br>solutions</h2>
        </div>
      </Col>
      <Col sm={6} className="boxcont">
      <div>
        <img src={Num3} alt="" />
        </div>
        <div>
          <h2>Smooth  <br></br>Integration</h2>
        </div>
      </Col>
      <Col sm={6} className="boxcont">
      <div>
        <img src={Num4} alt="" />
        </div>
        <div>
          <h2>User-Centric<br></br> Design</h2>
        </div>
      </Col>
    </Col>
  </Row>
</Container>
</section>
      <section className="homeSlidermain DesktopSec7">
        <Container>
          <Row className="mb-4">
            <Col className="homeheading d-flex flex-column text-center align-items-center justify-content-center gap-2">
              <h4>
                Akkenna Animation and Technologies <br /> SaaS App Development
                Toolkit
              </h4>
              <p>
              At Akkenna Animation and Technologies, a SAAS software development company, we<br /> understand that the right tools empower our development team to create robust,
                
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="sliderow">
          <Row className="homeSlidermainRow">
            <Col lg={10} className="homeSliderCol">
              
              <TechSlide/>
            </Col>
          </Row>
        </Container>
      </section>
      

      {/* second section blackbackground */}
      <section className="DevelopSaas DesktopSec8">
        <Container>
          <Row className="headsecDevelop">
            <Col lg={9}>
              <h2>Guide To SaaS Application Development</h2>
            </Col>
            <Col lg={7}>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="mainbox">
          <Row className="mainboxrow">
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
                        Industry Developments in Software as a Service (SaaS) Consulting
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
                        Key Benefits of Hiring a SaaS Consulting and Development Firm
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
                        Expert Advice for SaaS Products That Focus on Users Consulting for SaaS
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
                        Problems and Solutions in Building SaaS Applications
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
                        SaaS Consulting and Development Partner Selection Considerations
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
                    Industry Developments in Software as a Service (SaaS) Consulting
                    </h4>
                    <p className="mb-3 paracontent">The latest trends in SaaS consulting and development encompass cutting-edge technologies and methodologies:</p>
                    <p className="mb-3 paracontent">
                      • AI and ML: SaaS systems leveraging AI and ML offer intelligent automation, predictive analytics, and personalized user experiences, enhancing overall efficiency and user satisfaction.
                    </p>
                    <p className="mb-3 paracontent">
                      • Microservices Architecture: Breaking down monolithic applications into microservices enhances flexibility, scalability, and maintainability, enabling SaaS development companies to adapt to changing requirements more effectively.
                    </p>
                    <p className="mb-3 paracontent">
                      • The rise of low-code and no-code development platforms empowers enterprises to create SaaS applications without extensive coding, accelerating development timelines and democratizing software development.
                    </p>

                    <p className="mb-3 paracontent">
                      • As a leading SaaS development company, we stay abreast of these trends to deliver innovative and high-quality SaaS applications tailored to meet our clients' evolving needs.
                    </p>
                    
                  </div>
                )}
                {state1 === "question-2" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    Key Benefits of Hiring a SaaS Consulting and Development Firm
                    </h4>
                    <p className="mb-3 paracontent">Engaging a SaaS consulting and development firm offers several key advantages for organizations:</p>
                    <p className="mb-3 paracontent">
                      • <b>Experience:</b>  SaaS consulting and development companies specialize in SAAS application development, possessing deep expertise in SaaS product development. They offer valuable insights, best practices, and technical experience to guide organizations through the development process.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Efficiency:</b> SaaS consulting and development firms accelerate the development process, enabling organizations to launch their SaaS applications faster. Leveraging their development framework and agile methodology expertise, they ensure project efficiency and timely delivery.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Scalability and Flexibility:</b> SaaS consulting and development companies focus on SAAS software development, creating solutions that are scalable and flexible. Their expertise ensures that the software can handle increasing user bases, data volumes, and evolving business needs, providing organizations with long-term scalability and adaptability.
                    </p>
                    
                  </div>
                )}
                {state1 === "question-3" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    Expert Advice for SaaS Products That Focus on Users Consulting for SaaS
                    </h4>
                    <p className="mb-3 paracontent">
                    To create a user-focused SaaS product, several factors must be considered:
User Study: Conduct thorough research on your target audience to understand their wants, pain points, and needs. This insight is essential for shaping the features and functionalities of the product to cater to the customer's requirements.

                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Intuitive User System:</b> Design a system that is intuitive and easy for users to navigate. Simplify complex workflows, prioritize important features prominently, and provide clear instructions to enhance the user experience.

                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Regular User Testing:</b> Continuously gather user feedback and conduct usability tests to identify areas for improvement. Iterate on the product based on user input to ensure it effectively meets their needs and enhances satisfaction.
                    </p>
                    <p className="mb-3 paracontent">
                      • To make high-quality SAAS software solutions that go above and beyond what customers expect, Akkenna Animation and technologies focuses on user-centered design and iterative development as a top SAAS development company that specializes in SAAS application development services.
                    </p>
                    
                  </div>
                )}
                {state1 === "question-4" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    Problems and Solutions in Building SaaS Applications
                    </h4>
                    <p className="mb-3 paracontent">
                      • <b>Scalability:</b> Ensuring that the system can accommodate growth in the number of users is critical. Leveraging cloud-based technologies, utilizing auto-scaling features, and optimizing resource utilization are essential strategies.

                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Data Security:</b> Protecting user data is paramount for SaaS apps. Implementing robust security measures such as data encryption, secure authentication methods, regular vulnerability assessments, and compliance with industry standards is essential.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Integration Difficulty:</b> Integrating various third-party services or existing systems can be complex. Standardized APIs, middleware solutions, and integration systems streamline the integration process and ensure seamless interoperability.

                    </p>
                    <p className="mb-3 paracontent">
                      • Explore our comprehensive guide to learn more about the challenges associated with SAAS application development and effective solutions to address them.
                    </p>
                    <p className="mb-3 paracontent">
                      • Akkenna is a top SAAS development business that offers SAAS application development services. We know how to get around these problems so that we can give our clients strong and safe SAAS software solutions that adapt to their changing needs.
                    </p>
                    
                  </div>
                )}
                {state1 === "question-5" && (
                  <div className="scrollStyle">
                    <h4 className="headcontent mb-3">
                    SaaS Consulting and Development Partner Selection Considerations

                    </h4>
                    <p className="mb-3 paracontent">
                    When selecting a SaaS consulting and development partner, several crucial factors should be considered
                    </p>
                    <p className="mb-3 paracontent">
                      • Expertise and Experience: Evaluate the partner's knowledge, experience in relevant industries, and track record of successfully delivering SaaS projects.
                    </p>
                    <p className="mb-3 paracontent">
                      • Technology Stack: Ensure that the partner is proficient in utilizing the necessary technologies, systems, and tools required for your project's success.
                    </p>
                    
                    <p className="mb-3 paracontent">
                      • Collaboration and Communication: Choose a partner that prioritizes transparent communication, and collaboration, and involves you throughout the development process.
                    </p>
                    <p className="mb-3 paracontent">
                      • Client References: Request client reviews and references to gauge the partner's reputation, reliability, and ability to satisfy customers.

                    </p>
                    <p className="mb-3 paracontent">
                      • By considering these factors, businesses can identify a reputable SaaS development company capable of assisting them in building and launching their SaaS products.
                    </p>
                    
                    <p className="mb-3 paracontent">
                      • The best SAAS development company offering SAAS application development services, Akkenna prioritizes expertise, transparent communication, and client satisfaction to deliver exceptional SAAS software development solutions tailored to our client's needs.
                    </p>
                    
                  </div>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="MobileSec8">
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
                          Industry Developments in Software as a Service (SaaS) Consulting
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">The latest trends in SaaS consulting and development encompass cutting-edge technologies and methodologies:</p>
                    <p className="mb-3 paracontent">
                      • AI and ML: SaaS systems leveraging AI and ML offer intelligent automation, predictive analytics, and personalized user experiences, enhancing overall efficiency and user satisfaction.
                    </p>
                    <p className="mb-3 paracontent">
                      • Microservices Architecture: Breaking down monolithic applications into microservices enhances flexibility, scalability, and maintainability, enabling SaaS development companies to adapt to changing requirements more effectively.
                    </p>
                    <p className="mb-3 paracontent">
                      • The rise of low-code and no-code development platforms empowers enterprises to create SaaS applications without extensive coding, accelerating development timelines and democratizing software development.
                    </p>

                    <p className="mb-3 paracontent">
                      • As a leading SaaS development company, we stay abreast of these trends to deliver innovative and high-quality SaaS applications tailored to meet our clients' evolving needs.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                          Key Benefits of Hiring a SaaS Consulting and Development Firm
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">Engaging a SaaS consulting and development firm offers several key advantages for organizations:</p>
                    <p className="mb-3 paracontent">
                      • <b>Experience:</b>  SaaS consulting and development companies specialize in SAAS application development, possessing deep expertise in SaaS product development. They offer valuable insights, best practices, and technical experience to guide organizations through the development process.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Efficiency:</b> SaaS consulting and development firms accelerate the development process, enabling organizations to launch their SaaS applications faster. Leveraging their development framework and agile methodology expertise, they ensure project efficiency and timely delivery.
                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Scalability and Flexibility:</b> SaaS consulting and development companies focus on SAAS software development, creating solutions that are scalable and flexible. Their expertise ensures that the software can handle increasing user bases, data volumes, and evolving business needs, providing organizations with long-term scalability and adaptability.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                          Expert Advice for SaaS Products That Focus on Users Consulting for SaaS
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                    To create a user-focused SaaS product, several factors must be considered:
User Study: Conduct thorough research on your target audience to understand their wants, pain points, and needs. This insight is essential for shaping the features and functionalities of the product to cater to the customer's requirements.

                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Intuitive User System:</b> Design a system that is intuitive and easy for users to navigate. Simplify complex workflows, prioritize important features prominently, and provide clear instructions to enhance the user experience.

                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Regular User Testing:</b> Continuously gather user feedback and conduct usability tests to identify areas for improvement. Iterate on the product based on user input to ensure it effectively meets their needs and enhances satisfaction.
                    </p>
                    <p className="mb-3 paracontent">
                      • To make high-quality SAAS software solutions that go above and beyond what customers expect, Akkenna Animation and technologies focuses on user-centered design and iterative development as a top SAAS development company that specializes in SAAS application development services.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                          Problems and Solutions in Building SaaS Applications
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                      • <b>Scalability:</b> Ensuring that the system can accommodate growth in the number of users is critical. Leveraging cloud-based technologies, utilizing auto-scaling features, and optimizing resource utilization are essential strategies.

                    </p>

                    <p className="mb-3 paracontent">
                      • <b>Data Security:</b> Protecting user data is paramount for SaaS apps. Implementing robust security measures such as data encryption, secure authentication methods, regular vulnerability assessments, and compliance with industry standards is essential.
                    </p>
                    <p className="mb-3 paracontent">
                      • <b>Integration Difficulty:</b> Integrating various third-party services or existing systems can be complex. Standardized APIs, middleware solutions, and integration systems streamline the integration process and ensure seamless interoperability.

                    </p>
                    <p className="mb-3 paracontent">
                      • Explore our comprehensive guide to learn more about the challenges associated with SAAS application development and effective solutions to address them.
                    </p>
                    <p className="mb-3 paracontent">
                      • Akkenna is a top SAAS development business that offers SAAS application development services. We know how to get around these problems so that we can give our clients strong and safe SAAS software solutions that adapt to their changing needs.
                    </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                          SaaS Consulting and Development Partner Selection Considerations
                          </Accordion.Header>
                          <Accordion.Body>
                          <p className="mb-3 paracontent">
                    When selecting a SaaS consulting and development partner, several crucial factors should be considered
                    </p>
                    <p className="mb-3 paracontent">
                      • Expertise and Experience: Evaluate the partner's knowledge, experience in relevant industries, and track record of successfully delivering SaaS projects.
                    </p>
                    <p className="mb-3 paracontent">
                      • Technology Stack: Ensure that the partner is proficient in utilizing the necessary technologies, systems, and tools required for your project's success.
                    </p>
                    
                    <p className="mb-3 paracontent">
                      • Collaboration and Communication: Choose a partner that prioritizes transparent communication, and collaboration, and involves you throughout the development process.
                    </p>
                    <p className="mb-3 paracontent">
                      • Client References: Request client reviews and references to gauge the partner's reputation, reliability, and ability to satisfy customers.

                    </p>
                    <p className="mb-3 paracontent">
                      • By considering these factors, businesses can identify a reputable SaaS development company capable of assisting them in building and launching their SaaS products.
                    </p>
                    
                    <p className="mb-3 paracontent">
                      • The best SAAS development company offering SAAS application development services, Akkenna prioritizes expertise, transparent communication, and client satisfaction to deliver exceptional SAAS software development solutions tailored to our client's needs.
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

      {/* FAQ */}
      {/* <section className="DesktopFaq">
        <NewFaq array1={sampleArray} />
      </section> */}

      <section className="DesktopCTA2">
        <NewCallToAction
          header="Ready to Revolutionize Your Business? Partner with Akkenna for Top-tier SaaS Application Development."
          buttonText="Let's Build the Future Together!"
        />
      </section>

      <section className="DesktopRecentWork">
        <Container>
          <div className="Our-Banner mb-5 ">
            <Row className="mb-5">
              <Col lg={12} className="Our-Heading">
                {/* <div className="d-flex flex-column gap-2 justify-content-center align-items-center text-center Our-Heading"> */}
                <Col lg={6}>
                  <h4>Our Recent Works</h4>
                </Col>
                <Col lg={5}>
                  <p>
                    Dive into Akkenna's Portfolio, which features our most
                    current works and serves as a demonstration of our
                    commitment to innovation, originality, and professional
                    excellence. Explore how we bring ideas to life via the
                    application of precision and technological expertise.
                  </p>
                </Col>

                {/* </div> */}
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
                        fast rendering, extensive ecosystem for dynamic
                        platform.
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
                  <h4 className=" DMSansBold">Industry We Serve</h4>
                </div>
                <div className="text-center texts-Heading">
                  <p className="DMSansRegular">
                    Industry We Serve For SaaS Application Development
                  </p>
                </div>
              </div>
            </Row>
            <Row className="sass-App">
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Finance} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Financial services</h6>
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
                  <h6>Professional Services</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Transport} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Transportation and Logistics</h6>
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
                  <h6>Travel and Hospitality</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Banking} alt="" className="imgs-size" />
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
                  <h6>Travel and Hospitality</h6>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="Desktopcontactform">
      <NewContactForm/>
      </section>
      <section className="MobileRecentwork">
        <Container>
          <div className="headcont">
            <h2> Our Recent Works </h2>
          </div>
          <Row className="mainrow">
            <Col className="col-4">
            <div className="image-container">
            <p>Festive Ticket</p>
              <img src={Rehappymobile} alt="" />
            </div>
            
            </Col>
            <Col className="col-4">
              <div className="image-container">
              <p>Rehabpy</p>
            <img src={FestiveMobile} alt="" />
              </div>
              
            </Col>
            <Col className="col-4">
            <div className="image-container">
            <p>Festive Ticket</p>
            <img src={Rehappymobile} alt="" />
            </div>
            
            </Col>
          </Row>
        </Container>
      </section>
      <MobileFaq  items={sampleArray } title={"Addressing Popular Queries with Expertise and Innovation!"}/>
      <MobileForm/>
      <NewFaq array1={sampleArray} />
      
      

      <section className="DesktopBlog">
        <NewBlogPage />
      </section>

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
      
    </main>
  );
};

export default SaaSDevelopment;
