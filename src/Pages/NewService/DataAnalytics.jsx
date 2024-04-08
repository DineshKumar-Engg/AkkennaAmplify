import { Container, Row, Col } from "react-bootstrap";
import "../../Style/NewDataAnalytics.css";
import NewBlogPage from "../../Components/NewBlogPage";
import NewContactForm from "../../Components/NewContactForm";
import NewFaq from "../../Components/NewFaq";
import NewCallToAction from "../../Components/NewCallToAction";
import { FaArrowRight } from "react-icons/fa";
import Arrow from "../../Assets/Image/NewService/DataAnalytics/rightarrowSlider.svg";
import Slider from "react-slick";
import MainImg from "../../Assets/Image/NewService/DataAnalytics/sec8mainimg.svg";

import Applicationicon from "../../Assets/Image/NewService/DataAnalytics/applicationicon.svg";
import DataAnaBanner from "../../Assets/Image/NewService/DataAnalytics/DataAnaBanner.svg";
import DataAnaModern from "../../Assets/Image/NewService/DataAnalytics/DataAnaModern.svg";

import { useEffect, useState } from "react";
import Analyt from "../../Assets/Image/NewService/DataAnalytics/Analyt.webp";
import collection from "../../Assets/Image/NewService/DataAnalytics/collection.webp";
import DataAnalyt from "../../Assets/Image/NewService/DataAnalytics/DataAnalyt.webp";
import DataInter from "../../Assets/Image/NewService/DataAnalytics/DataInter.webp";
import DataVis from "../../Assets/Image/NewService/DataAnalytics/DataVis.webp";
import DeployDoc from "../../Assets/Image/NewService/DataAnalytics/DeployDoc.webp";
import objective from "../../Assets/Image/NewService/DataAnalytics/objective.webp";
import preprocessing from "../../Assets/Image/NewService/DataAnalytics/preprocessing.webp"

import AnaAI from "../../Assets/Image/NewService/DataAnalytics/AnaAI.webp";
import AnaSat from "../../Assets/Image/NewService/DataAnalytics/AnaSat.webp";
import DataMange from "../../Assets/Image/NewService/DataAnalytics/DataMange.webp";
import DatMang from "../../Assets/Image/NewService/DataAnalytics/DatMang.webp";
import datVis from "../../Assets/Image/NewService/DataAnalytics/datVis.webp";
import EnterMange from "../../Assets/Image/NewService/DataAnalytics/EnterMange.webp";
import MangServ from "../../Assets/Image/NewService/DataAnalytics/MangServ.webp";
import secPriv from "../../Assets/Image/NewService/DataAnalytics/secPriv.webp"

import Manufa from "../../Assets/Image/NewService/DataAnalytics/Manufa.webp";
import Health from "../../Assets/Image/NewService/DataAnalytics/Health.webp";
import Transport from "../../Assets/Image/NewService/DataAnalytics/Transport.webp";
import RealEstate from "../../Assets/Image/NewService/DataAnalytics/RealEstate.webp";
import Educate from "../../Assets/Image/NewService/DataAnalytics/Educate.webp";
import Travel from "../../Assets/Image/NewService/DataAnalytics/Travel.webp";
import Retail from "../../Assets/Image/NewService/DataAnalytics/Retail.webp";
import Banking from "../../Assets/Image/NewService/DataAnalytics/Banking.webp"

import Conclise from "../../Assets/Image/NewService/DataAnalytics/Conclise.webp";
import Efficient from "../../Assets/Image/NewService/DataAnalytics/Efficient.webp";
import Icons from "../../Assets/Image/NewService/DataAnalytics/Icon.webp";
import optimize from "../../Assets/Image/NewService/DataAnalytics/optimize.webp"

import FinanicalAnaly from "../../Assets/Image/NewService/DataAnalytics/FinanicalAnaly.webp";
import supplyChain from "../../Assets/Image/NewService/DataAnalytics/supplyChain.webp";
import SalesProd from "../../Assets/Image/NewService/DataAnalytics/SalesProd.webp";
import CustomerAnaly from "../../Assets/Image/NewService/DataAnalytics/CustomerAnaly.webp"
import HRAnaly from "../../Assets/Image/NewService/DataAnalytics/HRAnaly.webp";
import AssetAnaly from "../../Assets/Image/NewService/DataAnalytics/AssetAnaly.webp"

import corporate from "../../Assets/Image/NewHome/corporate.svg";
import GreaterArrow from "../../Assets/Image/NewHome/GreaterArrow.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import GenAiService from '../../Assets/Image/NewService/DataAnalytics/GenAiService.webp'
import WebServic from '../../Assets/Image/NewService/DataAnalytics/WebServic.webp'
import MobileService from '../../Assets/Image/NewService/DataAnalytics/MobileService.webp'
import Customservic from '../../Assets/Image/NewService/DataAnalytics/Customservic.webp'
import ProductServic from '../../Assets/Image/NewService/DataAnalytics/ProductServic.webp'
import QualityServic from '../../Assets/Image/NewService/DataAnalytics/QualityServic.webp'
import DevopsServic from '../../Assets/Image/NewService/DataAnalytics/DevopsServic.webp'
import Accordion from "react-bootstrap/Accordion";
import MobileForm from "../../Components/MobileForm";
import MobileFaq from "../../Components/MobileFaq";


function AboutCanva({ show, handleClose }) {
  return (
    <section className="DataAnaABoutCanva">
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
              <img src={DataAnaModern} alt="" />
            </Row>
            <Row className="MobileDecodingsCanva">
              <Col lg={12}>
                <h5>
                  Data Analytics and Its Significance in the Modern Business
                  Landscape
                </h5>
              </Col>
              <Col lg={12}>
                <p className="mb-2 mr-5 ">
                  Analyzing, cleaning, manipulating, and modeling data to
                  extract meaningful information, make inferences, and aid in
                  decision-making is known as data analytics. It involves the
                  use of various techniques and tools to analyze large sets of
                  data, uncover patterns, trends, and insights, and make
                  informed business or strategic decisions.
                </p>
                <p>
                  Data is king in the fast-paced business world of today.
                  Companies are creating and collecting an enormous amount of
                  data, which can help them learn a lot about their customers,
                  the market, and how to run their businesses more efficiently.
                  The process of gathering, organizing, and analyzing data,
                  called data analytics, is very important for getting these
                  insights. This helps people make better decisions, run their
                  businesses more efficiently, and find new opportunities.
                </p>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}




const DataAnalyticstaAnalytics = () => {
  const [state, setState] = useState("question-1");
  const [state1, setState1] = useState("question-1");
  const [show, setShow] = useState(false);
  const handleChange = (value) => {
    setState(value);
  };

  const handleChange1 = (value) => {
    setState1(value);
  };


  var DataSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  var DataAnaSetting = {
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplayTimeout: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings = {
    centerMode: true,
    speed: 500,
    arrows: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    slidesToShow: 4,
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
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
    ],
  };

  const handleClose = () => setShow(false);

  const sampleArray = [
    {
      question: `<h6>1. What does "Big Data Analytics" mean?</h6>`,
      answer: `<p>Big Data analytics analyzes "Big Data," large, complex datasets, to identify insights, patterns, trends, and linkages. Many "Big Data" databases are too large, diverse, and fast-moving for ordinary data processing. Statistical techniques, machine learning, and data mining extract useful data from huge datasets in Big Data Analytics. Big Data Analytics aids finance, healthcare, marketing, and other organizations in data-driven decision-making, efficiency, and competition. Real-time data processing and analysis from several sources yields crucial business insights.</p>`,
    },
    {
      question: `<h6>2. How does TruBI, a Visualization tool, enhance the utilization of Big Data Analytics?</h6>`,
      answer: `<p>TruBI improves Big Data Analytics by showing complicated datasets clearly. This makes it easy to see trends and patterns so that smart decisions can be made. The tool makes it easier to understand data, so users can easily get information they can use.</p>`,
    },
    {
      question: `<h6>3. How has Datamatics applied Big Data & Analytics to benefit businesses?</h6>`,
      answer: `<p>Using Big Data and analytics to help businesses has worked well for Datamatics, giving them useful information to help them make decisions, run their businesses more efficiently, and grow strategically.</p>`,
    },
    {
      question: `<h6>4. Can you provide instances where Datamatics applied Big Data & Analytics to benefit businesses?</h6>`,
      answer: `<p>With the help of Datamatics, organisations have been able to optimise their operations, improve their decision-making with data-driven insights, and increase their overall competitiveness. This has been accomplished through the effective utilisation of Big Data and Analytics.</p>`,
    },
    {
      question: `<h6>5. How does the use of Data Lakes enhance Big Data Analytics?</h6>`,
      answer: `<p>Data lakes make Big Data Analytics easier by giving us a central place to store huge amounts of different kinds of data. This lets businesses quickly process, study, and learn useful things from both structured and unstructured data in real-time, which leads to a broader and more flexible approach to data analytics.</p>`,
    },
    {
      question: `<h6>6. How much does it cost to make AI systems that are generative?</h6>`,
      answer: `<p>Many different types of data can be hard to store, process, and analyze while managing big datasets. The most common problems are making sure the data is correct, fixing problems with scalability, and figuring out how to use complicated tools. The good use of Big Data and Analytics can still give us useful information that helps us make smart decisions, even with these problems.</p>`,
    },
    {
      question: `<h6>7. What advantages do Cloud-based Big Data Analytics Services offer for data-intensive practices like Research & Analytics?</h6>`,
      answer: `<p>Cloud-based Big Data Analytics Services improve scalability, which lets researchers handle large datasets quickly. They give you cheap access to powerful computing tools and make it easy to work together on projects that involve a lot of data.</p>`,
    },
    {
      question: `<h6>8. Can data analytics assist in predicting equipment maintenance needs in manufacturing?</<h6>`,
      answer: `<p>Predictive analytics does examine data from equipment to estimate upcoming maintenance needs. This helps to minimize operational disruptions, reduce downtime, and extend the life of equipment.</p>`,
    },
  ];
  return (
    <main id="DataAnalytics">

      <section className="DataAnalyticsBanner">
        <Container fluid className="Bgimg mt-5 mb-5">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="RowDiv">
                  <div className="CDiv">
                    <h4>
                      Professional Data Driven <br />Cum Data  Analytics
                      Services Providers
                    </h4>
                  </div>

                  <div className="CDiv">
                    <p>
                      By mapping all of a business's data sources, our Data
                      Analytics Services help <br /> businesses find and
                      understand key details that help them make smart
                      decisions.
                    </p>
                  </div>
                  <div className="CDiv">
                    <button>Connect for Analytics!</button>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="DataAnaBanner">
                <img src={DataAnaBanner} alt="" />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section className="MobileAnalyticBanner">
        <Container className="MobileAnalytCont">
          <Row>
            <h1>Professional Data Driven
              Cum Data  Analytics
              Services Providers</h1>
          </Row>
          <Row>
            <p>Quicken the process of generating and implementing useful
              insights by utilizing our
              data engineering services and solutions on established
              data platforms.</p>
          </Row>
          <Row className="w-100">
            <button>Connect for Analytics!</button>
          </Row>
        </Container>
      </section>




      <section className="DaSectionTwo">
        <Container>
          <Row className="Decodes-bg">
            <Col lg={6} className="DataAnaModern">
              <img src={DataAnaModern} alt="" />
            </Col>
            <Col lg={6}>
              <div className="decodes mb-3">
                <h5>
                  Data Analytics and Its Significance in the Modern Business
                  Landscape
                </h5>
              </div>
              <div className="decodes mb-5">
                <p className="mb-2 mr-5 ">
                  Analyzing, cleaning, manipulating, and modeling data to
                  extract meaningful information, make inferences, and aid in
                  decision-making is known as data analytics. It involves the
                  use of various techniques and tools to analyze large sets of
                  data, uncover patterns, trends, and insights, and make
                  informed business or strategic decisions.
                </p>
                <p>
                  Data is king in the fast-paced business world of today.
                  Companies are creating and collecting an enormous amount of
                  data, which can help them learn a lot about their customers,
                  the market, and how to run their businesses more efficiently.
                  The process of gathering, organizing, and analyzing data,
                  called data analytics, is very important for getting these
                  insights. This helps people make better decisions, run their
                  businesses more efficiently, and find new opportunities.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="MobileAboutMain"
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
                Data Analytics and Modern Business
                Landscape
              </h6>
            </div>
            <div className="col-2">
              <img src={GreaterArrow} alt="" />
            </div>
          </div>
        </Container>
      </section>




      <section className="akkennaDAsec3">
        <Container>
          <Row className="mt-5 mb-5 d-flex flex-row ms-4 justify-content-center align-items-center ">
            <Col
              lg={4}
              className=" d-flex flex-column justify-content-center align-items-center"
            >
              <div className="Heading row">
                <Col lg={10} className="px-0">
                  <h4>Akkenna’s Data Analytics and Solutions </h4>
                </Col>
                <Col lg={10} className="px-0">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </Col>
              </div>
            </Col>
            <Col lg={8} className="d-flex flex-row flex-wrap gap-4">
              <div className="ContentDiv col-lg-4">
                <div className="ImageDiv">
                  <img src={AnaSat} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Data and Analytics Strategy</p>
                </div>
              </div>
              <div className="ContentDiv  col-lg-3">
                <div className="ImageDiv">
                  <img src={secPriv} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Data Security and Privacy</p>
                </div>
              </div>
              <div className="ContentDiv  col-lg-3">
                <div className="ImageDiv">
                  <img src={datVis} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Reporting and Visualization</p>
                </div>
              </div>
              <div className="ContentDiv  col-lg-3">
                <div className="ImageDiv">
                  <img src={AnaAI} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Advanced Analytics Using AI</p>
                </div>
              </div>
              <div className="ContentDiv  col-lg-3">
                <div className="ImageDiv">
                  <img src={DatMang} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Cloud Data Management</p>
                </div>
              </div>
              <div className="ContentDiv  col-lg-3">
                <div className="ImageDiv">
                  <img src={MangServ} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Analytics Managed Service</p>
                </div>
              </div>
              <div className="ContentDiv  col-lg-3">
                <div className="ImageDiv">
                  <img src={DataMange} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Master Data Management</p>
                </div>
              </div>
              <div className="ContentDiv  col-lg-3">
                <div className="ImageDiv">
                  <img src={EnterMange} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Enterprise Data Management</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="DataSolutionsMobile">
        <Container>
          <Row className="mb-4">
            <h2>Akkenna’s Data Analytics </h2>
          </Row>
          <Row className="mb-2">
            <Slider {...DataAnaSetting}>
              <div className="MobileContentDiv col-lg-4">
                <div className="MobileImageDiv">
                  <img src={AnaSat} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Data and Analytics Strategy</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={secPriv} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Data Security and Privacy</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={datVis} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Reporting and Visualization</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={AnaAI} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Advanced Analytics Using AI</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={DatMang} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Cloud Data Management</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={MangServ} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Analytics Managed Service</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={DataMange} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Master Data Management</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={EnterMange} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Enterprise Data Management</p>
                </div>
              </div>
            </Slider>
          </Row>
        </Container>
      </section>




      <section className="DataSliderMain">
        <Container>
          <Row className="w-100 d-flex text-center justify-content-center align-items-center">
            <Col lg={10} sm={8} className="d-flex justify-content-center">
              <h2>Our Process On Data Analytics Services and Solutions</h2>
            </Col>
            <Col lg={7}>
              <p>Begin your generative AI journey with a comprehensive consultation from a
                leading generative AI development company.</p>
            </Col>
          </Row>
          <Row className="DataProcessSlider">
            <Slider {...DataSetting}>
              <div className="DataProcess">
                <div>
                  <img src={objective} alt="" />
                </div>
                <div>
                  <p>Define Objectives <br />and Questions</p>
                </div>
              </div>
              <div className="DataProcess">
                <div>
                  <img src={collection} alt="" />
                </div>
                <div>
                  <p>Data <br />
                    Collection</p>
                </div>
              </div>
              <div className="DataProcess">
                <div>
                  <img src={preprocessing} alt="" />
                </div>
                <div>
                  <p>Data Cleaning <br />and Preprocessing</p>
                </div>
              </div>
              <div className="DataProcess">
                <div>
                  <img src={Analyt} alt="" />
                </div>
                <div>
                  <p>Exploratory Data <br />Analysis</p>
                </div>
              </div>
              <div className="DataProcess">
                <div>
                  <img src={DataAnalyt} alt="" />
                </div>
                <div>
                  <p>Data <br />
                    Analysis</p>
                </div>
              </div>
              <div className="DataProcess">
                <div>
                  <img src={DataVis} alt="" />
                </div>
                <div>
                  <p>Data <br />
                    Visualization</p>
                </div>
              </div>
              <div className="DataProcess">
                <div>
                  <img src={DataInter} alt="" />
                </div>
                <div>
                  <p>Data <br />
                    Interpretation</p>
                </div>
              </div>
              <div className="DataProcess">
                <div>
                  <img src={DeployDoc} alt="" />
                </div>
                <div>
                  <p>Deployment and <br />Documentation</p>
                </div>
              </div>
            </Slider>
          </Row>
        </Container>
      </section>







      <section>
        <NewCallToAction
          header="Optimize Your Operations with Data Analytics. Schedule a Consultation Today!"
          buttonText="Let’s Talk"
        />
      </section>

      <section className="application">
        <Container className="applicationbgimg">
          <Row className="contentbox justify-content-center">
            <Col lg={11} className="applicationColMain contenttext ">
              <Row className="w-100">
                <Col lg={7} className="analyticsleft">
                  <Row className="ApplicationRow">
                    <Col lg={12} className="topboxhead">
                      <h3>Applications of Data Analytics <br />in Different Domains</h3>
                    </Col>
                    <Col lg={11} className="topboxPara">
                      <p className="mb-3">
                        As a data analytics company, Akkenna helps companies in many
                        different industries combine, gather, and study different kinds
                        of data from many different sources so they can meet their most
                        demanding departmental and enterprise-level needs.
                      </p>
                    </Col>
                    <Col lg={12}>
                      <Row className="applicationDesktop">
                        <Col lg={12} className="DataTimeline">
                          <hr />
                        </Col>
                        <Col lg={12} className="applicationTime">
                          <div
                            className={`nav ${state1 === "question-1" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-1");
                            }}
                          >
                            <div className="right-icon">
                              <button
                                className="bordered analyticsleft"
                                type="checkbox"

                              ></button>
                            </div>
                            <div>
                              <h5>Manufacturing</h5>
                            </div>
                          </div>
                          <div
                            className={`nav ${state1 === "question-2" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-2");
                            }}
                          >
                            <div className="right-icon">
                              <button
                                className="bordered analyticsleft "
                                type="checkbox"
                              ></button>
                            </div>
                            <div>
                              <h5>Healthcare</h5>
                            </div>
                          </div>
                          <div
                            className={`nav ${state1 === "question-3" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-3");
                            }}
                          >
                            <div className="right-icon">
                              <button
                                className="bordered analyticsleft"
                                type="checkbox"
                              ></button>
                            </div>
                            <div>
                              <h5>Transportation</h5>
                            </div>
                          </div>
                          <div
                            className={`nav ${state1 === "question-4" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-4");
                            }}
                          >
                            <div className="right-icon">
                              <button
                                className="bordered analyticsleft"
                                type="checkbox"
                              ></button>
                            </div>
                            <div>
                              <h5>Real Estate</h5>
                            </div>
                          </div>
                          <div
                            className={`nav ${state1 === "question-5" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-5");
                            }}
                          >
                            <div className="right-icon">
                              <button
                                className="bordered analyticsleft"
                                type="checkbox"
                              ></button>
                            </div>
                            <div>
                              <h5>Education</h5>
                            </div>
                          </div>
                          <div
                            className={`nav ${state1 === "question-6" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-6");
                            }}
                          >
                            <div className="right-icon ">
                              <button
                                className="bordered analyticsleft"
                                type="checkbox"
                              ></button>
                            </div>
                            <div>
                              <h5>Travel</h5>
                            </div>
                          </div>
                          <div
                            className={`nav ${state1 === "question-7" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-7");
                            }}
                          >
                            <div className="right-icon ">
                              <button
                                className="bordered analyticsleft"
                                type="checkbox"
                              ></button>
                            </div>
                            <div>
                              <h5>Retail</h5>
                            </div>
                          </div>
                          <div
                            className={`nav ${state1 === "question-8" && "active"
                              }`}
                            onClick={() => {
                              handleChange1("question-8");
                            }}
                          >
                            <div className="right-icon ">
                              <button type="checkbox"></button>
                            </div>
                            <div>
                              <h5>Banking</h5>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                  </Row>
                </Col>
                <Col
                  lg={5}
                  className="d-flex align-items-center justify-content-center containerbox"
                >
                  {state1 === "question-1" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={Manufa} alt="icon" />
                      </div>
                      <div>
                        <h4>Manufacturing</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            Monitoring and optimizing equipment performance.
                          </li>
                          <li>
                            Manufacturing quality improvement.
                          </li>
                          <li>Equipment upkeep scheduling.</li>
                          <li>Forecasting and optimizing power.</li>
                          <li>Analyzing production loss causes.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state1 === "question-2" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={Health} alt="icon" />
                      </div>
                      <div>
                        <h4>Healthcare</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            Monitor patient health, and warn as needed.
                          </li>
                          <li>
                            Optimization of patient care.
                          </li>
                          <li>Risk assessment and individualized care options.</li>
                          <li>Detecting healthcare fraud.</li>
                          <li>Healthcare workers' workload estimation and shift optimization.</li>
                          <li>Space and equipment optimization in clinics.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state1 === "question-3" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={Transport} alt="icon" />
                      </div>
                      <div>
                        <h4>Transportation</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            Optimize capacity based on delivery, vehicle availability, and staff shifts.
                          </li>
                          <li>
                            Vehicle demand predictions.
                          </li>
                          <li>Predicting optimal fuel levels from driving habits.</li>
                          <li>We use IoT data analytics to deliver safely.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state1 === "question-4" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={RealEstate} alt="icon" />
                      </div>
                      <div>
                        <h4>Real Estate</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            Detailed portfolio management including costs and cash-flow estimates.
                          </li>
                          <li>
                            Tracking rental, occupancy, and other property performance KPIs.</li>
                          <li>Multidimensional client segmentation with AI-powered targeting suggestions.</li>
                          <li>Analysis of market trends and property values to aid investment decisions.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state1 === "question-5" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={Educate} alt="icon" />
                      </div>
                      <div>
                        <h4>Education</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Performance statistics and intervention notifications for students.</li>
                          <li>Understanding learning platform usage helps improve teaching and learning.</li>
                          <li>Optimizing resource allocation with enrollment predictions.</li>
                          <li>Teacher performance analysis and top talent recruiting and retention.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state1 === "question-6" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={Travel} alt="icon" />
                      </div>
                      <div>
                        <h4>Travel</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Analyzing service quality and personnel performance.</li>
                          <li>Demand forecasting to maximize hotel, flight, and other service income.</li>
                          <li>Analytics for service quality and employee performance.</li>
                          <li>To improve CRM, tracking and analyzing consumer contacts, preferences, and feedback.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state1 === "question-7" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={Retail} alt="icon" />
                      </div>
                      <div>
                        <h4>Retail</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Sales and profitability analysis for retail businesses.</li>
                          <li>Forecasting and demand analysis.</li>
                          <li>Multi-tier inventory optimization.</li>
                          <li>Optimizing assortment and merchandising.</li>
                          <li>Smart product promotion suggestions based on data.</li>

                        </ul>
                      </div>
                    </div>
                  )}
                  {state1 === "question-8" && (
                    <div className="analytics-right">
                      <div className="icon">
                        <img src={Banking} alt="icon" />
                      </div>
                      <div>
                        <h4>Banking</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Bank stability indicators are monitored continuously.</li>
                          <li>Predictions for institutions.</li>
                          <li>360-degree customer views.</li>
                          <li>Finding cross- and up-sells.</li>
                          <li>Customer-service management tips.</li>
                          <li>Early market, credit, and operational risk mitigation using what-if modeling.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
              <Row className="applicationMobile">
                <div className="applicationMobileDiv">
                  <Col lg={12} className="DataTimeline">
                    <hr />
                  </Col>
                  <Col lg={12} className="applicationTime">
                    <div
                      className={`nav ${state1 === "question-1" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-1");
                      }}
                    >
                      <div className="right-icon">
                        <button
                          className="bordered analyticsleft"
                          type="checkbox"

                        ></button>
                      </div>
                      <div>
                        <h5>Manufacturing</h5>
                      </div>
                    </div>
                    <div
                      className={`nav ${state1 === "question-2" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-2");
                      }}
                    >
                      <div className="right-icon">
                        <button
                          className="bordered analyticsleft "
                          type="checkbox"
                        ></button>
                      </div>
                      <div>
                        <h5>Healthcare</h5>
                      </div>
                    </div>
                    <div
                      className={`nav ${state1 === "question-3" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-3");
                      }}
                    >
                      <div className="right-icon">
                        <button
                          className="bordered analyticsleft"
                          type="checkbox"
                        ></button>
                      </div>
                      <div>
                        <h5>Transportation</h5>
                      </div>
                    </div>
                    <div
                      className={`nav ${state1 === "question-4" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-4");
                      }}
                    >
                      <div className="right-icon">
                        <button
                          className="bordered analyticsleft"
                          type="checkbox"
                        ></button>
                      </div>
                      <div>
                        <h5>Real Estate</h5>
                      </div>
                    </div>
                    <div
                      className={`nav ${state1 === "question-5" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-5");
                      }}
                    >
                      <div className="right-icon">
                        <button
                          className="bordered analyticsleft"
                          type="checkbox"
                        ></button>
                      </div>
                      <div>
                        <h5>Education</h5>
                      </div>
                    </div>
                    <div
                      className={`nav ${state1 === "question-6" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-6");
                      }}
                    >
                      <div className="right-icon ">
                        <button
                          className="bordered analyticsleft"
                          type="checkbox"
                        ></button>
                      </div>
                      <div>
                        <h5>Travel</h5>
                      </div>
                    </div>
                    <div
                      className={`nav ${state1 === "question-7" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-7");
                      }}
                    >
                      <div className="right-icon ">
                        <button
                          className="bordered analyticsleft"
                          type="checkbox"
                        ></button>
                      </div>
                      <div>
                        <h5>Retail</h5>
                      </div>
                    </div>
                    <div
                      className={`nav ${state1 === "question-8" && "active"
                        }`}
                      onClick={() => {
                        handleChange1("question-8");
                      }}
                    >
                      <div className="right-icon ">
                        <button type="checkbox"></button>
                      </div>
                      <div>
                        <h5>Banking</h5>
                      </div>
                    </div>
                  </Col>
                </div>
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

      <section className="sec8">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="ImgDiv">
                <img src={MainImg} alt="" />
              </div>
            </Col>
            <Col lg={8} className="ColDiv BgImgDiv">
              <Row>
                <Col className="d-flex flex-column align-items-center justify-content-center text-start Heading mt-4">
                  <h4>
                    The Benefits of Akkenna as Your <br /> Analytics Partner
                  </h4>
                </Col>
              </Row>
              <Row className="d-flex flex-row gap-2">
                <Col lg={5} className="ContentCol">
                  <div className="imgDiv">
                    <img src={Efficient} alt="" />
                  </div>
                  <div className="ContentDiv">
                    <h4 className="mb-2">Efficient Automation</h4>
                    <p>
                      We set up self-service BI and automated data management
                      and governance processes so that you can easily make
                      reports on the fly without knowing how to code and so that
                      your IT team doesn't have to handle data by hand
                    </p>
                  </div>
                </Col>
                <Col lg={5} className="ContentCol">
                  <div className="imgDiv">
                    <img src={Conclise} alt="" />
                  </div>
                  <div className="ContentDiv">
                    <h4 className="mb-2">Clear and Concise Reporting</h4>
                    <p>
                      We make the most important analytics insights stand out in
                      each report and make them easy to read at a glance by
                      using a variety of data visualization methods.
                    </p>
                  </div>
                </Col>
                <Col lg={5} className="ContentCol">
                  <div className="imgDiv">
                    <img src={Icons} alt="" />
                  </div>
                  <div className="ContentDiv">
                    <h4 className="mb-2">Consistent Findings Derived From Credible Data</h4>
                    <p>
                      We bring together all of your different data sources into a DWH, which acts as a single source of truth for analytics across the whole company.

                    </p>
                  </div>
                </Col>
                <Col lg={5} className="ContentCol">
                  <div className="imgDiv">
                    <img src={optimize} alt="" />
                  </div>
                  <div className="ContentDiv">
                    <h4 className="mb-2">Optimizing Data Analytics</h4>
                    <p>
                      As a professional analytics consulting firm, we don't just
                      make reports; our goal is to help you get the most out of
                      your analytics solution and find new ways to improve
                      productivity and cut costs that are hidden in your data.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sec8Mobile">
        <Container>
          <Row>
            <Col className="d-flex flex-column align-items-center justify-content-center text-start Heading mt-4">
              <h4>
                The Benefits of Akkenna as Your <br /> Analytics Partner
              </h4>
            </Col>
          </Row>
          <Row className="mb-2">
            <Slider {...DataAnaSetting}>
              <div className="MobileContentDiv col-lg-4">
                <div className="MobileImageDiv">
                  <img src={Efficient} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Efficient Automation</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={Conclise} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Clear and Concise Reporting</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={Icons} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Consistent Credible Data</p>
                </div>
              </div>
              <div className="MobileContentDiv  col-lg-3">
                <div className="MobileImageDiv">
                  <img src={optimize} alt="" />
                </div>
                <div className="paraDiv">
                  <p>Optimizing Data Analytics</p>
                </div>
              </div>

            </Slider>
          </Row>
        </Container>
      </section>


      <section className="Dasection9">
        <Container>
          <Row className="rowmain">
            <Col
              lg={12}
              className="d-flex flex-column justify-content-center text-center my-5 "
            >
              <h3 className="headcontent">By region of analytics</h3>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </Col>

            <Col lg={12} className="d-flex justify-content-between ">
              <Row className="w-100">
                <Col lg={4} className="analytics-left">
                  <div
                    className={`nav py-2 px-3 ${state === "question-1" && "active"
                      }`}
                    onClick={() => {
                      handleChange("question-1");
                    }}
                  >
                    <div>
                      <h5>Financial Analytics</h5>
                    </div>
                    <div className="right-icon">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div
                    className={`nav py-2 px-3 ${state === "question-2" && "active"
                      }`}
                    onClick={() => {
                      handleChange("question-2");
                    }}
                  >
                    <div>
                      <h5>Supply chain Analytics</h5>
                    </div>
                    <div className="right-icon">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div
                    className={`nav py-2 px-3 ${state === "question-3" && "active"
                      }`}
                    onClick={() => {
                      handleChange("question-3");
                    }}
                  >
                    <div>
                      <h5>Sales and Product Analytics</h5>
                    </div>
                    <div className="right-icon">
                      <FaArrowRight />
                    </div>
                  </div>

                </Col>
                <Col lg={4} className="analytics-left">
                  <div
                    className={`nav py-2 px-3 ${state === "question-4" && "active"
                      }`}
                    onClick={() => {
                      handleChange("question-4");
                    }}
                  >
                    <div>
                      <h5>Customer Analytics</h5>
                    </div>
                    <div className="right-icon">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div
                    className={`nav py-2 px-3 ${state === "question-5" && "active"
                      }`}
                    onClick={() => {
                      handleChange("question-5");
                    }}
                  >
                    <div>
                      <h5>HR Analytics</h5>
                    </div>
                    <div className="right-icon">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div
                    className={`nav py-2 px-3 ${state === "question-6" && "active"
                      }`}
                    onClick={() => {
                      handleChange("question-6");
                    }}
                  >
                    <div>
                      <h5>Asset Analytics</h5>
                    </div>
                    <div className="right-icon">
                      <FaArrowRight />
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="d-flex align-items-center">
                  {state === "question-1" && (
                    <div className="analytics-right">
                      <div>
                        <img src={FinanicalAnaly} alt="icon" />
                      </div>
                      <div>
                        <h4>Financial Analytics</h4>
                      </div>
                      <div>
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
                  {state === "question-2" && (
                    <div className="analytics-right">
                      <div>
                        <img src={supplyChain} alt="icon" />
                      </div>
                      <div>
                        <h4>Supply chain Analytics</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Demand drivers, forecasting, and planning consumer demand.</li>
                          <li>Assessing supplier performance.</li>
                          <li>Predictive routing.</li>
                          <li>Inventory planning and management to fulfill demand and avoid stockouts.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-3" && (
                    <div className="analytics-right">
                      <div>
                        <img src={SalesProd} alt="icon" />
                      </div>
                      <div>
                        <h4>Sales and Product Analytics</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Analytics on sales channels.</li>
                          <li>Analytics for pricing strategy.</li>
                          <li>Trend-spotting and sales prediction.</li>
                          <li>Analyzing product performance.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-4" && (
                    <div className="analytics-right">
                      <div>
                        <img src={CustomerAnaly} alt="icon" />
                      </div>
                      <div>
                        <h4>Customer Analytics</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Client behavior analysis and prediction.</li>
                          <li>For targeted sales and marketing, customer segmentation.</li>
                          <li>Extended customer lifetime value via personalized cross-selling and upselling.</li>
                          <li>Attrition prediction and churn risk management.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-5" && (
                    <div className="analytics-right">
                      <div>
                        <img src={HRAnaly} alt="icon" />
                      </div>
                      <div>
                        <h4>HR Analytics</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Performance analysis of employees/departments.</li>
                          <li>Analyzing employee satisfaction.</li>
                          <li>Management and enhancement of employee retention.</li>
                          <li>Assessment and improvement of hiring strategies.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {state === "question-6" && (
                    <div className="analytics-right">
                      <div>
                        <img src={AssetAnaly} alt="icon" />
                      </div>
                      <div>
                        <h4>Asset Analytics</h4>
                      </div>
                      <div>
                        <ul>
                          <li>Monitoring and tracking assets live.</li>
                          <li>Strategizing asset maintenance, predictive, and preventive maintenance.</li>
                          <li>Planning asset purchases.</li>
                          <li>Analysis of asset consumption, planning, and scheduling </li>
                          <li>modernization/replacement/disposal.</li>

                        </ul>
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="DataAnaRegion">
        <Container className="">
          <Row className="rowmain">
            <Col
              lg={10}
              className="d-flex flex-column justify-content-center text-center mt-2 mb-3"
            >
              <h3 className="headcontent">By region of analytics</h3>
            </Col>
          </Row>
          <Row className="MobileDataDevelopSerives">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Financial Analytics
                </Accordion.Header>
                <Accordion.Body>
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

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Supply chain Analytics</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Demand drivers, forecasting, and planning consumer demand.</li>
                    <li>Assessing supplier performance.</li>
                    <li>Predictive routing.</li>
                    <li>Inventory planning and management to fulfill demand and avoid stockouts.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Sales and Product Analytics
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Analytics on sales channels.</li>
                    <li>Analytics for pricing strategy.</li>
                    <li>Trend-spotting and sales prediction.</li>
                    <li>Analyzing product performance.</li>
                  </ul>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>HR Analytics</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Performance analysis of employees/departments.</li>
                    <li>Analyzing employee satisfaction.</li>
                    <li>Management and enhancement of employee retention.</li>
                    <li>Assessment and improvement of hiring strategies.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Customer Analytics
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Client behavior analysis and prediction.</li>
                    <li>For targeted sales and marketing, customer segmentation.</li>
                    <li>Extended customer lifetime value via personalized cross-selling and upselling.</li>
                    <li>Attrition prediction and churn risk management.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Asset Analytics
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Monitoring and tracking assets live.</li>
                    <li>Strategizing asset maintenance, predictive, and preventive maintenance.</li>
                    <li>Planning asset purchases.</li>
                    <li>Analysis of asset consumption, planning, and scheduling </li>
                    <li>modernization/replacement/disposal.</li>

                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>



      <section>
        <NewFaq array1={sampleArray} />
      </section>

      <section>
        <NewContactForm />
      </section>

      <section>
        <NewBlogPage />
      </section>

      <AboutCanva show={show} handleClose={handleClose} />

      <MobileForm />

      <MobileFaq items={sampleArray} title={"Addressing Popular Queries with Expertise and Innovation!"} />

    </main>
  );
};
export default DataAnalyticstaAnalytics;
