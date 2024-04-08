import React, { useState } from "react";
import "../../Style/NewDataEngg.css";
import { Col, Container, Row } from "react-bootstrap";
import Approach1 from "../../Assets/Image/NewService/DataEngg/01.svg";
import Approach2 from "../../Assets/Image/NewService/DataEngg/02.svg";
import Approach3 from "../../Assets/Image/NewService/DataEngg/03.svg";
import Approach4 from "../../Assets/Image/NewService/DataEngg/04.svg";
import Approach5 from "../../Assets/Image/NewService/DataEngg/05.svg";
import Approach6 from "../../Assets/Image/NewService/DataEngg/06.svg";
import Approach7 from "../../Assets/Image/NewService/DataEngg/07.svg";
import Approach8 from "../../Assets/Image/NewService/DataEngg/08.svg";
import NewCallToAction from "../../Components/NewCallToAction";
import Arrow from "../../Assets/Image/NewService/DataEngg/tail-right.svg";
import Slider from "react-slick";
import NewContactForm from "../../Components/NewContactForm";
import NewFaq from "../../Components/NewFaq";
import NewBlogPage from "../../Components/NewBlogPage";
import BannerLeft from "../../Assets/Image/NewService/DataEngg/DataEnggBanner.svg";
import DecodeData from "../../Assets/Image/NewService/DataEngg/DataEnggSecondsec.svg";
import DataEngineerWorld from "../../Assets/Image/NewService/DataEngg/DataEngineerWorld.svg";
import ACCData from "../../Assets/Image/NewService/DataEngg/ACCData.svg";
import TransData from "../../Assets/Image/NewService/DataEngg/TransData.svg";
import TechConveg from "../../Assets/Image/NewService/DataEngg/TechConveg.svg";
import corporate from "../../Assets/Image/NewHome/corporate.svg";
import GreaterArrow from "../../Assets/Image/NewHome/GreaterArrow.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import TechSlide from "../../Components/TechSlide";
import Accordion from "react-bootstrap/Accordion";
import MobileForm from "../../Components/MobileForm";
import MobileFaq from "../../Components/MobileFaq";
import DataTransParency from '../../Assets/Image/NewService/DataEngg/DataTransParency.svg'
import TechEdge1 from '../../Assets/Image/NewService/DataEngg/TechEdgeLeft.svg'
import TechEdge2 from '../../Assets/Image/NewService/DataEngg/TechEdgeRight.svg'
import GenAiService from '../../Assets/Image/NewService/DataAnalytics/GenAiService.webp'
import WebServic from '../../Assets/Image/NewService/DataAnalytics/WebServic.webp'
import MobileService from '../../Assets/Image/NewService/DataAnalytics/MobileService.webp'
import Customservic from '../../Assets/Image/NewService/DataAnalytics/Customservic.webp'
import ProductServic from '../../Assets/Image/NewService/DataAnalytics/ProductServic.webp'
import QualityServic from '../../Assets/Image/NewService/DataAnalytics/QualityServic.webp'
import DevopsServic from '../../Assets/Image/NewService/DataAnalytics/DevopsServic.webp'

function AboutCanva({ show, handleClose }) {
  return (
    <section className="DataAboutCanva">
      <Offcanvas
        id="DataAboutCanva"
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="homeAboutCanvaText">
            <Row className="homeAboutImg">
              <img src={DecodeData} alt="" />
            </Row>
            <Row className="MobileDecodingsCanva">
              <Col lg={12}>
                <h5>
                  Decoding Data <br /> Engineering Services
                </h5>
              </Col>
              <Col lg={12}>
                <p>
                  Data engineering involves the design,
                  <a href="https://www.akkenna.com/website-development-company-coimbatore">
                    development{" "}
                  </a>
                  , and maintenance of robust and scalable data architectures,
                  including data pipelines, storage systems, and databases. It
                  focuses on the efficient collection, transformation, and
                  storage of data to enable analytics and decision-making. Data
                  engineering services encompass the implementation of these
                  processes, ensuring data quality, reliability, and
                  accessibility. This involves constructing data pipelines,
                  managing {" "}
                  <a href="https://aws.amazon.com/what-is/etl/#:~:text=Extract%2C%20transform%2C%20and%20load%20(,and%20machine%20learning%20(ML).">
                    ETL
                  </a>
                  (Extract, Transform, Load) workflows, and optimizing data
                  infrastructure. The goal is to empower businesses with a solid
                  foundation for handling and leveraging their data effectively.
                </p>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}


function FaqCanva({ show, handleClose }) {
  return (
    <section className="homeFaqCanva">
      <Offcanvas
        id="homeFaqCanva"
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="homeFaqCanvaText">
            <Row>
              <Col>
                <h5>
                  Addressing Popular Queries with <br></br> Expertise and
                  Innovation!
                </h5>
              </Col>
            </Row>
            <Row className="homeFaqCanvaRow">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    What is Generative AI, and how can it benefit my business?
                  </Accordion.Header>
                  <Accordion.Body>
                    Generative AI refers to technology that enables machines to
                    produce creative outputs, such as images, text, or even
                    entire applications. Its benefits include enhanced
                    creativity, automation, and generating novel solutions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How can Generative AI be applied in my industry?
                  </Accordion.Header>
                  <Accordion.Body>
                    Generative AI finds applications across various industries,
                    including content creation, design, healthcare, finance, and
                    more. It can streamline processes, automate repetitive
                    tasks, and unlock innovative solutions tailored to specific
                    industry needs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What sets your Generative AI services apart from others?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our Generative AI services stand out due to our deep
                    expertise, client-centric approach, and commitment to
                    delivering tailor-made solutions. We prioritize
                    understanding your unique requirements to provide innovative
                    and effective outcomes.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How does the development process for Generative AI solutions
                    work?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our development process involves understanding your goals,
                    designing a customized solution, developing the Generative
                    AI model, rigorous testing, and continuous optimization. We
                    ensure a transparent and collaborative approach at every
                    stage.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Can Generative AI be integrated into existing systems and
                    workflows?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, our Generative AI solutions are designed for seamless
                    integration into existing systems. We work closely with your
                    team to ensure minimal disruption and optimal performance
                    when incorporating Generative AI into your workflows
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How do you address concerns related to data privacy and
                    security in Generative AI projects?
                  </Accordion.Header>
                  <Accordion.Body>
                    Data privacy and security are paramount. We adhere to
                    industry best practices, implement robust security measures,
                    and ensure compliance with data protection regulations to
                    safeguard your sensitive information throughout the
                    Generative AI development process.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    What industries have you served with your Generative AI
                    solutions?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our Generative AI services have successfully catered to
                    various industries, including marketing, healthcare,
                    finance, e-commerce, and more. We adapt our solutions to the
                    specific needs and challenges of each industry.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    Can you provide examples of successful Generative AI
                    projects you've undertaken?
                  </Accordion.Header>
                  <Accordion.Body>
                    Certainly. Our portfolio includes projects ranging from
                    creative content generation and design automation to
                    predictive modeling and personalized customer experiences.
                    We can share detailed case studies highlighting the impact
                    of our Generative AI solutions on client success.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}



const DataEngineeringService = () => {

  const [state1, setState1] = useState("question-1");
  const handleChange1 = (value) => {
    setState1(value);
  };

  const [show, setShow] = useState(false);
  const [faqShow, setFaqShow] = useState(false);

  // Function to handle toggling faqShow state
  const toggleFaq = () => {
    setFaqShow(!faqShow);
  };

  const handleClose = () => setShow(false);
  // const handleFaqClose = () => setFaqshow(false);

  const settings = {
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const array1 = [
    {
      question: `How Can Data Engineering Benefit My Business?`,
      answer:
        "Data engineering helps businesses unlock the value of their data, enabling improved operational efficiency, better customer insights, enhanced decision-making, and competitive advantage.",
    },
    {
      question: "What Industries Can Benefit from Data Engineering Services?",
      answer:
        "Data engineering services are valuable across various industries, including healthcare, finance, retail, manufacturing, e-commerce, and more, where data plays a crucial role in operations and strategy.",
    },
    {
      question: "How Does Akkenna Ensure Data Security and Compliance?",
      answer:
        "Akkenna prioritizes data security and compliance with industry standards and regulations. We implement robust security measures, and encryption techniques, and adhere to data privacy laws to protect sensitive information.",
    },
    {
      question: "What Technologies Does Akkenna Use for Data Engineering?",
      answer:
        "Akkenna utilizes cutting-edge technologies and <a href='https://www.simplilearn.com/tutorials/big-data-tutorial/data-engineering-tools'> tools for data engineering </a>, including cloud platforms like AWS, Azure, and GCP, big data frameworks like Apache Hadoop, and Apache Spark, and data processing tools like Apache Kafka.",
    },
    {
      question:
        "How Does Akkenna Ensure the Success of Data Engineering Projects?",
      answer:
        "Akkenna ensures the success of data engineering projects through a combination of expertise, tailored solutions, collaborative approach, adherence to best practices, and continuous support throughout the project lifecycle.",
    },
    {
      question:
        "What is the Process for Engaging with Akkenna for Data Engineering Services?",
      answer:
        "To engage with Akkenna for data engineering services, simply reach out to us through our website or contact us directly. Our team will discuss your project requirements, and objectives, and provide a customized solution tailored to your needs.",
    },
    {
      question:
        "How Long Does It Take to Implement Data Engineering Solutions?",
      answer:
        "The implementation timeline for data engineering solutions varies depending on factors like project scope, complexity, and specific requirements. Akkenna works closely with clients to establish realistic timelines and deliver solutions promptly.",
    },
    {
      question: "Can Akkenna Handle Big Data Projects?",
      answer:
        "Yes, Akkenna specializes in handling big data projects, leveraging scalable technologies and advanced analytics techniques to process and analyze large volumes of data efficiently.",
    },
  ];

  return (
    <main id="DES">
      <section className="Discover">
        <Container className="Banner">
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={6}>
              <div className="Discdiv">
                <div className="DisContent">
                  <h4>
                    From Data to Action:
                  </h4>
                  <h4>
                    Discover Our Data <br /> Engineering
                    Services
                  </h4>
                </div>
                <div className="DisContent">
                  <p>
                    Quicken the process of generating and implementing useful
                    insights by utilizing <br />our
                    data engineering services and solutions on established
                    data platforms.
                  </p>
                </div>
                <div className="DisContent">
                  <button>Find Out How!</button>
                </div>
              </div>
            </Col>
            {/* </Row>
            <Row className="DiscoverImg"> */}
            <Col lg={6} className="DiscoverImg">
              <img src={BannerLeft} alt="BannerLeft" />
            </Col>
          </Row>
        </Container>
      </section>


      <section className="MobileDiscover">
        <Container className="MobileDiscoverCont">
          <Row>
            <h1>Discover Our Data Engineering
              Services</h1>
          </Row>
          <Row>
            <p>Quicken the process of generating and implementing useful
              insights by utilizing our
              data engineering services and solutions on established
              data platforms.</p>
          </Row>
          <Row className="w-100">
            <button>Find Out How!</button>
          </Row>
        </Container>
      </section>

      {/* Decoding section */}

      <section className="DecodingsMain">
        <Container fluid className="Decodings">
          <Row className="Decoding-Banner">
            <Col lg={6} className="DecodingImage">
              <img src={DecodeData} alt="" />
            </Col>
            <Col lg={6}>
              <div className="Decoding-Heading mb-2">
                <h5>
                  Decoding Data <br /> Engineering Services
                </h5>
              </div>
              <div className="Decoding-Content d-flex flex-column gap-2">
                <p>
                  Data engineering involves the design,
                  <a href="https://www.akkenna.com/website-development-company-coimbatore">
                    development{" "}
                  </a>
                  , and maintenance of robust and scalable data architectures,
                  including data pipelines, storage systems, and databases. It
                  focuses on the efficient collection, transformation, and
                  storage of data to enable analytics and decision-making. Data
                  engineering services encompass the implementation of these
                  processes, ensuring data quality, reliability, and
                  accessibility. This involves constructing data pipelines,
                  managing
                  <a href="https://aws.amazon.com/what-is/etl/#:~:text=Extract%2C%20transform%2C%20and%20load%20(,and%20machine%20learning%20(ML).">
                    ETL
                  </a>
                  (Extract, Transform, Load) workflows, and optimizing data
                  infrastructure. The goal is to empower businesses with a solid
                  foundation for handling and leveraging their data effectively.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section
        className="MobileDecodingsMain"
        onClick={() => {
          setShow(true);
        }}
      >
        <Container fluid className="d-flex justify-content-center px-0">
          <div className="MobileDecodingsRow ">
            <div className="MobileDecodingsRowImg col-2">
              <img src={corporate} alt="" />
            </div>
            <div className="col-8">
              <p>About Us</p>
              <h6>
                Decoding Data <br /> Engineering Services
              </h6>
            </div>
            <div className="col-2">
              <img src={GreaterArrow} alt="" />
            </div>
          </div>
        </Container>
      </section>

      <section className="DataContents">
        <Container>
          <div className="row  justify-content-center align-items-center d-flex flex-column flex-wr">
            <div className="col-lg-10 col-sm-12 justify-content-center align-items-center d-flex flex-column ">
              <div className="d-flex flex-column text-center ">
                <div>
                  <h4>What We Can Do For You</h4>
                </div>
                <div>

                </div>
              </div>
              <div className="Items">
                <div className="Item1">
                  <h5>
                    Data Engineering <br />
                    Consulting
                  </h5>
                </div>
                <div className="Item2">
                  <h5 className="Process2">
                    Data Processing <br /> Solutions
                  </h5>
                </div>
                <div className="Item3">
                  <h5>
                    Data <br />
                    Visualization
                  </h5>
                </div>
                <div className="Item4">
                  <h5>
                    Data Storage <br /> Solutions
                  </h5>
                </div>
                <div className="Item5">
                  <h5>
                    Data <br />
                    Governance <br /> Services
                  </h5>
                </div>
                <div className="Item6">
                  <h5>
                    Data Integration <br /> and Ingestion
                  </h5>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach section  */}

      <section className="Approach mt-5">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-center justify-content-center text-center ">
              <div className="DataEs">
                <h4> Akkenna's Data Engineering Prowess</h4>
              </div>
              <div className="DataEs">

              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center align-items-center mt-2 mb-2 ">
            <Col
              lg={10}
              className="ApproachColMain"
            >
              <Col lg={3} className="ColElement">
                <div className="contant">
                  <div>
                    <img src={Approach1} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>Expertise<br />
                      Approach</h6>
                    <p className=" mt-2">
                      As a leading data engineering company, our team offers
                      unparalleled expertise, ensuring top-quality solutions.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="ColElement">
                <div className=" contant">
                  <div>
                    <img src={Approach2} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>
                      Tailored <br />
                      Approach
                    </h6>
                    <p className=" mt-2">
                      We provide customized data engineering solutions tailored
                      to your unique needs as a data engineering company.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="ColElement">
                <div className=" contant">
                  <div>
                    <img src={Approach3} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>
                      Cutting-Edge <br />
                      Technology
                    </h6>
                    <p className=" mt-2">
                      Utilizing innovative technologies, our data engineering
                      solutions stand out for their cutting-edge approach.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="ColElement">
                <div className=" contant">
                  <div>
                    <img src={Approach4} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>
                      Proven Track <br /> Record
                    </h6>
                    <p className="mt-2">
                      Our data engineering company boasts a proven track record
                      of successful projects, earning us trust in the industry.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="ColElement">
                <div className=" contant">
                  <div>
                    <img src={Approach5} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>
                      Client-Centric
                      <br />
                      Focus
                    </h6>
                    <p className="  mt-2">
                      Client satisfaction is paramount; we prioritize
                      collaboration and transparency throughout our data
                      engineering solutions.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="ColElement">
                <div className=" contant">
                  <div>
                    <img src={Approach6} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>Scalability <br />
                      Approach</h6>
                    <p className="  mt-2">
                      Our scalable data engineering solutions ensure your
                      infrastructure can adapt to future growth seamlessly.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="ColElement">
                <div className=" contant">
                  <div>
                    <img src={Approach7} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>
                      Competitive <br /> Pricing
                    </h6>
                    <p className="  mt-2">
                      We offer competitive pricing for our data engineering
                      solutions, delivering exceptional value.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="ColElement">
                <div className=" contant">
                  <div>
                    <img src={Approach8} alt="" className="appImg" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6>
                      Continuous <br /> Support
                    </h6>
                    <p className="  mt-2">
                      With ongoing maintenance and support, we ensure the
                      continued success of your data engineering initiatives.
                    </p>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CallToAction Section */}

      <NewCallToAction
        header="Empower Your Business with Advanced Data Engineering Consulting"
        buttonText="Connect With Us"
      />


      <section className="CreatWorld">
        <Container>
          <Row className="mb-5 mt-5">
            <Col lg={6} className="MobileCreatWorld">
              <div className="bgDiv">
                <img src={DataEngineerWorld} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="HeadingDiv">
                <h4>
                  How data engineering makes <br />
                  advanced analytics more useful for businesses
                </h4>
                <p>
                  Clear data engineering processes build a strong base for
                  consistently providing insights at scale. Find out how to
                  build a good data engineering team and get the most out of
                  your business by reading our white paper.
                </p>
              </div>
            </Col>
          </Row>

        </Container>
      </section>

      <section className="CardItem">
        <Container>
          <Row className="mt-2 mb-3">
            <Col>
              <div className="d-flex flex-column gap-3 text-center align-items-center justify-content-center HeadingDiv1">
                <h3>What will you get if you use data <br /> engineering</h3>
              </div>
            </Col>
          </Row>
          <Row className="mt-1 d-flex flex-row  align-items-center justify-content-center ">
            <Col lg={4} className=" d-flex align-items-center justify-content-center ">
              <div className="DataItems">
                <img src={ACCData} alt="" />
                <h4>Accessible Data</h4>
                <p>
                  Modern data engineering solutions help unearth and make
                  <a href="https://www.mongodb.com/unstructured-data">
                    {" "}
                    unstructured digital data{" "}
                  </a>{" "}
                  accessible so your team can use it.
                </p>
              </div>
            </Col>
            <Col lg={4} className=" d-flex align-items-center justify-content-center ">
              <div className="DataItems">
                <img src={TransData} alt="" />
                <h4>Transparent Workflows</h4>
                <p>
                  Data engineering tools enable process transparency to detect
                  bottlenecks and new business opportunities.
                </p>
              </div>
            </Col>
            <Col lg={4} className=" d-flex align-items-center justify-content-center ">
              <div className="DataItems">
                <img src={TechConveg} alt="" />
                <h4>Technological Convergence</h4>
                <p>
                  Data engineering lets firms combine technology to improve
                  performance and embrace digital change
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="MobileTechEdge">
        <div>
          <h4 className="HeadSpan">
            Akkenna's Tech Edge
          </h4>
        </div>
        <div>
          <TechSlide />
        </div>
      </section>

      <section className="TechEdge">
        <Container fluid className="d-flex align-items-center justify-content-center">
          <Row className="TechEdgeRow">
            <Col lg={4}>
              <div className="TechImg">
                <img src={TechEdge1} alt="" />
              </div>
            </Col>
            <Col lg={3} className="d-flex flex-column  align-items-center justify-content-center">
              <div className="d-flex flex-column  align-items-center justify-content-center text-center mb-5 gap-3 Content">
                <h4>
                  <span className="HeadSpan">Akkenna's </span> <br /> Tech Edge
                </h4>
                <p>
                  WP ERP has been already featured in many resourceful and
                  popular media all over the world.
                </p>
                <button>Explore All</button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="TechImg">
                <img src={TechEdge2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="DataDevelopMvp">
        <Container fluid className="mainbox">

          <Row className="DataDevelopTitle">
            <h2>Transparency of the Data Engineering Process</h2>
            <h6>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h6>
          </Row>

          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={11} className="d-flex justify-content-center align-items-center">
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={7} className="DataDevelopMvpImg">
                  <img src={DataTransParency} alt="" />
                </Col>
                <Col
                  lg={4}
                  className="d-flex align-items-center justify-content-start"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className={`nav `}
                          onClick={() => {
                            handleChange1("question-1");
                          }}
                        >
                          <div className="DevelopDataRadioDiv">
                            <div className={`radiobox ${state1 === "question-1" && "active"}`}>
                              <h5>1</h5>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="radio1"
                                className="custom-radio"
                                name="questionGroup"
                                checked={state1 === "question-1"}
                                readOnly
                              />
                            </div>
                          </div>

                          <div className={`DataDevelopLabel ${state1 === "question-1" && "active"}`}>
                            <label htmlFor="radio1">
                              Raw Data Collection
                            </label>
                            <p>The initial stage involves gathering raw data from various sources, including databases, sensors, and applications.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <div
                          className={`nav `}
                          onClick={() => {
                            handleChange1("question-2");
                          }}
                        >
                          <div className="DevelopDataRadioDiv">
                            <div className={`radiobox ${state1 === "question-2" && "active"}`}>
                              <h5>2</h5>
                            </div>
                            <div>
                              <input
                                type="radio"
                                className="custom-radio"
                                id="radio2"
                                name="questionGroup"
                                checked={state1 === "question-2"}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className={`DataDevelopLabel ${state1 === "question-2" && "active"}`}>
                            <label htmlFor="radio2">
                              Data Ingestion</label>
                            <p>Raw data is ingested into the system, where it undergoes preprocessing and transformation to ensure <br></br>compatibility and consistency.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className={`nav `}
                          onClick={() => {
                            handleChange1("question-3");
                          }}
                        >
                          <div className="DevelopDataRadioDiv">
                            <div className={`radiobox ${state1 === "question-3" && "active"}`}>
                              <h5>3</h5>
                            </div>
                            <div>
                              <input
                                type="radio"
                                className="custom-radio"
                                id="radio3"
                                name="questionGroup"
                                checked={state1 === "question-3"}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className={`DataDevelopLabel ${state1 === "question-3" && "active"}`}>
                            <label htmlFor="radio3">
                              Storage                       </label>
                            <p>Processed data is stored in a centralized data repository, such as a data warehouse or data lake, for easy access <br></br>and retrieval.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className={`nav `}
                          onClick={() => {
                            handleChange1("question-4");
                          }}
                        >
                          <div className="DevelopDataRadioDiv">
                            <div className={`radiobox ${state1 === "question-4" && "active"}`}>
                              <h5>4</h5>
                            </div>
                            <div>
                              <input
                                type="radio"
                                className="custom-radio"
                                id="radio4"
                                name="questionGroup"
                                checked={state1 === "question-4"}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className={`DataDevelopLabel ${state1 === "question-4" && "active"}`}>
                            <label htmlFor="radio4">
                              ETL (Extract, Transform, Load)                        </label>
                            <p>Data undergoes the ETL process, where it is extracted from the storage, transformed into a usable format, and <br></br>loaded into the appropriate data structures.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div
                          className={`nav `}
                          onClick={() => {
                            handleChange1("question-5");
                          }}
                        >
                          <div className="DevelopDataRadioDiv lastradio">
                            <div className={`radiobox ${state1 === "question-5" && "active"}`}>
                              <h5>5</h5>
                            </div>
                            <div>
                              <input
                                type="radio"
                                className="custom-radio"
                                id="radio5"
                                name="questionGroup"
                                checked={state1 === "question-5"}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className={`DataDevelopLabel ${state1 === "question-5" && "active"}`}>
                            <label htmlFor="radio5" className="fw-bold">
                              Analysis </label>
                            <p>Finally, the transformed data is analyzed using various techniques and tools to derive valuable insights and <br></br> inform decision-making processes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="MobileDataDevelop">
        <Container className="MobileDataDevelopSerives">
          <Row>
            <Col lg={10}>
              <Row>
                <Col lg={6}>
                  <h1 className="headcont">Transparency of the Data Engineering Process</h1>
                </Col>
                <Col lg={7}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Raw Data Collection
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>The initial stage involves gathering raw data from various sources, including databases, sensors, and applications.
                        </p>
                        <img src={DataTransParency} alt="" />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Data Ingestion</Accordion.Header>
                      <Accordion.Body>
                        <p>Raw data is ingested into the system, where it undergoes preprocessing and transformation to ensure <br></br>compatibility and consistency.
                        </p>
                        <img src={DataTransParency} alt="" />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Storage
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>Processed data is stored in a centralized data repository, such as a data warehouse or data lake, for easy access <br></br>and retrieval.
                        </p>
                        <img src={DataTransParency} alt="" />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>ETL (Extract, Transform, Load)</Accordion.Header>
                      <Accordion.Body>
                        <p>Data undergoes the ETL process, where it is extracted from the storage, transformed into a usable format, and <br></br>loaded into the appropriate data structures.
                        </p>
                        <img src={DataTransParency} alt="" />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Analysis
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>Finally, the transformed data is analyzed using various techniques and tools to derive valuable insights and <br></br> inform decision-making processes.
                        </p>
                        <img src={DataTransParency} alt="" />
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>



      <section className="Slidersec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex flex-column gap-2 text-center Heading ">
                <h4>Discover Our Diverse Range of Offerings</h4>
                <p>
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Slider {...settings}>
              <Col className="HeadDiv">
                <div className="BgImg">
                  <img src={GenAiService} alt="" />
                </div>
                <div className="ContentDiv">
                  <h4>Generative AI Services</h4>
                  <img src={Arrow} alt="" />
                </div>
              </Col>
              <Col className="HeadDiv">
                <div className="BgImg">
                  <img src={WebServic} alt="" />
                </div>
                <div className="ContentDiv">
                  <h4>Website Development</h4>
                  <img src={Arrow} alt="" />
                </div>
              </Col>
              <Col className="HeadDiv">
                <div className="BgImg">
                  <img src={MobileService} alt="" />
                </div>
                <div className="ContentDiv">
                  <h4>Mobile App Development</h4>
                  <img src={Arrow} alt="" />
                </div>
              </Col>
              <Col className="HeadDiv">
                <div className="BgImg">
                  <img src={Customservic} alt="" />
                </div>
                <div className="ContentDiv">
                  <h4>Custom Software</h4>
                  <img src={Arrow} alt="" />
                </div>
              </Col>
              <Col className="HeadDiv">
                <div className="BgImg">
                  <img src={ProductServic} alt="" />
                </div>
                <div className="ContentDiv">
                  <h4>Product Engineering </h4>
                  <img src={Arrow} alt="" />
                </div>
              </Col>
              <Col className="HeadDiv">
                <div className="BgImg">
                  <img src={QualityServic} alt="" />
                </div>
                <div className="ContentDiv">
                  <h4>Quality Assurance </h4>
                  <img src={Arrow} alt="" />
                </div>
              </Col>
              <Col className="HeadDiv">
                <div className="BgImg">
                  <img src={DevopsServic} alt="" />
                </div>
                <div className="ContentDiv">
                  <h4>DevOps</h4>
                  <img src={Arrow} alt="" />
                </div>
              </Col>
            </Slider>
          </Row>
        </Container>
      </section>

      {/* NewContactForm section */}
      <NewContactForm />

      {/* NewFaq section */}
      <NewFaq array1={array1} />

      {/* NewContactForm section */}
      <NewBlogPage />


      <AboutCanva show={show} handleClose={handleClose} />

      <MobileForm />

      <MobileFaq items={array1} title={"Addressing Popular Queries with Expertise and Innovation!"} />

    </main>
  );
};

export default DataEngineeringService;
