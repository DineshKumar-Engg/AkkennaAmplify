import React, { useEffect, useRef, useState } from "react";
import "../../Style/NewHomePage.css";
import HomeBanner from "../../Assets/Image/NewHome/Banner.png";
import { Col, Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import AboutLeftImage from "../../Assets/Image/NewHome/AboutImage.svg";
import HomeTickBlue from "../../Assets/Image/NewHome/HomeTickBlue.png";
import HomeTickPink from "../../Assets/Image/NewHome/HomeTickPink.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Email from "../../Assets/Image/NewHome/Bemail.svg";
import Option from "../../Assets/Image/NewHome/BOption.svg";
import Phone from "../../Assets/Image/NewHome/Bphone.svg";
import AIIcon from "../../Assets/Image/NewHome/AIIcon.svg";
import GenAICon from "../../Assets/Image/NewHome/GenAIIcon.svg";
import MobileAppIcon from "../../Assets/Image/NewHome/MobileAppIcon.svg";
import WebIcon from "../../Assets/Image/NewHome/WebIcon.svg";
import UIUXIcon from "../../Assets/Image/NewHome/UIUXIcon.svg";
import CouldIcon from "../../Assets/Image/NewHome/CouldIcon.svg";
import ManageIcon from "../../Assets/Image/NewHome/ManageIcon.svg";
import MoreIcon from "../../Assets/Image/NewHome/MoreIcon.svg";
import ProductIcon from "../../Assets/Image/NewHome/ProductIcon.svg";
import ProductImage from "../../Assets/Image/NewHome/webProduct.svg";
import Accordion from "react-bootstrap/Accordion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import Slider from "react-slick";
import Github from "../../Assets/Image/NewHome/Github_icon.svg";
import python from "../../Assets/Image/NewHome/Python_icon.svg";
import Cprogram from "../../Assets/Image/NewHome/Cprgm_icon.svg";
import Aws from "../../Assets/Image/NewHome/Aws_icon.svg";
import Docker from "../../Assets/Image/NewHome/Docker_icon.svg";
import Java from "../../Assets/Image/NewHome/Java_icon.svg";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cardEye from "../../Assets/Image/NewHome/cardEye.svg";
import cardTime from "../../Assets/Image/NewHome/cardTime.svg";
import ProdImage from "../../Assets/Image/NewHome/ProdLogo.png";
import prodIconImage from "../../Assets/Image/NewHome/prodIconImage.svg";
import NetGen from "../../Assets/Image/NewHome/NetGen.svg";
import IntegratMethd from "../../Assets/Image/NewHome/IntegratMethd.svg";
import ProgresCreat from "../../Assets/Image/NewHome/ProgresCreat.svg";
import CandidColbrate from "../../Assets/Image/NewHome/CandidColbrate.svg";
import ArrowCardIcon from "../../Assets/Image/NewHome/ArrowCardIcon.svg";
import ButtonArrow from "../../Assets/Image/NewHome/ButtonArrow.svg";
import MobileMeet from "../../Assets/Image/NewHome/meet.svg";
import MobileIndusServe from "../../Assets/Image/NewHome/IndusServeMobile.png";
import MobileWhowe from "../../Assets/Image/NewHome/whowe.svg";
import Latestwe from "../../Assets/Image/NewHome/LatestTe.svg";
import CustomizeMe from "../../Assets/Image/NewHome/CustomZip.svg";
import corporate from "../../Assets/Image/NewHome/corporate.svg";
import GreaterArrow from "../../Assets/Image/NewHome/GreaterArrow.svg";
import AIGif from "../../Assets/Image/NewHome/AIGif.gif";
import GenerativeAIGif from "../../Assets/Image/NewHome/GenerativeAIGif.gif";
import MobileAppGif from "../../Assets/Image/NewHome/MobileAppGif.gif";
import UIUXGif from "../../Assets/Image/NewHome/UIUXGif.gif";
import CloudGif from "../../Assets/Image/NewHome/CloudGif.gif";
import HireGif from "../../Assets/Image/NewHome/HireGif.gif";
import WebGif from "../../Assets/Image/NewHome/WebDevGif.gif";
import FormButton from "../../Assets/Image/NewHome/formButton.svg";
import GenAIMin from "../../Assets/Image/NewHome/GenAIMin.svg";
import RehabpyMin from "../../Assets/Image/NewHome/RehabpyMin.svg";
import FestivMin from "../../Assets/Image/NewHome/FestivMin.svg";
import EvloutionBlog from "../../Assets/Image/NewHome/EvloutionBlog.svg";
import WebDevBlog from "../../Assets/Image/NewHome/WebDevBlog.svg";
import TopDevpBlog from "../../Assets/Image/NewHome/TopDevpBlog.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import NewContactForm from "../../Components/NewContactForm";
import NewFooter from "../../Components/NewMobileFooter";

function AboutCanva({ show, handleClose }) {
  return (
    <section className="homeAboutCanva">
      <Offcanvas
        id="homeAboutCanva"
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="homeAboutCanvaText">
            <Row className="homeAboutImg">
              <img src={AboutLeftImage} alt="" />
            </Row>
            <Row>
              <Col lg={12}>
                <small>Akkenna</small>
              </Col>
              <Col lg={12}>
                <h5 className="DMSansBold fw-bold">
                  Akkenna - Generative AI Development Company Steering Business
                  Trends
                </h5>
              </Col>
              <Col lg={12}>
                <p className="DMSansRegular">
                  At Akkenna Animation and Technologies Private Limited, we
                  stand as industry pioneers in generative AI services, offering
                  an extensive array of cutting-edge software development,
                  consultancy, and animation solutions. With our unparalleled
                  expertise in generative AI, we partner with businesses to
                  craft secure and forward-thinking digital solutions that
                  streamline and elevate their operations.
                </p>
              </Col>
            </Row>
            <Row className="homeAboutListMain">
              <Col lg={12}>
                <div className="homeAboutList">
                  <img src={HomeTickBlue} alt="" />
                  <h6>Big Data Processing</h6>
                </div>
              </Col>
              <Col lg={12}>
                <div className="homeAboutList">
                  <img src={HomeTickBlue} alt="" />
                  <h6>User-Friendly Navigation</h6>
                </div>
              </Col>
              <Col lg={12}>
                <div className="homeAboutList">
                  <img src={HomeTickBlue} alt="" />
                  <h6>Operations Efficiency</h6>
                </div>
              </Col>
              <Col lg={12}>
                <div className="homeAboutList">
                  <img src={HomeTickBlue} alt="" />
                  <h6>Instant Accuracy</h6>
                </div>
              </Col>
              <Col lg={12}>
                <div className="homeAboutList">
                  <img src={HomeTickPink} alt="" />
                  <h6>Data Security</h6>
                </div>
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

function FormCanva({ show, handleClose }) {
  return (
    <section className="homeFormCanva">
      <Offcanvas
        id="homeFormCanva"
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="homeAboutCanvaText">
            {<NewContactForm />}
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

const NewHome = () => {
  const [Loading, SetLoading] = useState(false);

  const [show, setShow] = useState(false);
  const [Formshow, setFormshow] = useState(false);
  const [Faqshow, setFaqshow] = useState(false);

  const handleClose = () => setShow(false);
  const handleFormClose = () => setFormshow(false);
  const handleFaqClose = () => setFaqshow(false);

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required*";
      }
      if (!values.phone) {
        errors.phone = "Required*";
      } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Must be exactly 10 digits";
      }
      if (!values.email) {
        errors.email = "Required*";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Must be valid e-mail";
      }
      if (!values.company) {
        errors.company = "Required*";
      }

      if (!values.service) {
        errors.service = "Required*";
      }
      if (!values.budget) {
        errors.budget = "Required*";
      }
      if (!values.message) {
        errors.message = "Required*";
      } else if (values.message.length > 5000) {
        errors.message = "Must be 5000 characters or less";
      }

      if (Object.keys(errors).length === 0) {
        formik.setStatus({ isSubmitting: true });
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      SetLoading(true);
      const res = await axios.post(
        "https://api.akkenna.com/api/mailing/contact",
        values
      );
      if (res.status == 200) {
        SetLoading(false);
        Swal.fire({
          text: "We appreciate your interest! Our company will be in touch with you soon.",
          imageUrl:
            "https://akkenna.com/static/media/logo.527ce9569c515d13529371370e18d69f.svg",
          imageWidth: 200,
          imageHeight: 20,
          imageAlt: "Custom image",
          showCloseButton: true,
          showConfirmButton: true,
          confirmButtonText: "Thank You",
        });
      }
      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
      resetForm();
    },
  });

  const ProductSetting = {
    centerMode: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    autoplayTimeout: 5000,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const techSetting = {
    centerMode: true,
    speed: 500,
    arrows: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    slidesToShow: 3,
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
  };

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
  };

  const [hide, Setshow] = useState({
    AI: true,
    GenAICon: false,
    MobileAppIcon: false,
    WebIcon: false,
    UIUXIcon: false,
    CouldIcon: false,
    ManageIcon: false,
  });

  const sectionRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const textHRef = useRef(null);
  const textPRef = useRef(null);
  const textService = useRef(null);

  useEffect(() => {
    // Using GSAP to create the text reveal animation
    const tl = gsap.timeline();
    tl.fromTo(
      textHRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.2 }
    );
    tl.fromTo(
      textPRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0 }
    );
    // Clean up animation on component unmount
    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    // Ensure the section is initially collapsed
    gsap.set(section, { height: 400, opacity: 0 });

    // Animation using GSAP
    gsap.to(section, {
      height: "0px", // Expand to 400px height
      opacity: 1, // Fade in
      duration: 0.8,
      ease: "power3.out", // Optional easing
      delay: 0.5, // Optional delay
    });
  }, []);

  console.log(hide);

  const handleMouseOver = (val) => {
    const tl = gsap.timeline();
    tl.fromTo(
      textService.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 0 }
    );

    switch (val) {
      case "AIIcon":
        Setshow({
          ...hide,
          AI: true,
          GenAICon: false,
          MobileAppIcon: false,
          WebIcon: false,
          UIUXIcon: false,
          CouldIcon: false,
          ManageIcon: false,
        });
        break;
      case "GenAICon":
        Setshow({
          ...hide,
          AI: false,
          GenAICon: true,
          MobileAppIcon: false,
          WebIcon: false,
          UIUXIcon: false,
          CouldIcon: false,
          ManageIcon: false,
        });
        break;
      case "MobileAppIcon":
        Setshow({
          ...hide,
          AI: false,
          GenAICon: false,
          MobileAppIcon: true,
          WebIcon: false,
          UIUXIcon: false,
          CouldIcon: false,
          ManageIcon: false,
        });
        break;
      case "WebIcon":
        Setshow({
          ...hide,
          AI: false,
          GenAICon: false,
          MobileAppIcon: false,
          WebIcon: true,
          UIUXIcon: false,
          CouldIcon: false,
          ManageIcon: false,
        });
        break;
      case "UIUXIcon":
        Setshow({
          ...hide,
          AI: false,
          GenAICon: false,
          MobileAppIcon: false,
          WebIcon: false,
          UIUXIcon: true,
          CouldIcon: false,
          ManageIcon: false,
        });
        break;
      case "CouldIcon":
        Setshow({
          ...hide,
          AI: false,
          GenAICon: false,
          MobileAppIcon: false,
          WebIcon: false,
          UIUXIcon: false,
          CouldIcon: true,
          ManageIcon: false,
        });
        break;
      case "ManageIcon":
        Setshow({
          ...hide,
          AI: false,
          GenAICon: false,
          MobileAppIcon: false,
          WebIcon: false,
          UIUXIcon: false,
          CouldIcon: false,
          ManageIcon: true,
        });
        break;
      default:
        Setshow({
          ...hide,
          AI: true,
          GenAICon: false,
          MobileAppIcon: false,
          WebIcon: false,
          UIUXIcon: false,
          CouldIcon: false,
          ManageIcon: false,
        });
    }
  };
  const BlogSetting3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };

  return (
    <main id="NewHome">
      <section className="homebanner">
        <Container>
          <Row>
            <div className="bannerText">
              <h6>Akkenna</h6>
              <h1 ref={textHRef} className="DMSansBold fw-bold">
                Making Waves With <br></br> Generative AI Services
              </h1>
              <p ref={textPRef}>
                In artificial intelligence, there are limitless opportunities
                for innovation, efficiency, and <br></br>greatness to be
                redefined.Your path to a new direction starts here.
              </p>
              <button>Let's Connect </button>
            </div>
          </Row>
        </Container>
      </section>

      <div className="homeCardMobileDisplayNone">
        <div className="homeCardMobileRow">
          <Col>
            <img src={Latestwe} alt="" />
          </Col>
          <Col>
            <img src={CustomizeMe} alt="" />
          </Col>
          <Col>
            <img src={MobileWhowe} alt="" />
          </Col>
          <Col>
            <img src={MobileIndusServe} alt="" />
          </Col>
          <Col>
            <img src={MobileMeet} alt="" />
          </Col>
        </div>
      </div>
      <section className="homeBannerCards" ref={sectionRef}>
        <Container>
          <Row>
            <Col>
              <div className="homeBannerCardsFirst HomeBannerCardMain">
                <Row>
                  <Col lg={12}>
                    <h6>Meet Our</h6>
                  </Col>
                  <Col lg={12}>
                    <h5>AI consultant</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={Phone} alt="" />
                  </Col>
                  <Col>
                    <img src={Email} alt="" />
                  </Col>
                  <Col>
                    <img src={Option} alt="" />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="homeBannerCardsSecond">
                <Row>
                  <h5>Industries We Serve</h5>
                </Row>
                <Row>
                  <p>Create your B2B custom audience based on their fields.</p>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="homeBannerCardsThird">
                <Row>
                  <h6>Contact Results</h6>
                </Row>
                <Row>
                  <button>Who We Are</button>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="homeBannerCardsFourth">
                <Row>
                  <h4>
                    Latest <br></br>Technology Using
                  </h4>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="homeBannerCardsFifth ">
                <Row>
                  <h3>Customized AI Chatbot</h3>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="homeAboutMobile"
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
                Akkenna - Generative AI Development Company Steering Business
                Trends
              </h6>
            </div>
            <div>
              <img src={GreaterArrow} alt="" />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section className="homeAbout mobileAbout">
          <Row>
            <Col lg={6} className="homeAboutImage">
              <img src={AboutLeftImage} alt="" />
            </Col>
            <Col lg={6} className="HomeAboutText">
              <Row>
                <Col lg={12}>
                  <h3 className="DMSansBold fw-bold">
                    Akkenna - Generative AI Development Company Steering
                    Business Trends
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col lg={11}>
                  <p className="DMSansRegular">
                    At Akkenna Animation and Technologies Private Limited, we
                    stand as industry pioneers in generative AI services,
                    offering an extensive array of cutting-edge software
                    development, consultancy, and animation solutions. With our
                    unparalleled expertise in generative AI, we partner with
                    businesses to craft secure and forward-thinking digital
                    solutions that streamline and elevate their operations.
                  </p>
                </Col>
              </Row>
              <Row className="homeAboutListMain">
                <Col lg={12}>
                  <div className="homeAboutList">
                    <img src={HomeTickBlue} alt="" />
                    <h6>Big Data Processing</h6>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="homeAboutList">
                    <img src={HomeTickBlue} alt="" />
                    <h6>User-Friendly Navigation</h6>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="homeAboutList">
                    <img src={HomeTickBlue} alt="" />
                    <h6>Operations Efficiency</h6>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="homeAboutList">
                    <img src={HomeTickBlue} alt="" />
                    <h6>Instant Accuracy</h6>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="homeAboutList">
                    <img src={HomeTickPink} alt="" />
                    <h6>Data Security</h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <button>About Us</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>

      <section className="homeSerivceMobile">
        <Container>
          <div className="homeService">
            <Row className="w-100">
              <Col lg={12}>
                <h1>
                  Discover Our Mind-Blowing Array <br></br> Of Offerings!
                </h1>
              </Col>
            </Row>
            <Row className="homeServiceRow">
              
              <Col lg={10}>
                <Row>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("AIIcon");
                    }}
                  >
                    <Row
                      className={
                        hide.AI
                          ? "homeServiceColMain active"
                          : "homeServiceColMain"
                      }
                    >
                      <Col>
                        <img src={AIGif} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          AI Service <br></br> Development
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("GenAICon");
                    }}
                  >
                    <Row
                      className={
                        hide.GenAICon
                          ? "homeServiceColMain active"
                          : "homeServiceColMain"
                      }
                    >
                      <Col>
                        <img src={GenerativeAIGif} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Generative AI <br></br>Service
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("MobileAppIcon");
                    }}
                  >
                    <Row
                      className={
                        hide.MobileAppIcon
                          ? "homeServiceColMain active"
                          : "homeServiceColMain"
                      }
                    >
                      <Col>
                        <img src={MobileAppGif} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Mobile App <br></br>Development
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("WebIcon");
                    }}
                  >
                    <Row
                      className={
                        hide.WebIcon
                          ? "homeServiceColMain active"
                          : "homeServiceColMain"
                      }
                    >
                      <Col>
                        <img src={WebGif} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Web App <br></br> Development
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              
              
            </Row>
            <Row className="homeServiceRow">
              <Col lg={10}>
                <Row>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("UIUXIcon");
                    }}
                  >
                    <Row
                      className={
                        hide.UIUXIcon
                          ? "homeServiceColMain active"
                          : "homeServiceColMain"
                      }
                    >
                      <Col>
                        <img src={UIUXGif} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          UI/UX Design <br></br>Service
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("CouldIcon");
                    }}
                  >
                    <Row
                      className={
                        hide.CouldIcon
                          ? "homeServiceColMain active"
                          : "homeServiceColMain"
                      }
                    >
                      <Col>
                        <img src={CloudGif} alt="" />
                      </Col>
                      <Col>
                        <h5>Cloud Service Development</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("ManageIcon");
                    }}
                  >
                    <Row
                      className={
                        hide.ManageIcon
                          ? "homeServiceColMain active"
                          : "homeServiceColMain"
                      }
                    >
                      <Col>
                        <img src={HireGif} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Managed <br></br>Teams
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="homeServiceColMainMore">
                      <Col>
                        <h6>More Service</h6>
                      </Col>
                      <Col>
                        <img src={MoreIcon} alt="" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            {hide.AI && (
              <Row ref={textService} className=" homeServiceRowText">
                <Col lg={4}>
                  <h4>AI Development & Service</h4>
                </Col>
                <Col lg={6}>
                  <p>
                    We help clients in many different industries turn their data
                    into business value by using our AI skills in areas like
                    natural language processing, computer vision, and text
                    processing. A lot of our customers have gotten a lot out of
                    their supply chain management (SCM), pricing, product
                    bundling and development, personalization and
                    recommendations, and other features.{" "}
                  </p>
                </Col>
              </Row>
            )}
            {hide.GenAICon && (
              <Row ref={textService} className=" homeServiceRowText">
                <Col lg={4}>
                  <h4>Generative AI Service</h4>
                </Col>
                <Col lg={6}>
                  <p>
                    {" "}
                    Our Generative AI Service at Akkenna is a shining example of
                    smart new ideas. Using the power of generative artificial
                    intelligence, we are experts at creating game-changing
                    solutions that break down standard barriers. From coming up
                    with ideas to putting them into action, we push the limits
                    of what is possible by making smart systems that can adapt,
                    change, and lead to unimaginable progress.
                  </p>
                </Col>
              </Row>
            )}
            {hide.MobileAppIcon && (
              <Row ref={textService} className=" homeServiceRowText">
                <Col lg={4}>
                  <h4> Mobile App Development:</h4>
                </Col>
                <Col lg={6}>
                  <p>
                    {" "}
                    Our cutting-edge Mobile App Development service, which is
                    seamlessly combined with advanced AI solutions, will make
                    your mobile app experience better. This is what we do best:
                    we use artificial intelligence to make new, smart, and
                    user-centered apps. Akkenna takes your idea for a mobile app
                    and turns it into a sophisticated reality, from user
                    interfaces that are easy to understand.{" "}
                  </p>
                </Col>
              </Row>
            )}
            {hide.WebIcon && (
              <Row ref={textService} className=" homeServiceRowText">
                <Col lg={4}>
                  <h4>Web App Development</h4>
                </Col>
                <Col lg={6}>
                  <p>
                    With Akkenna's seamless AI interface, you can make building
                    web apps even better. Use the power of AI to improve
                    usefulness, make user experiences better, and open the door
                    to new ideas that have never been thought of before. At
                    Akkenna, our expert writers add cutting-edge AI features to
                    your web apps, giving you a dynamic and smart online
                    presence.
                  </p>
                </Col>
              </Row>
            )}
            {hide.UIUXIcon && (
              <Row ref={textService} className=" homeServiceRowText">
                <Col lg={4}>
                  <h4>UI/UX Design Service</h4>
                </Col>
                <Col lg={6}>
                  <p>
                    {" "}
                    Akkenna's UI/UX Design service shows how dedicated we are to
                    creating smooth and visually appealing user experiences. Our
                    design process mixes form and function to make sure that
                    every interface we make not only looks great but also makes
                    users more interested in it. Using user-centered design
                    principles as a guide, we create easy-to-use interfaces that
                    connect with your audience. 
                  </p>
                </Col>
              </Row>
            )}
            {hide.CouldIcon && (
              <Row ref={textService} className=" homeServiceRowText">
                <Col lg={4}>
                  <h4>Cloud Management Service</h4>
                </Col>
                <Col lg={6}>
                  <p>
                    Your unique path to the cloud. We know how important it is
                    to set up a cloud strategy and make sure your digital assets
                    are ready to move to the cloud because our business was
                    built on it. We properly evaluate the risks for your current
                    IT system so that you can get an honest picture of your
                    migration path and take steps to fix the problem
                  </p>
                </Col>
              </Row>
            )}
            {hide.ManageIcon && (
              <Row ref={textService} className=" homeServiceRowText">
                <Col lg={4}>
                  <h4>Hire remote Developer</h4>
                </Col>
                <Col lg={6}>
                  <p>
                    With our Managed Development Team service, Akkenna changes
                    the way software is made. We know that the key to the
                    success of any project is to build a strong and effective
                    development team. As Akkenna's strategic partner, you'll
                    have access to a team of skilled professionals who will work
                    perfectly with your project to make sure it runs smoothly,
                    comes up with new ideas, and is delivered on time.
                  </p>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </section>

      <section className="homeServiceMobile">
        <Container fluid className="homeserviceCont">
          <Row className="mb-3">
            <h3>Discover Our Mind-Blowing Array Of Offerings!</h3>
          </Row>
          <Row className="homeServiceRow">
          <Slider {...BlogSetting3}>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={AIIcon} alt="" />
                </Col>
                <Col>
                  <h5>
                    AI Service <br></br> Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={GenAICon} alt="" />
                </Col>
                <Col>
                  <h5>
                    Generative AI <br></br>Service
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={MobileAppIcon} alt="" />
                </Col>
                <Col>
                  <h5>
                    Mobile App <br></br>Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={WebIcon} alt="" />
                </Col>
                <Col>
                  <h5>
                    Web App <br></br> Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={UIUXIcon} alt="" />
                </Col>
                <Col>
                  <h5>
                    UI/UX Design <br></br>Service
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={CouldIcon} alt="" />
                </Col>
                <Col>
                  <h5>Cloud Service Development</h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={ManageIcon} alt="" />
                </Col>
                <Col>
                  <h5>
                    Managed <br></br>Teams
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMainMore">
                <Col>
                  <h6>More Service</h6>
                </Col>
                <Col>
                  <img src={MoreIcon} alt="" />
                </Col>
              </Row>
            </Col>
            </Slider>
          </Row>
        </Container>
      </section>

      <section className="sectionmobile">
        <Container className="homeCallContain">
          <Col lg={10} className="homeCallAction">
            <Row>
              <Col lg={6}>
                <div>
                  <h4>Explore Generative AI's capabilities.</h4>
                  <p>
                    We help clients in many different industries turn their data
                    into business value by using our AI skills in areas
                  </p>
                </div>
              </Col>
              <Col lg={5} className="homeCallContainMobile">
                <div>
                  <button><h4>Click for Excellence</h4></button>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>

      <section>
        <Container className="homeProduct">
          <Row>
            <Col lg={10}>
              <Row>
                <Col lg={6}>
                  <Row className="homeProductMain">
                    <Col lg={12}>
                      <img src={ProductIcon} alt="" />
                    </Col>
                    <Col lg={12}>
                      <small>Products</small>
                    </Col>
                    <Col lg={12}>
                      <h1>Discover Akkenna’s Diverse Offerings</h1>
                    </Col>
                    <Col lg={12} md={12}>
                      <p>
                        Explore Akkenna's array of services, including AI
                        Implementation, where seamless integration meets optimal
                        performance, and Customized AI Solutions, crafting
                        bespoke innovations tailored to your unique needs.
                      </p>
                    </Col>
                    <Col lg={7}>
                      <Accordion >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Akkenna Studio:</Accordion.Header>
                          <Accordion.Body>
                            We are experts at making high-quality animation
                            videos, from interesting 2D cartoons to full-on 3D
                            experiences and more.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Web Development</Accordion.Header>
                          <Accordion.Body>
                            Akkenna is an expert at making web apps and recovery
                            listing websites that give people a full digital
                            experience.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} className="homeProductImage">
                  <img src={ProductImage} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="homeDisplayCard">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={11} className="homeDisplayCardCol">
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={4} className="homedisplaycardfirst">
                  <div>
                    <h3>
                      What Makes Akkenna the Best Option for Generative AI
                      Services?
                    </h3>
                  </div>
                  <div>
                    <small>
                      In artificial intelligence, there are limitless
                      opportunities for innovation, efficiency, and greatness to
                      be redefined, Your path to a new direction starts here.
                    </small>
                  </div>
                  <div>
                    <button>
                      Get Started
                      <img src={ButtonArrow} alt="" />
                    </button>
                  </div>
                </Col>
                <Col lg={8} className="homedisplaycardSecond">
                  {selectedOption == "option1" && (
                    <>
                      <div>
                        <img src={NetGen} alt="" />
                      </div>
                      <div>
                        <h5>Next-Generation Technology</h5>
                      </div>
                      <div>
                        <p>
                          We stay at the forefront of technological
                          advancements. Akkenna leverages the latest tools,
                          frameworks, and methodologies to ensure your
                          generative AI solutions are built with innovative.
                        </p>
                      </div>
                      <div value="option1" className="whycheckdiv">
                        <input
                          type="checkbox"
                          className="whycheck"
                          value="option2"
                          onClick={(e) => {
                            handleOptionChange(e);
                          }}
                        />
                        <img src={ArrowCardIcon} alt="" />
                      </div>
                    </>
                  )}
                  {selectedOption == "option2" && (
                    <>
                      <div>
                        <img src={IntegratMethd} alt="" />
                      </div>
                      <div>
                        <h5>Integrated Methodology</h5>
                      </div>
                      <div>
                        <p>
                          Beyond just development, Akkenna adopts a holistic
                          approach. We consider the entire generative AI
                          lifecycle, from conceptualization and design to
                          implementation, testing, and ongoing optimization.
                        </p>
                      </div>
                      <div className="whycheckdiv">
                        <input
                          type="checkbox"
                          className="whycheck"
                          value="option3"
                          onClick={(e) => {
                            handleOptionChange(e);
                          }}
                        />
                        <img src={ArrowCardIcon} alt="" />
                      </div>
                    </>
                  )}
                  {selectedOption == "option3" && (
                    <>
                      <div>
                        <img src={ProgresCreat} alt="" />
                      </div>
                      <div>
                        <h5>Progressive Creative Solutions</h5>
                      </div>
                      <div>
                        <p>
                          We thrive on pushing the boundaries of what's
                          possible. Akkenna encourages a culture of innovation
                          and creativity, ensuring that your generative AI
                          solutions are functional and visionary.
                        </p>
                      </div>
                      <div className="whycheckdiv">
                        <input
                          type="checkbox"
                          className="whycheck"
                          value="option4"
                          onClick={(e) => {
                            handleOptionChange(e);
                          }}
                        />
                        <img src={ArrowCardIcon} alt="" />
                      </div>
                    </>
                  )}
                  {selectedOption == "option4" && (
                    <>
                      <div>
                        <img src={CandidColbrate} alt="" />
                      </div>
                      <div>
                        <h5>Candid Collaboration</h5>
                      </div>
                      <div>
                        <p>
                          Collaboration is key to success. Akkenna maintains
                          transparent communication channels, keeping you
                          informed at every stage of the generative AI
                          development process and throughout the journey.
                        </p>
                      </div>
                      <div className="whycheckdiv">
                        <input
                          type="checkbox"
                          className="whycheck"
                          value="option1"
                          onClick={(e) => {
                            handleOptionChange(e);
                          }}
                        />
                        <img src={ArrowCardIcon} alt="" />
                      </div>
                    </>
                  )}
                  {/* <div>
                                        <img src={ArrowCardIcon} alt="" />
                                    </div> */}
                </Col>

                <Col lg={8} className="homedisplaycardSecondMobile">
                  {selectedOption == "option1" && (
                    <>
                      <Row>
                        <Col sm={12} className="homedisplaySecondMobileCol">
                          <img
                            src={NetGen}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>Next-Generation Technology</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            We stay at the forefront of technological
                            advancements. Akkenna leverages the latest tools,
                            frameworks, and methodologies to ensure your
                            generative AI solutions are built with the most
                            innovative and efficient technologies available.
                          </p>
                        </Col>
                      </Row>
                    </>
                  )}
                  {selectedOption == "option2" && (
                    <>
                      <Row>
                        <Col sm={12} className="homedisplaySecondMobileCol">
                          <img
                            src={IntegratMethd}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>Integrated Methodology</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            We stay at the forefront of technological
                            advancements. Akkenna leverages the latest tools,
                            frameworks, and methodologies to ensure your
                            generative AI solutions are built with the most
                            innovative and efficient technologies available.
                          </p>
                        </Col>
                      </Row>
                    </>
                  )}
                  {selectedOption == "option3" && (
                    <>
                      <Row>
                        <Col sm={12} className="homedisplaySecondMobileCol">
                          <img
                            src={ProgresCreat}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>Progressive Creative Solutions</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            We thrive on pushing the boundaries of what's
                            possible. Akkenna encourages a culture of innovation
                            and creativity, ensuring that your generative AI
                            solutions are functional and visionary.
                          </p>
                        </Col>
                      </Row>
                    </>
                  )}
                  {selectedOption == "option4" && (
                    <>
                      <Row>
                        <Col sm={12} className="homedisplaySecondMobileCol">
                          <img
                            src={CandidColbrate}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>Candid Collaboration</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            Collaboration is key to success. Akkenna maintains
                            transparent communication channels, keeping you
                            informed at every stage of the generative AI
                            development process. We value your input and
                            insights throughout the journey.
                          </p>
                        </Col>
                      </Row>
                    </>
                  )}
                  <div className="homedisplaySecondMobileImg">
                    <img src={ArrowCardIcon} alt="" />
                  </div>
                </Col>
              </Row>
              <Row className="homeTimeRow">
                <Col lg={11} className="homeTimeline"></Col>
                <Col lg={11} className="homeTimelineText">
                  <div class="round">
                    <div>
                      <label class="Radiocontainer">
                        <input
                          type="radio"
                          name="radio"
                          value="option1"
                          onChange={(e) => {
                            handleOptionChange(e);
                          }}
                          checked={selectedOption === "option1"}
                        />
                        <span class="checkmark CheckRed"></span>
                        <span class="checkShadow"></span>
                        <span class="checkBlur"></span>
                      </label>
                    </div>
                    <div>
                      <h5>
                        Next-Generation <br />
                        Technology
                      </h5>
                    </div>
                  </div>
                  <div className="round">
                    <div>
                      <label class="Radiocontainer">
                        <input
                          type="radio"
                          name="radio"
                          value="option2"
                          onChange={(e) => {
                            handleOptionChange(e);
                          }}
                          checked={selectedOption === "option2"}
                        />
                        <span class="checkmark CheckBlue"></span>
                        <span class="checkShadow"></span>
                      </label>
                    </div>
                    <div>
                      <h5>
                        Integrated <br />
                        Methodology
                      </h5>
                    </div>
                  </div>
                  <div className="round">
                    <div>
                      <label class="Radiocontainer">
                        <input
                          type="radio"
                          name="radio"
                          value="option3"
                          onChange={(e) => {
                            handleOptionChange(e);
                          }}
                          checked={selectedOption === "option3"}
                        />
                        <span class="checkmark CheckYellow"></span>
                        <span class="checkShadow"></span>
                      </label>
                    </div>
                    <div>
                      <h5>
                        Progressive Creative <br />
                        Solutions
                      </h5>
                    </div>
                  </div>
                  <div className="round">
                    <div>
                      <label class="Radiocontainer">
                        <input
                          type="radio"
                          name="radio"
                          value="option4"
                          onChange={(e) => {
                            handleOptionChange(e);
                          }}
                          checked={selectedOption === "option4"}
                        />
                        <span class="checkmark CheckOrange"></span>
                        <span class="checkShadow"></span>
                        <span class="checkBlur"></span>
                      </label>
                    </div>
                    <div>
                      <h5>
                        Candid <br />
                        Collaboration
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="homeCardScroll">
        <Container>
          <Row className="homeCardScrollRow ps-5">
            <Col lg={8}>
              <Row>
                <Col lg={12}>
                  <h1>
                    Discover Our<br></br>Latest Projects
                  </h1>
                </Col>
                <Col lg={9}>
                  <p>
                    Uncover the transformative impact of Akkenna's
                    groundbreaking projects, where innovation takes centre
                    stage, turning possibilities into impactful realities.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="homeCardProdSliderRow">
            <Slider {...ProductSetting}>
              <div className="row homeCardProd">
                <div className="Col-lg-4 ProdDivFirst">
                  <img src={GenAIMin} alt="" />
                </div>
                <div className="Col-lg-8 ProdDivSecond">
                  <div className="row">
                    <h5>AI Chat Bot</h5>
                  </div>
                  <div className="row">
                    <h6>Your Chat Partner in AI</h6>
                  </div>
                  <div className="row">
                    <p>
                      AI chatbots improve customer service by interpreting
                      natural language and automating responses. Machine
                      learning improves its answers and knowledge.
                    </p>
                  </div>
                  <div className="row">
                    <hr />
                  </div>
                  <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                      <img src={prodIconImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row homeCardProd">
                <div className="Col-lg-4 ProdDivFirst">
                  <img src={RehabpyMin} alt="" />
                </div>
                <div className="Col-lg-8 ProdDivSecond">
                  <div className="row">
                    <h5>Rehabpy</h5>
                  </div>
                  <div className="row">
                    <h6>Connecting Hope to Healing Paths</h6>
                  </div>
                  <div className="row">
                    <p>
                      React.js boosts the Rehabilitation center listing site:
                      modular, fast rendering, dynamic content, and simplified
                      UI for seamless browsing.
                    </p>
                  </div>
                  <div className="row">
                    <hr />
                  </div>
                  <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                      <img src={prodIconImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row homeCardProd">
                <div className="Col-lg-4 ProdDivFirst">
                  <img src={FestivMin} alt="" />
                </div>
                <div className="Col-lg-8 ProdDivSecond">
                  <div className="row">
                    <h5>Festiv Tickets</h5>
                  </div>
                  <div className="row">
                    <h6>It's Your VIP Pass to Festiv</h6>
                  </div>
                  <div className="row">
                    <p>
                      Choose React.js for Event Carnival Management: modular,
                      fast rendering, the extensive ecosystem for the dynamic
                      platform.
                    </p>
                  </div>
                  <div className="row">
                    <hr />
                  </div>
                  <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                      <img src={prodIconImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </Row>
          <Row className="d-flex justify-content-center">
            <div className="HomesliderMove">
              <Col lg={6} className="HomesliderMoveDark"></Col>
            </div>
          </Row>
        </Container>
      </section>

      <section className="homeProdScrollMobile homeProdScrollMobileDisplay">
        <Container>
          <Row>
            <div className="homeProdMobileHead">
              <div>
                <p>Our Works</p>
                <h4>Discover Our Game Changing Products</h4>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Row className="homeCardProdMob">
            <Slider {...ProductSetting}>
              <div className="homeCardProdMobDiv">
                <div className="ProdDivFirstMob">
                  <img src={GenAIMin} alt="" />
                </div>
                <div className="row d-flex">
                  <div className="col-lg-8 ProdDivSecondMob">
                    <div>
                      <h5>AI Chat Bot</h5>
                    </div>
                    <div className="d-flex ProdDivSecondMobtext">
                      <div>
                        <p>
                          AI chatbots improve customer service by interpreting
                          natural language and automating responses. Machine
                          learning improves its answers and knowledge.
                        </p>
                      </div>
                      <div className="col-lg-3 ProdDivThirdMob">
                        <img src={prodIconImage} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="ProdDivSubSecondMob">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="homeCardProdMobDiv">
                <div className="ProdDivFirstMob">
                  <img src={GenAIMin} alt="" />
                </div>
                <div className="row d-flex">
                  <div className="col-lg-8 ProdDivSecondMob">
                    <div>
                      <h5>AI Chat Bot</h5>
                    </div>
                    <div className="d-flex">
                      <div>
                        <p>
                          AI chatbots improve customer service by interpreting
                          natural language and automating responses. Machine
                          learning improves its answers and knowledge.
                        </p>
                      </div>
                      <div className="col-lg-3 ProdDivThirdMob">
                        <img src={prodIconImage} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="ProdDivSubSecondMob">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="homeCardProdMobDiv">
                <div className="ProdDivFirstMob">
                  <img src={RehabpyMin} alt="" />
                </div>
                <div className="row d-flex">
                  <div className="col-lg-8 ProdDivSecondMob">
                    <div>
                      <h5>Rehabpy</h5>
                    </div>
                    <div className="d-flex">
                      <div>
                        <p>
                          React.js boosts the Rehabilitation center listing
                          site: modular, fast rendering, dynamic content, and
                          simplified UI for seamless browsing.
                        </p>
                      </div>
                      <div className="col-lg-3 ProdDivThirdMob">
                        <img src={prodIconImage} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="ProdDivSubSecondMob">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="homeCardProdMobDiv">
                <div className="ProdDivFirstMob">
                  <img src={FestivMin} alt="" />
                </div>
                <div className="row d-flex">
                  <div className="col-lg-8 ProdDivSecondMob">
                    <div>
                      <h5>FestivMin</h5>
                    </div>
                    <div className="d-flex">
                      <div>
                        <p>
                          Choose React.js for Event Carnival Management:
                          modular, fast rendering, the extensive ecosystem for
                          the dynamic platform.
                        </p>
                      </div>
                      <div className="col-lg-3 ProdDivThirdMob">
                        <img src={prodIconImage} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="ProdDivSubSecondMob">
                    <hr />
                  </div>
                </div>
              </div>
            </Slider>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <div className="HomesliderMove">
              <Col lg={6} className="HomesliderMoveDark"></Col>
            </div>
          </Row>
        </Container>
      </section>

      <section className="homeForm">
        <Container>
          <Row className="formRow">
            <Col lg={9}>
              <div className="FormHead">
                <Row className="d-flex justify-content-center align-items-center text-center flex-column">
                  <Col lg={12}>
                    <h2 className="frmTitle">Get an Idea? Let’s Talk</h2>
                  </Col>
                  <Col lg={9}>
                    <p className="frmDesc">
                      Do you have a project in mind? Got a story to tell the
                      world? Or just want to say hello? Shoot us an email or use
                      the contact form below. We will revert in no time.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={9} className="contact-form">
              <form onSubmit={formik.handleSubmit}>
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                      onBlur={formik.handleChange}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <p className="text-danger">{formik.errors.name}</p>
                  </div>
                  <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your E-mail"
                      onBlur={formik.handleChange}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <p className="text-danger">{formik.errors.email}</p>
                  </div>
                  <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      onBlur={formik.handleChange}
                      onChange={formik.handleChange}
                      placeholder="Enter Your Phone Number"
                      value={formik.values.phone}
                    />
                    <p className="text-danger">{formik.errors.phone}</p>
                  </div>
                  <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      onBlur={formik.handleChange}
                      onChange={formik.handleChange}
                      placeholder="Enter Your Company Name"
                      value={formik.values.company}
                    />
                    <p className="text-danger">{formik.errors.company}</p>
                  </div>
                  <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                    <select
                      name="service"
                      id="service"
                      onBlur={formik.handleChange}
                      onChange={formik.handleChange}
                      placeholder="What service you want from us"
                      value={formik.values.service}
                    >
                      <option value="">What service you want from us</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Ecommerce Development">
                        Ecommerce Development
                      </option>
                      <option value="Explainer Video Creation">
                        Explainer VideoCreation{" "}
                      </option>
                      <option value="Hire Dedicated Development">
                        Hire DedicatedDevelopment
                      </option>
                      <option value="Logo Design">Logo Design</option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Pay Per Click Advertising">
                        Pay Per Click Advertising
                      </option>
                      <option value="Search Engine Optimization">
                        Search Engine Optimization
                      </option>
                      <option value="Shopify Website Development">
                        Shopify WebsiteDevelopment
                      </option>
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                      <option value="UI UX Design">UI UX Design</option>
                      <option value="Web App Development">
                        Web App Development
                      </option>
                      <option value="Website Design and Development">
                        Website Design and Development
                      </option>
                      <option value="Website Redesigning">
                        Website Redesigning
                      </option>
                      <option value="Wordpress Development">
                        Wordpress Development
                      </option>
                    </select>
                    <p className="text-danger">{formik.errors.service}</p>
                  </div>
                  <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                    <select
                      name="budget"
                      id="budget"
                      onBlur={formik.handleChange}
                      onChange={formik.handleChange}
                      placeholder="Select Your budget"
                      value={formik.values.budget}
                    >
                      <option value="">Select your budget</option>
                      <option value="10K-25K USD">10K-25K USD</option>
                      <option value="25K-50K USD">25K-50K USD</option>
                      <option value="50K-100K USD">50K-100K USD</option>
                      <option value="Less than 10K USD">
                        Less than 10K USD
                      </option>
                      <option value="More than 100K USD">
                        More than 100K USD
                      </option>
                    </select>
                    <p className="text-danger">{formik.errors.budget}</p>
                  </div>
                  <div className="col-lg-12 col-md-7 col-sm-10 mt-4">
                    <textarea
                      name="message"
                      id="message"
                      onBlur={formik.handleChange}
                      onChange={formik.handleChange}
                      placeholder="Enter Your Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                    <p className="text-danger">{formik.errors.message}</p>
                  </div>
                  <div className="submit-btn mt-4">
                    <button
                      type="button"
                      onClick={formik.handleSubmit}
                      name="submit"
                    >
                      {Loading ? <Spinner /> : "Enquiry Now"}
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        onClick={() => {
          setFormshow(true);
        }}
        className="homeMobileForm homeMobileFormDisplay"
      >
        <Container>
          <Row>
            <div className="homeMobileFormRow">
              <div>
                <h3>Get an Idea? Let’s Talk</h3>
                <p>
                  Do you have a project in mind? Got a story to tell the world?
                  Or just want to say hello? Shoot us an email or use the
                  contact form below. We will revert in no time.
                </p>
              </div>
              <div>
                <img src={FormButton} alt="" />
              </div>
            </div>
          </Row>
        </Container>
      </section>

      
      <section className="homeSlidermain">
        <Container>
          <Row className="homeSlidermainRow">
            <Col lg={10} className="homeSliderCol">
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
            </Col>
          </Row>
        </Container>
      </section>

      <section className="homeSliderMobile">
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

      <section className="homeFaq">
        <Container>
          <Row>
            <Col>
              <h1>
                Addressing Popular Queries with <br></br> Expertise and
                Innovation!
              </h1>
            </Col>
          </Row>
          <Row className="homeFaqRow">
            <Col lg={12}>
              <Row>
                <Col lg={6}>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {" "}
                        What is Generative AI, and how can it benefit my
                        business?
                      </Accordion.Header>
                      <Accordion.Body>
                        Generative AI refers to technology that enables machines
                        to produce creative outputs, such as images, text, or
                        even entire applications. Its benefits include enhanced
                        creativity, automation, and generating novel solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How can Generative AI be applied in my industry?
                      </Accordion.Header>
                      <Accordion.Body>
                        Generative AI finds applications across various
                        industries, including content creation, design,
                        healthcare, finance, and more. It can streamline
                        processes, automate repetitive tasks, and unlock
                        innovative solutions tailored to specific industry
                        needs.
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
                        understanding your unique requirements to provide
                        innovative and effective outcomes.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How does the development process for Generative AI
                        solutions work?
                      </Accordion.Header>
                      <Accordion.Body>
                        Our development process involves understanding your
                        goals, designing a customized solution, developing the
                        Generative AI model, rigorous testing, and continuous
                        optimization. We ensure a transparent and collaborative
                        approach at every stage.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col lg={6}>
                  <Accordion>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Can Generative AI be integrated into existing systems
                        and workflows?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, our Generative AI solutions are designed for
                        seamless integration into existing systems. We work
                        closely with your team to ensure minimal disruption and
                        optimal performance when incorporating Generative AI
                        into your workflows
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        How do you address Generative AI data privacy and
                        security issues?
                      </Accordion.Header>
                      <Accordion.Body>
                        Data privacy and security are paramount. We adhere to
                        industry best practices, implement robust security
                        measures, and ensure compliance with data protection
                        regulations to safeguard your sensitive information
                        throughout the Generative AI development process.
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
                        finance, e-commerce, and more. We adapt our solutions to
                        the specific needs and challenges of each industry.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        What Generative AI projects have you completed
                        successfully?
                      </Accordion.Header>
                      <Accordion.Body>
                        Certainly. Our portfolio includes projects ranging from
                        creative content generation and design automation to
                        predictive modeling and personalized customer
                        experiences. We can share detailed case studies
                        highlighting the impact of our Generative AI solutions
                        on client success.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="homeFaqMobile"
        onClick={() => {
          setFaqshow(true);
        }}
      >
        <Container>
          <Row>
            <div className="homeFaqMobileMain">
              <div>
                <h3>
                  Addressing Popular Queries with Expertise and Innovation!
                </h3>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="homeBlog">
        <Container>
          <Row className="homeBlogHead">
            <h1>
              Recent Blogs &<br></br> Post From Akkenna
            </h1>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col lg={10}>
              <div className="slider-container">
                <Slider {...BlogSetting}>
                  <div className="homeBlogCard">
                    <div className="row">
                      <img src={EvloutionBlog} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <h5>Revolutionizing mobile apps</h5>
                      </div>
                      <div className="col-lg-12">
                        <h6>
                          The synergy of Artificial Intelligence in the
                          evolution of app ...
                        </h6>
                      </div>
                      <div className="col-lg-12 homeBlogCardTime">
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardTime} alt="" />
                          <p>Dec 28, 2022</p>
                        </div>
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardEye} alt="" />
                          <p>1,526 views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="homeBlogCard">
                    <div className="row">
                      <img src={WebDevBlog} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <h5>Choosing between web and mobile app development</h5>
                      </div>
                      <div className="col-lg-12">
                        <h6>
                          Tailor your strategy based on business goals for
                          optimal digital presence....
                        </h6>
                      </div>
                      <div className="col-lg-12 homeBlogCardTime">
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardTime} alt="" />
                          <p>Dec 28, 2022</p>
                        </div>
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardEye} alt="" />
                          <p>1,526 views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="homeBlogCard">
                    <div className="row">
                      <img src={TopDevpBlog} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <h5>Top-10 DevOps Configuration Management Tools</h5>
                      </div>
                      <div className="col-lg-12">
                        <h6>
                          DevOps configuration & automation tools are crucial
                          for streamlining ...
                        </h6>
                      </div>
                      <div className="col-lg-12 homeBlogCardTime">
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardTime} alt="" />
                          <p>Dec 28, 2022</p>
                        </div>
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardEye} alt="" />
                          <p>1,526 views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="homeBlogCard">
                    <div className="row">
                      <img src={EvloutionBlog} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <h5>Revolutionizing mobile apps</h5>
                      </div>
                      <div className="col-lg-12">
                        <h6>
                          The synergy of Artificial Intelligence in the
                          evolution of app ...
                        </h6>
                      </div>
                      <div className="col-lg-12 homeBlogCardTime">
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardTime} alt="" />
                          <p>Dec 28, 2022</p>
                        </div>
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardEye} alt="" />
                          <p>1,526 views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="homeBlogCard">
                    <div className="row">
                      <img src={WebDevBlog} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <h5>Choosing between web and mobile app development</h5>
                      </div>
                      <div className="col-lg-12">
                        <h6>
                          Tailor your strategy based on business goals for
                          optimal digital presence....
                        </h6>
                      </div>
                      <div className="col-lg-12 homeBlogCardTime">
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardTime} alt="" />
                          <p>Dec 28, 2022</p>
                        </div>
                        <div className="homeBlogCardTimeTxt">
                          <img src={cardEye} alt="" />
                          <p>1,526 views</p>
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

      <AboutCanva show={show} handleClose={handleClose} />
      <FormCanva show={Formshow} handleClose={handleFormClose} />
      <FaqCanva show={Faqshow} handleClose={handleFaqClose} />

      <NewFooter />
    </main>
  );
};

export default NewHome;
