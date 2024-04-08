import { Container, Row, Col } from "react-bootstrap";
import NewBlogPage from "../../Components/NewBlogPage";
import NewContactForm from "../../Components/NewContactForm";
import NewFaq from "../../Components/NewFaq";
import React, { useRef, useState } from "react";
import Enhanced from "../../Assets/Image/NewService/GenAI/Enhanced.svg";
import Increased from "../../Assets/Image/NewService/GenAI/Increased.svg";
import Person from "../../Assets/Image/NewService/GenAI/Person.svg";
import Data from "../../Assets/Image/NewService/GenAI/Data.svg";
import Competitive from "../../Assets/Image/NewService/GenAI/Competitive.svg";
import Cost from "../../Assets/Image/NewService/GenAI/Cost.svg";
import { gsap } from "gsap";
import Accordion from "react-bootstrap/Accordion";
import Advisor from "../../Assets/Image/NewService/GenAI/advisor1.svg";
import ChatBox from "../../Assets/Image/NewService/GenAI/chat-bot1.svg";
import Idea from "../../Assets/Image/NewService/GenAI/idea-1.svg";
import Programming from "../../Assets/Image/NewService/GenAI/programming-1.svg";
import Promptbox from "../../Assets/Image/NewService/GenAI/prompt-box-1.svg";
import Solution from "../../Assets/Image/NewService/GenAI/solution-1.svg";
import Arrows from "../../Assets/Image/NewService/GenAI/Arrows.svg";

import AIIcon from "../../Assets/Image/NewService/GenAI/AIIcon.svg";
import GenAICon from "../../Assets/Image/NewService/GenAI/GenAIIcon.svg";
import MobileAppIcon from "../../Assets/Image/NewService/GenAI/MobileAppIcon.svg";
import WebIcon from "../../Assets/Image/NewService/GenAI/WebIcon.svg";

import Finance from "../../Assets/Image/NewService/GenAI/Finance.webp";
import Banking from "../../Assets/Image/NewService/GenAI/Banking.webp";
import Insurance from "../../Assets/Image/NewService/GenAI/Insurance.webp";
import Investment from "../../Assets/Image/NewService/GenAI/Investment.webp";
import Fintech from "../../Assets/Image/NewService/GenAI/Fintech.webp";
import Payment from "../../Assets/Image/NewService/GenAI/Payment.webp";
import Retail from "../../Assets/Image/NewService/GenAI/Retail.webp";
import Health from "../../Assets/Image/NewService/GenAI/Health.webp";
import Manufacturing from "../../Assets/Image/NewService/GenAI/Manufacturing.webp";
import Professional from "../../Assets/Image/NewService/GenAI/Professional.webp";
import Transport from "../../Assets/Image/NewService/GenAI/Transport.webp";
import Tele from "../../Assets/Image/NewService/GenAI/Tele.webp";
import Construction from "../../Assets/Image/NewService/GenAI/Construction.webp";
import Hospital from "../../Assets/Image/NewService/GenAI/Hospital.webp";

import Slider1 from "../../Assets/Image/NewService/GenAI/Group-slider1.svg";
import Slider2 from "../../Assets/Image/NewService/GenAI/slider1.svg";
import Slider3 from "../../Assets/Image/NewService/GenAI/Groupslider2.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";

import "../../Style/NewGenAI.css";
import BannerBackground1 from "../../Assets/Image/NewService/GenAI/BannerBackground1.png";
import MobileBannerimg from "../../Assets/Image/NewService/GenAI/BannerimgMobile.svg";
import Playicon from "../../Assets/Image/NewService/GenAI/playiconbanner.svg";
import ButtonArrow from "../../Assets/Image/NewService/GenAI/ButtonArrow.svg";
import BookMarkIcon from "../../Assets/Image/NewService/GenAI/BookMarkIcon.svg";
import ArrowCardIcon from "../../Assets/Image/NewService/GenAI/ArrowCardIcon.svg";
import NewCallToAction from "../../Components/NewCallToAction";
// import NewFooter from "../../Components/NewFooter";
// import GenRightArrow from "../../Assets/Image/NewService/GenAI/GenRightArrow.svg";
import RightArrow from "../../Assets/Image/NewService/GenAI/rightarrowbgnill.svg";

import Apache from "../../Assets/Image/NewService/GenAI/apache-spark.svg";
import Aws from "../../Assets/Image/NewService/GenAI/aws.svg";
import Azure from "../../Assets/Image/NewService/GenAI/azure.svg";
import Cprogram from "../../Assets/Image/NewService/GenAI/cprgm.svg";
import Docker from "../../Assets/Image/NewService/GenAI/docker.svg";
import Git from "../../Assets/Image/NewService/GenAI/emtygit.svg";
import Gitbash from "../../Assets/Image/NewService/GenAI/gitbash.svg";
import Github from "../../Assets/Image/NewService/GenAI/github.svg";
import Cloud from "../../Assets/Image/NewService/GenAI/google-cloud.svg";
import Hadoop from "../../Assets/Image/NewService/GenAI/hadoop.svg";
import Hive from "../../Assets/Image/NewService/GenAI/hive-apache.svg";
import Java from "../../Assets/Image/NewService/GenAI/java.svg";
import Jerkins from "../../Assets/Image/NewService/GenAI/jenkins.svg";
import Keras from "../../Assets/Image/NewService/GenAI/Keras.svg";
import Kubernets from "../../Assets/Image/NewService/GenAI/kubernets.svg";
import PowerBI from "../../Assets/Image/NewService/GenAI/New_Power_BI_Logo.svg";
import Python from "../../Assets/Image/NewService/GenAI/python.svg";
import PythonNltk from "../../Assets/Image/NewService/GenAI/python_nltk.svg";
import Pytorch from "../../Assets/Image/NewService/GenAI/pytorch.svg";
// import Rlang from "../../Assets/Image/NewService/GenAI/r-lang.svg"
import Tableau from "../../Assets/Image/NewService/GenAI/tableau-software.svg";
import TensorFlow from "../../Assets/Image/NewService/GenAI/tensorflow.svg";
import "../../Style/GenAiMobile.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useFormik } from "formik";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import FormButton from "../../Assets/Image/NewService/GenAI/formButton.svg";
import Slider from "react-slick";
import EvloutionBlog from "../../Assets/Image/NewHome/EvloutionBlog.svg";
import cardTime from "../../Assets/Image/NewService/GenAI/cardTime.svg";
import cardEye from "../../Assets/Image/NewService/GenAI/cardEye.svg";
import TopDevpBlog from "../../Assets/Image/NewHome/TopDevpBlog.svg";
import WebDevBlog from "../../Assets/Image/NewHome/WebDevBlog.svg";
import GreaterArrow from "../../Assets/Image/NewHome/GreaterArrow.svg";

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
                    1. How can I get started with your Generative AI services?
                  </Accordion.Header>
                  <Accordion.Body>
                    Contact us through{" "}
                    <a href="sales@akkenna.com">sales@akkenna.com</a> to discuss
                    your specific needs, and goals, and how our Generative AI
                    services can transform your business. We're excited to start
                    this exciting trip with you!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    2. Can Generative AI be integrated into existing systems?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, our Generative AI services are designed for seamless
                    integration. We work to ensure compatibility with your
                    existing systems, minimizing disruption and maximizing the
                    benefits of generative AI.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    3. What is the difference between analytical AI and creative
                    AI?
                  </Accordion.Header>
                  <Accordion.Body>
                    In the area of artificial intelligence, generative AI and
                    analytical AI are two different ways of doing things.
                    Artificial intelligence that generates new information is
                    called generative AI. It learns patterns from the data that
                    is already there and then uses those patterns to make new
                    data that is similar in style or structure. It's like a
                    machine that can make its versions of things it has seen
                    before, like making new pictures or words that look like
                    things people have made. When it comes to AI, analytical AI
                    is meant to look at data and draw conclusions from it.
                    Analytical AI takes in either organized or unstructured data
                    and gives you information, predictions, or groups as a
                    result. It doesn't make completely new data; instead, it
                    takes information from data that already exists. Regression
                    models, decision trees, and clustering methods are some
                    examples.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    4. How exactly does generative AI work?
                  </Accordion.Header>
                  <Accordion.Body>
                    Artificial intelligence that generates new information from
                    huge amounts of data uses complicated algorithms and
                    patterns to grow. Then, it creates new data (like text,
                    pictures, and videos) that is very similar to the data it
                    received. Numerous estimates and comparisons are needed to
                    make content that looks like it was made by a person.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    5. How do you ensure the security of data used in Generative
                    AI solutions?
                  </Accordion.Header>
                  <Accordion.Body>
                    We prioritize data security and confidentiality. Our
                    Generative AI services adhere to industry best practices,
                    employing encryption, access controls, and other security
                    measures to protect sensitive information.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    6. How much does it cost to make AI systems that are
                    generative?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Coming up with creative AI solutions like ChatGPT can cost
                      anywhere from $100,000 to $500,000. The costs of growth
                      are affected by several things, such as
                    </p>
                    <p>• How hard the job is to do</p>
                    <p>• How big the collection is and what it covers</p>
                    <p>
                      • Things needed for computation When the growth happens
                    </p>
                    <p>• Needs for customization and integration</p>
                    <p>• How skilled the development team is</p>
                    <p>• Needs for support and upkeep</p>
                    <p>• Costs of deployment and equipment</p>
                    <p>• Fees to license and use third-party tools </p>
                    <p>
                      • Get in touch with our creative AI experts to get a good
                      idea of how much it will cost.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    7. How long does it take to make a strong creative AI
                    system?
                  </Accordion.Header>
                  <Accordion.Body>
                    How long it takes to make a creative AI app depends on how
                    complicated the whole project is. For example, it can take
                    10 to 18 months or more to build a very complicated system
                    with a lot of features. Generative AI solutions with few
                    features, on the other hand, can take anywhere from 3 to 6
                    months to make. A company like Appinventiv that specializes
                    in generative AI can help you get accurate time predictions
                    based on the needs of your business.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    8. How can Generative AI benefit my business?
                  </Accordion.Header>
                  <Accordion.Body>
                    Generative AI can bring innovation to various industries. It
                    enhances creativity, automates content creation, aids in
                    decision-making, and can provide personalized solutions,
                    leading to improved efficiency and competitiveness.
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

const GenAi = () => {
  const [Loading, SetLoading] = useState(false);
  const [Formshow1, setFormshow1] = useState(false);
  const handleFormClose = () => setFormshow1(false);
  const textService = useRef(null);
  const [Faqshow, setFaqshow] = useState(false);

  const handleFaqClose = () => setFaqshow(false);
  const BlogSetting1 = {
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
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
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
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          infinite: true,
        },
      },
    ],
  };
  const BlogSetting2 = {
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
  const [hide, Setshow] = useState({
    AI: true,
    GenAICon: false,
    MobileAppIcon: false,
    WebIcon: false,
    UIUXIcon: false,
    CouldIcon: false,
    ManageIcon: false,
  });

  const [selectedOption, setSelectedOption] = useState("option1");

  const [state, setState] = useState("question-1");

  const handleChange = (value) => {
    setState(value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

  const sampleArray = [
    {
      question: `<h6>1. How can I get started with your Generative AI services?</h6>`,
      answer: `<p>Contact us through <a href="sales@akkenna.com">sales@akkenna.com</a>  to discuss your specific needs, and goals, and how our Generative AI services can transform your business. We're excited to start this exciting trip with you!</p>`,
    },
    {
      question: `<h6>2. Can Generative AI be integrated into existing systems?</h6>`,
      answer: `<p>Yes, our Generative AI services are designed for seamless integration. We work to ensure compatibility with your existing systems, minimizing disruption and maximizing the benefits of generative AI.</p>`,
    },
    {
      question: `<h6>3. What is the difference between analytical AI and creative AI?</h6>`,
      answer: `<p>In the area of artificial intelligence, generative AI and analytical AI are two different ways of doing things. Artificial intelligence that generates new information is called generative AI. It learns patterns from the data that is already there and then uses those patterns to make new data that is similar in style or structure. It's like a machine that can make its versions of things it has seen before, like making new pictures or words that look like things people have made.</br> When it comes to AI, analytical AI is meant to look at data and draw conclusions from it. Analytical AI takes in either organized or unstructured data and gives you information, predictions, or groups as a result. It doesn't make completely new data; instead, it takes information from data that already exists. Regression models, decision trees, and clustering methods are some examples.</p>`,
    },
    {
      question: `<h6>4. How exactly does generative AI work?</h6>`,
      answer: `<p>Artificial intelligence that generates new information from huge amounts of data uses complicated algorithms and patterns to grow. Then, it creates new data (like text, pictures, and videos) that is very similar to the data it received. Numerous estimates and comparisons are needed to make content that looks like it was made by a person.</p>`,
    },
    {
      question: `<h6>5. How do you ensure the security of data used in Generative AI solutions?</h6>`,
      answer: `<p>We prioritize data security and confidentiality. Our Generative AI services adhere to industry best practices, employing encryption, access controls, and other security measures to protect sensitive information.</p>`,
    },
    {
      question: `<h6>6. How much does it cost to make AI systems that are generative?</h6>`,
      answer: `<p>Coming up with creative AI solutions like ChatGPT can cost anywhere from $100,000 to $500,000. The costs of growth are affected by several things, such as</p> <p>• How hard the job is to do</p> <p>• How big the collection is and what it covers</p> <p>• Things needed for computation When the growth happens</p> <p>• Needs for customization and integration</p> <p>• How skilled the development team is</p> <p>• Needs for support and upkeep</p> <p>• Costs of deployment and equipment</p> <p>• Fees to license and use third-party tools </p><p>• Get in touch with our creative AI experts to get a good idea of how much it will cost.</p>`,
    },
    {
      question: `<h6>7. How long does it take to make a strong creative AI system?</h6>`,
      answer: `<p>How long it takes to make a creative AI app depends on how complicated the whole project is. For example, it can take 10 to 18 months or more to build a very complicated system with a lot of features. Generative AI solutions with few features, on the other hand, can take anywhere from 3 to 6 months to make. A company like Appinventiv that specializes in generative AI can help you get accurate time predictions based on the needs of your business.</p>`,
    },
    {
      question: `<h6>8. How can Generative AI benefit my business?</<h6>`,
      answer: `<p>Generative AI can bring innovation to various industries. It enhances creativity, automates content creation, aids in decision-making, and can provide personalized solutions, leading to improved efficiency and competitiveness.</p>`,
    },
  ];

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

  return (
    <main id="GenAi">
      {/* Desktop banner */}
      <section >
        <Container fluid className="GenAiBanner">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col lg={6} className="GenAiBannerLeft">
                <Col lg={12}>
                  <h1 className="text-white">
                    Unleash Intelligent Innovation<br></br> with Our Generative
                    AI
                  </h1>
                </Col>

                <Col lg={9}>
                  <p className="h6 text-bannerpara">
                    Revolutionizing industries with cutting-edge generative AI
                    services. Elevate your business through smart, adaptive, and
                    future-ready solutions. Your journey to innovation starts
                    here.
                  </p>
                </Col>

                <div className="bannerButtons">
                  <a href="/contact" target="_blank">
                    <button className="exploreButton DMSansMedium">
                      Explore Our Innovations
                    </button>
                  </a>
                  <a href="/contact" target="_blank">
                    <button className="watchVideoButton DMSansBold">
                      Watch Video
                    </button>
                  </a>
                </div>
              </Col>
              <Col lg={6} className="GenAIImg">
                <img src={BannerBackground1} alt="" />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* Mobile banner */}
      <section className="genAiMobBanner">
        <Container fluid className="bannerbg">
          <Container>
            <Row className=" justify-content-center align-items-center">
              <Col lg={12}>
                <h1 className="text-white headtext mt-4 mb-2">
                  Unleash Intelligent Innovation with Our Generative AI
                </h1>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p className="paratext text-white mb-2">
                  Revolutionizing industries with cutting-edge<br></br>{" "}
                  generative AI services. Elevate your business through<br></br>{" "}
                  smart, adaptive, and future-ready solutions. Your<br></br>{" "}
                  journey to innovation starts here.
                </p>
              </Col>
            </Row>
          </Container>

          <Row className="buttondiv">
            <Col sm={6} className="bannerButtons">
              <div>
                <button className="exploreButton DMSansMedium">
                  Explore Our Innovations
                </button>
              </div>
              <div>
                <button className="watchVideoButton DMSansBold">
                  <img src={Playicon} alt="icon" className="playicon" />
                  Watch Video
                </button>
              </div>
            </Col>
            <Col sm={6} className="GenAIImg">
              <img src={MobileBannerimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2 Desktop */}
      <section className="desktopsec2">
        <Container  className="AIbg mt-3">
          <Row className="d-flex flex-column text-center mb-2">
            <Col className="ColElement">
              <h4>Why Opt for Generative AI Solutions?</h4>
            </Col>
          </Row>
          <Row className="rowCol mt-1 d-flex justify-content-center align-items-center">
            <Col
              lg={11}
              className="rowColdiv d-flex justify-content-center align-items-center flex-wrap "
            >
              <Col lg={4}>
                <div className="d-flex mt-2 gap-4 Content1">
                  <div>
                    <img src={Increased} alt="Description" />
                  </div>
                  <div>
                    <h5 className="mb-4">Increased Efficiency</h5>
                    <p className=" mb-3 nunitoMedium">
                      Generative AI solutions offered by a leading generative AI
                      development company like Akkenna optimize recurring
                      duties, allowing personnel to focus on strategic and
                      innovative pursuits. This boosts efficiency and
                      productivity across the entire organization, making{" "}
                      <a href="https://ai.google/discover/generativeai/">
                        generative AI
                      </a>{" "}
                      for enterprises a valuable investment.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex mt-3 gap-4 Content1">
                  <div>
                    <img src={Data} alt="Description" />
                  </div>
                  <div>
                    <h5 className="mb-4">Data Driven Decision</h5>
                    <p className=" mb-3 nunitoMedium">
                      Generative AI empowers organizations with profound
                      insights into data, enabling well-informed decisions at
                      all levels. By uncovering hidden patterns and trends,
                      businesses can enhance operations and foster expansion,
                      leveraging generative AI services to stay ahead in the
                      competitive landscape.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex mt-3 gap-4 Content1">
                  <div>
                    <img src={Person} alt="Description" />
                  </div>
                  <div>
                    <h5 className="mb-4">Personalized Customer </h5>
                    <p className="mb-3 nunitoMedium">
                      Generative AI for business specializes in customizing user
                      experiences by learning from user interactions. By
                      engaging individuals{" "}
                      <a href="https://aws.amazon.com/what-is/nlp/#:~:text=Natural%20language%20processing%20(NLP)%20is,manipulate%2C%20and%20comprehend%20human%20language.">
                        with Natural Language Processing (NLP)
                      </a>
                      , businesses can increase customer delight and loyalty.
                      Discover how generative AI can elevate business expansion
                      and consumer engagement.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex mt-3 gap-4 Content1">
                  <div>
                    <img src={Enhanced} alt="Description" />
                  </div>
                  <div>
                    <h5 className="mb-4">Enhanced Innovation</h5>
                    <p className=" mb-3 nunitoMedium">
                      Generative AI fosters innovation by generating novel
                      concepts and designs, facilitating prototyping, and
                      product development. Businesses leveraging these
                      capabilities can maintain a competitive edge and
                      capitalize on emerging market opportunities, with support
                      from generative AI development companies.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex mt-3 gap-4 Content1">
                  <div>
                    <img src={Cost} alt="Description" />
                  </div>
                  <div>
                    <h5 className="mb-4">Cost Reduction</h5>
                    <p className=" mb-3 nunitoMedium">
                      Generative AI enables organizations to achieve cost
                      savings through task automation and process optimization.
                      By streamlining operations and enhancing productivity,
                      companies, regardless of scale, can realize significant
                      cost reductions, making generative AI services a
                      cost-effective solution.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="d-flex mt-3 gap-4 Content1">
                  <div>
                    <img src={Competitive} alt="Description" />
                  </div>
                  <div>
                    <h5 className="mb-4">Competitive Advantage</h5>
                    <p className=" mb-3 nunitoMedium">
                      Generative AI for enterprises with a competitive advantage
                      by facilitating the development of unique market
                      solutions. By harnessing the capabilities of generative
                      AI, organizations can differentiate themselves and appeal
                      to a broader clientele, securing their position in the
                      market.
                    </p>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section 2 Mobile */}
      <section className="mobilesec2">
        <Container fluid className="homeserviceCont">
          <Row className="headRow">
            <h3 className="heading">Why Opt for Generative AI Solutions?</h3>
          </Row>
          {/* <marquee className="marq" loop="2"> */}
          <Row className="homeServiceRow ">
            <Slider {...BlogSetting2}>
            <Col>
              <Row className="homeServiceColMain">
                
                <Col>
                  <img src={Increased} alt="" />
                  <h5>
                    Increased <br></br>Efficiency
                  </h5>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Data} alt="" />
                  <h5>
                    Data Driven <br></br>Decision
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain d-flex">
                <Col>
                  <img src={Person} alt="" />
                  <h5>
                    Personalized <br></br>Customer<br></br> Experience
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Enhanced} alt="" />
                  <h5>
                    Enhanced <br></br> Innovation
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Cost} alt="" />
                  <h5>
                    Cost <br></br>Reduction
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Competitive} alt="" />
                  <h5>Competitive<br></br> Advantage</h5>
                </Col>
              </Row>
            </Col>
            
            </Slider>
             
          </Row>
          
          {/* </marquee> */}
        </Container>
      </section>

      <section className="Sec3Desktop">
        <Container>
          <div className="homeService">
            <Row className="w-100">
              <Col lg={12} className="topsec">
                <h1>
                  Our Approach to Generative <br></br> AI Development and
                  Implementation
                </h1>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <Col lg={9} className="homeServiceRow">
                <Row className="rowcolor">
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("AIIcon");
                    }}
                  >
                    <Row className="homeServiceColMain m-3">
                      <Col>
                        <img src={AIIcon} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Strategic <br></br>Consultation
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("GenAICon");
                    }}
                  >
                    <Row className="homeServiceColMain m-3">
                      <Col>
                        <img src={GenAICon} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Customized <br></br>Development
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("MobileAppIcon");
                    }}
                  >
                    <Row className="homeServiceColMain m-3">
                      <Col>
                        <img src={MobileAppIcon} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Seamless <br></br>Integration
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("WebIcon");
                    }}
                  >
                    <Row className="homeServiceColMain m-3">
                      <Col>
                        <img src={WebIcon} alt="" />
                      </Col>
                      <Col>
                        <h5>
                          Performance<br></br> Optimization
                        </h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col lg={8}>
                {hide.AI && (
                  <Row ref={textService} className=" homeServiceRowText">
                    <Col lg={5}>
                      <h4>Strategic Consultation</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                        Begin your generative AI journey with a comprehensive
                        consultation from a leading generative AI development
                        company. Akkenna delves deeply into your company goals,
                        difficulties, and prospects. We want to provide a system
                        that optimizes the effect of generative AI for
                        businesses like yours.{" "}
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.GenAICon && (
                  <Row ref={textService} className=" homeServiceRowText">
                    <Col lg={5}>
                      <h4> Customized Development</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                        {" "}
                        Rest certain that Akkenna's skilled team, which
                        specializes in creating generative AI solutions for
                        companies, has your requirements covered. From idea to
                        implementation, we value customization, ensuring that
                        our generative AI services are perfectly tailored to
                        your industry needs and objectives.
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.MobileAppIcon && (
                  <Row ref={textService} className=" homeServiceRowText">
                    <Col lg={5}>
                      <h4> Seamless Integration</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                        {" "}
                        Integrating generative AI into existing systems might be
                        challenging, but with Akkenna, it is simple. Our
                        seamless integration approach reduces disturbance and
                        increases productivity. We ensure that your company can
                        use the potential of generative AI for business without
                        difficulty.{" "}
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.WebIcon && (
                  <Row ref={textService} className=" homeServiceRowText">
                    <Col lg={5}>
                      <h4>Performance Optimization</h4>
                    </Col>
                    <Col lg={7}>
                      <p>
                        Akkenna is a generative AI development company committed
                        beyond implementation. We know how important monitoring
                        and optimization are for business generative AI. Our
                        team constantly adjusts generative AI for business
                        changes. This constant work ensures your company's
                        longevity.
                      </p>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="Sec3Mobile">
        <Container className="homeProduct">
          <Row>
            <Col lg={10}>
              <Row>
                <Col lg={6}>
                  <Row className="homeProductMain">
                    <Col lg={12}>
                      <h1 className="headcont">
                        Our Approach to Generative AI Development and
                        Implementation
                      </h1>
                    </Col>

                    <Col lg={7}>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Strategic Consultation
                          </Accordion.Header>
                          <Accordion.Body>
                            Begin your generative AI journey with a
                            comprehensive consultation from a leading generative
                            AI development company. Akkenna delves deeply into
                            your company goals, difficulties, and prospects. We
                            want to provide a system that optimizes the effect
                            of generative AI for businesses like yours.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            Customized Development
                          </Accordion.Header>
                          <Accordion.Body>
                            Rest certain that Akkenna's skilled team, which
                            specializes in creating generative AI solutions for
                            companies, has your requirements covered. From idea
                            to implementation, we value customization, ensuring
                            that our generative AI services are perfectly
                            tailored to your industry needs and commercial
                            objectives.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            Seamless Integration
                          </Accordion.Header>
                          <Accordion.Body>
                            Integrating generative AI into existing systems
                            might be challenging, but with Akkenna, it is
                            simple. Our seamless integration approach reduces
                            disturbance and increases productivity. We ensure
                            that your company can use the potential of
                            generative AI for business without difficulty.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            Performance Optimization
                          </Accordion.Header>
                          <Accordion.Body>
                            Akkenna is a generative AI development company
                            committed beyond implementation. We know how
                            important monitoring and optimization are for
                            business generative AI. Our team constantly adjusts
                            generative AI for business changes. This constant
                            work ensures your company's longevity.
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

      {/* mobile call to action */}
      <section className="MobileCTA mt-4">
        <Container className="homeCallContain">
          <Col lg={10} className="homeCallAction">
            <Row>
              <Col lg={6} className="mt-2">
                <div>
                  <h4>See Generative AI in action! </h4>
                  <p>
                    Request a personalized demo to witness how our solutions can
                    elevate your business.
                  </p>
                </div>
              </Col>
              <Col lg={5} className="homeCallContainMobile">
                <div>
                  <button>Get a Custom AI Demo</button>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>

      <section className="DesktopKeyService">
        <Container>
          <Row>
            <div className="d-flex flex-row justify-content-center mb-2">
              <h1 className="ServiceHead">Our Key Services</h1>
            </div>
          </Row>
          <Row>
            <div className="d-flex flex-row justify-content-center para1 text-center">
              {/*--- <p>
                Begin your generative AI journey with a comprehensive
                consultation from a <br />
                leading generative AI development company.
              </p> ---*/}
            </div>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mt-4">
            <Col
              lg={10}
              className="d-flex justify-content-center align-items-center flex-wrap"
            >
              <Col lg={4} className="ColElement">
                <div className="borders">
                  <div>
                    <img src={Advisor} alt="" />
                  </div>
                  <div>
                    <h6 className="headings">Generative AI Consulting</h6>
                  </div>
                  <div>
                    <p className="para">
                      As a premier generative AI development 
                      company
                    </p>
                  </div>
                  <div className="Arrows">
                    <img src={Arrows} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="ColElement">
                <div className="borders">
                  <div>
                    <img src={Idea} alt="" />
                  </div>
                  <div>
                    <h6 className="headings">Knowledge Base Creation</h6>
                  </div>
                  <div>
                    <p className="para">
                      Transform your organization's 
                      unstructured assets
                    </p>
                  </div>
                  <div className="Arrows">
                    <img src={Arrows} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="ColElement">
                <div className="borders">
                  <div>
                    <img src={Programming} alt="" />
                  </div>
                  <div>
                    <h6 className="headings">Large Language Model</h6>
                  </div>
                  <div>
                    <p className="para">
                      Utilizing advanced machine learning 
                      models
                    </p>
                  </div>
                  <div className="Arrows">
                    <img src={Arrows} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="ColElement">
                <div className="borders">
                  <div>
                    <img src={Promptbox} alt="" />
                  </div>
                  <div>
                    <h6 className="headings">Prompt Engineering</h6>
                  </div>
                  <div>
                    <p className="para">
                      Our generative AI development teams  excel at
                      creating
                    </p>
                  </div>
                  <div className="Arrows">
                    <img src={Arrows} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="ColElement">
                <div className="borders">
                  <div>
                    <img src={ChatBox} alt="" />
                  </div>
                  <div>
                    <h6 className="headings">Chatbot Development</h6>
                  </div>
                  <div>
                    <p className="para">
                      Empower your marketing, and
                       customer service efforts
                    </p>
                  </div>
                  <div className="Arrows">
                    <img src={Arrows} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="ColElement">
                <div className="borders">
                  <div>
                    <img src={Solution} alt="" />
                  </div>
                  <div>
                    <h6 className="headings">Industry-Specific Solutions</h6>
                  </div>
                  <div>
                    <p className="para">
                      Akkenna, a leading generative AI  development
                      company
                    </p>
                  </div>
                  <div className="Arrows">
                    <img src={Arrows} alt="" />
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="MobileKeyService mt-5">
        <Container fluid className="homeserviceCont">
          <Row>
            <h3 className="headtext">Our Key Services</h3>
          </Row>
          <Row className="homeServiceRow">
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Advisor} alt="" />
                </Col>
                <Col>
                  <h5>
                    Generative AI <br></br>Consulting
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Idea} alt="" />
                </Col>
                <Col>
                  <h5>
                    Knowledge Base <br></br>Creation
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Programming} alt="" />
                </Col>
                <Col>
                  <h5>
                    Large Language <br></br>Model
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Promptbox} alt="" />
                </Col>
                <Col>
                  <h5>
                    Prompt <br></br> Engineering
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={ChatBox} alt="" />
                </Col>
                <Col>
                  <h5>
                    Chatbot <br></br>Development
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="homeServiceColMain">
                <Col>
                  <img src={Solution} alt="" />
                </Col>
                <Col>
                  <h5>
                    Industry-Specific<br></br> Solutions
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="DesktopCTA">
        <NewCallToAction
          header="See Generative AI in action! Request a personalized demo to witness how our solutions can elevate your business."
          buttonText="Get a Custom AI Demo"
        />
      </section> */}

      <section className="homeDisplayCard DesktopDisplaycard">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={11} className="homeDisplayCardCol">
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={4} className="homedisplaycardfirst">
                  <div>
                    <h3>Why Choose Us?</h3>
                  </div>
                  <div>
                     <small>
                     Akkenna provides Generative AI services with unmatched experience and unique solutions. We push AI development boundaries with excellence.
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
                        <img src={BookMarkIcon} alt="" />
                      </div>
                      <div>
                        <h5>A superior comprehension of algorithms</h5>
                      </div>
                      <div>
                        <p>
                          Utilize the newest advancements in generative models,
                          including{" "}
                          <a href="https://en.wikipedia.org/wiki/Generative_adversarial_network">
                            GANs
                          </a>{" "}
                          (Generative Adversarial Networks),{" "}
                          <a href="https://vaes.ai/">VAEs</a> (Variational
                          Autoencoders), and transformer models, with our
                          generative AI services and solutions. Expertise in
                          complex AI systems lets us offer new,
                          solutions.
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
                        <img src={BookMarkIcon} alt="" />
                      </div>
                      <div>
                        <h5>Diverse work history</h5>
                      </div>
                      <div>
                        <p>
                          Utilize a lot of generative AI knowledge in many
                          fields, like manufacturing, retail, healthcare, and
                          banking. With this cross-industry knowledge, we can
                          understand the unique problems and possibilities in
                          each sector and make our solutions fit those needs.
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
                        <img src={BookMarkIcon} alt="" />
                      </div>
                      <div>
                        <h5>Chatbot artificial intelligence system</h5>
                      </div>
                      <div>
                        <p>
                          Using Natural Language Processing (NLP) and
                          Understanding (NLU), you can make chatbots and virtual
                          helpers that understand and respond like humans. This
                          will greatly improve customer service, cut down on
                          response times, and make customers happier overall.
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
                        <img src={BookMarkIcon} alt="" />
                      </div>
                      <div>
                        <h5>Expertise in the field</h5>
                      </div>
                      <div>
                        <p>
                          Akkenna a generative AI development company has built
                          relationships with some of the biggest names in the
                          software, life sciences, and financial services
                          businesses, which shows how well we know these fields.
                      
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
                </Col>
                <Col lg={8} className="homedisplaycardSecondMobile">
                  {selectedOption == "option1" && (
                    <>
                      <Row>
                        <Col sm={12} className="homedisplaySecondMobileCol">
                          <img
                            src={BookMarkIcon}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>A superior comprehension of algorithms</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            Utilize the newest advancements in generative
                            models, including{" "}
                            <a href="https://en.wikipedia.org/wiki/Generative_adversarial_network">
                              GANs
                            </a>{" "}
                            (Generative Adversarial Networks),{" "}
                            <a href="https://vaes.ai/">VAEs</a> (Variational
                            Autoencoders), and transformer models, with our
                            generative AI services and solutions. 
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
                            src={BookMarkIcon}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>Diverse work history</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            Utilize a lot of generative AI knowledge in many
                            fields, like manufacturing, retail, healthcare, and
                            banking. With this cross-industry knowledge, we can
                            understand the unique problems and possibilities in
                            each sector and make our solutions fit those needs.
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
                            src={BookMarkIcon}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>Chatbot artificial intelligence system</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            Using Natural Language Processing (NLP) and
                            Understanding (NLU), you can make chatbots and
                            virtual helpers that understand and respond like
                            humans. This will greatly improve customer service,
                            cut down on response times, and make customers
                            happier overall.
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
                            src={BookMarkIcon}
                            alt=""
                            className="homedisplayMobileBookmark"
                          />
                          <h5>Expertise in the field</h5>
                        </Col>
                        <Col sm={12}>
                          <p>
                            Akkenna a generative AI development company has
                            built relationships with some of the biggest names
                            in the software, life sciences, and financial
                            services businesses, which shows how well we know
                            these fields. 
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
                        A superior comprehension<br></br> of algorithms
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
                        Diverse work<br></br> history
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
                        Chatbot artificial <br></br>intelligence system
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
                        Expertise in the <br></br>field
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="max-width-100 mb-3">
          <div className="main-Div">
            <Row className=" mt-5 ">
              <div className="RecentHeading">
                <div className="head">
                  <h2>Industry We Serve</h2>
                </div>
                {/* <div>
                  <h6 className="text-smallHeading circularBook">
                    Begin your generative AI journey with a comprehensive
                    consultation from a <br></br>leading generative AI
                    development company.
                  </h6>
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
                    Financial <br /> services
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Banking} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Banking</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Insurance} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Insurance</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Investment} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Investment</h6>
                </div>
              </Col>

              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Fintech} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>FinTech</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Payment} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Payments</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Retail} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Retail</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Health} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Healthcare</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Manufacturing} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Manufacturing</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Professional} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Professional <br />
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
                    Transportation <br />
                    and Logistics
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Tele} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Telecommunications</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Construction} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Construction</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Hospital} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Travel and <br /> Hospitality
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Banking} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Construction</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Hospital} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>
                    Travel and <br /> Hospitality
                  </h6>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* portfolio */}
      <section >
        
        <Container className="DesktopPortfolio">
        <div className="row text-center d-flex justify-content-center align-items-center">
          <div className="col-md-10 mb-2">
            <div className="process-title text-center">
              <h5>Our Portfolio</h5>
            </div>
          </div>
          <div className="col-md-10">
            <div className="">
              <p>We've got all your payments covered</p>
            </div>
          </div>
        </div>
        <div className="row Sliders">
          <div className="col-lg-3 centered-div">
            <img className="imgone" src={Slider1} alt="" />
          </div>
          <div className="col-lg-3  centered-div">
            <img className="imgtwo" src={Slider2} alt="" />
          </div>
          <div className="col-lg-3  centered-div">
            <img className="imgthree" src={Slider3} alt="" />
          </div>
          <div className="col-lg-3  centered-div">
            <img src={Slider3} alt="" />
          </div>
          <div className="col-lg-3  centered-div">
            <img src={Slider3} alt="" />
          </div>
        </div>
        </Container>
      </section>

      <section className="homeAboutMobile homeProdScrollMobile">
        <Container>
          <Row>
            <div className="homeProdMobileHead">
              <div>
                <p>Our portfolio</p>
                <h4>Discover Our Game Changing Products</h4>
              </div>
              <div>
                <img src={GreaterArrow} alt="" />
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="GenAiCallToAction DesktopCallToAction">
        <NewCallToAction
          header="Embark on your AI journey today. Start leveraging the power of Generative AI for your business success"
          buttonText="Start Your AI Journey"
        />
      </section>

      {/* section icon and services Desktop */}
      <section className="component3 DesktopIconServices">
        <Container>
          <Row className="rowmain justify-content-center">
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

            <Col lg={10} className="d-flex justify-content-center">
              <Col lg={4} className="analytics-left m-2">
                <div
                  className={`nav py-2 px-3 ${
                    state === "question-1" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-1");
                  }}
                >
                  <div>
                    <h5> Machine Learning</h5>
                  </div>
                  <div className="right-icon">
                    {/* <FaArrowRight /> */}
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
                    <h5>Program Languages</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="arrow" />
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
                    <h5> Cloud Computing</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="arrow" />
                  </div>
                </div>
              </Col>

              <Col lg={4} className="analytics-left m-2">
                <div
                  className={`nav py-2 px-3 ${
                    state === "question-4" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-4");
                  }}
                >
                  <div>
                    <h5>Big Data Technologies</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="arrow" />
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
                    <h5>Natural Language </h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="arrow" />
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
                    <h5>Data Visualization Tools</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="arrow" />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="analytics-left m-2">
                <div
                  className={`nav py-2 px-3 ${
                    state === "question-7" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-7");
                  }}
                >
                  <div>
                    <h5>DevOps and CI/CD</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="arrow" />
                  </div>
                </div>
                <div
                  className={`nav py-2 px-3 ${
                    state === "question-8" && "active"
                  }`}
                  onClick={() => {
                    handleChange("question-8");
                  }}
                >
                  <div>
                    <h5>Version Control</h5>
                  </div>
                  <div className="right-icon">
                    <img src={RightArrow} alt="arrow" />
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
          <Row className=" align-items-center justify-content-center">
            <Col lg={8}>
              {state === "question-1" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={TensorFlow} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>TensorFlow</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Pytorch} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>PyTorch</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Keras} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Keras</h4>
                    </div>
                  </Col>
                </div>
              )}
              {state === "question-2" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={Python} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Python</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Java} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Java</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Cprogram} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>C++</h4>
                    </div>
                  </Col>
                </div>
              )}
              {state === "question-3" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={Aws} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>AWS </h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Azure} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Azure</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Cloud} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Google Cloud Platform</h4>
                    </div>
                  </Col>
                </div>
              )}
              {state === "question-4" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={Hadoop} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Apache Hadoop</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Apache} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Apache Spark</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Hive} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Hive</h4>
                    </div>
                  </Col>
                </div>
              )}
              {state === "question-5" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={PythonNltk} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>NLTK (Natural Language Toolkit) SpaCy</h4>
                    </div>
                  </Col>

                  {/*----- <Col lg={4} className="answercol">
                    <div>
                      <img src={SaasIcon} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Financial 3</h4>
                    </div>
                    
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={SaasIcon} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Financial 4</h4>
                    </div>
                    
                  </Col> -----*/}
                </div>
              )}
              {state === "question-6" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={Tableau} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Tableau</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={PowerBI} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Power BI</h4>
                    </div>
                  </Col>

                  {/*-----
                   <Col lg={4} className="answercol">
                    <div>
                      <img src={Rlang} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>R</h4>
                    </div>
                    
                  </Col> 
                  -----*/}
                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Python} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Python</h4>
                    </div>
                  </Col>
                </div>
              )}
              {state === "question-7" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={Docker} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Docker</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Jerkins} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Jenkins</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Kubernets} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Kubernetes</h4>
                    </div>
                  </Col>
                </div>
              )}
              {state === "question-8" && (
                <div className="d-flex flex-coloum">
                  <Col lg={4} className="answercol">
                    <div className="align-items-center">
                      <img src={Git} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Git</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Github} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>GitHub</h4>
                    </div>
                  </Col>

                  <Col lg={4} className="answercol">
                    <div>
                      <img src={Gitbash} alt="icon" />
                    </div>
                    <div className="m-2">
                      <h4>Gitbash</h4>
                    </div>
                  </Col>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="MobileCTA mt-2">
        <Container className="homeCallContain">
          <Col lg={10} className="homeCallAction">
            <Row>
              <Col lg={6} className="mt-2">
                <div>
                  <h4>Embark on your AI journey today!</h4>
                  <p>
                    Start leveraging the power of Generative AI for your
                    business success
                  </p>
                </div>
              </Col>
              <Col lg={5} className="homeCallContainMobile">
                <div>
                  <button>Start Your Own Journey</button>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>

      {/* section icon and services Mobile view */}
      <section className="mobileIconSerices mt-5">
        <Container className="mobileSerives">
          <Row>
            <Col lg={10}>
              <Row>
                <Col lg={6}>
                  <h1 className="headcont">By region of analytics</h1>
                </Col>
                <Col lg={7}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Machine Learning Frameworks
                      </Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={TensorFlow} alt="icon" />
                          <h4>TensorFlow</h4>
                        </div>
                        <div>
                          <img src={Pytorch} alt="icon" />
                          <h4>PyTorch</h4>
                        </div>
                        <div>
                          <img src={Keras} alt="icon" />
                          <h4>Keras</h4>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Programming Languages</Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={Python} alt="icon" />
                          <h4>Python</h4>
                        </div>
                        <div>
                          <img src={Java} alt="icon" />
                          <h4>Java</h4>
                        </div>
                        <div>
                          <img src={Cprogram} alt="icon" />
                          <h4>C++</h4>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Cloud Computing Platforms
                      </Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={Aws} alt="icon" />
                          <h4>AWS</h4>
                        </div>
                        <div>
                          <img src={Azure} alt="icon" />
                          <h4>Azure</h4>
                        </div>
                        <div>
                          <img src={Cloud} alt="icon" />
                          <h4>Google Cloud Platform</h4>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Big Data Technologies</Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={Hadoop} alt="icon" />
                          <h4>Apache Hadoop</h4>
                        </div>
                        <div>
                          <img src={Apache} alt="icon" />
                          <h4>Apache Spark</h4>
                        </div>
                        <div>
                          <img src={Hive} alt="icon" />
                          <h4>Hive</h4>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Natural Language Processing (NLP)
                      </Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={PythonNltk} alt="icon" />
                          <h4>NLTK (Natural Language Toolkit) SpaCy</h4>
                        </div>
                        {/* <div>
                          <img src={Pytorch} alt="icon" />
                          <h4>PyTorch</h4>
                          </div>
                          <div>
                          <img src={Keras} alt="icon" />
                          <h4>Keras</h4>
                          </div> */}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Data Visualization Tools
                      </Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={Tableau} alt="icon" />
                          <h4>Tableau</h4>
                        </div>
                        <div>
                          <img src={PowerBI} alt="icon" />
                          <h4>Power BI</h4>
                        </div>
                        <div>
                          <img src={Python} alt="icon" />
                          <h4>Python</h4>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>DevOps and CI/CD</Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={Docker} alt="icon" />
                          <h4>Docker</h4>
                        </div>
                        <div>
                          <img src={Jerkins} alt="icon" />
                          <h4>Jenkins</h4>
                        </div>
                        <div>
                          <img src={Kubernets} alt="icon" />
                          <h4>Kubernetes</h4>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>Version Control</Accordion.Header>
                      <Accordion.Body className="text-center">
                        <div>
                          <img src={Git} alt="icon" />
                          <h4>Git</h4>
                        </div>
                        <div>
                          <img src={Github} alt="icon" />
                          <h4>GitHub</h4>
                        </div>
                        <div>
                          <img src={Gitbash} alt="icon" />
                          <h4>Gitbash</h4>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Col>
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
                <Slider {...BlogSetting1}>
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

      <section className="MobileBlogMain mt-3">
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
          setFormshow1(true);
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

      <FormCanva show={Formshow1} handleClose={handleFormClose} />

      {/* <section className="GenAiContactForm DesktopContactForm">
        <NewContactForm />
      </section> */}

      <section className="GenAiFaq DesktopFaq">
        <NewFaq array1={sampleArray} />
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
      <FaqCanva show={Faqshow} handleClose={handleFaqClose} />

      {/*<section className="GemAiBlog">
        <NewBlogPage />
      </section> */}
    </main>
  );
};

export default GenAi;
