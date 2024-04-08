import "../../Style/MvpPage.css";
import "../../Style/Mvpresponsive.css";

import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Conatct1 from "../../Assets/Image/NewService/Mvp/Conatct-1.svg";
import Msg from "../../Assets/Image/NewService/Mvp/Msg.svg";
import Clk from "../../Assets/Image/NewService/Mvp/Clk.svg";
import Layer from "../../Assets/Image/NewService/Mvp/Layer.svg";
import Gold from "../../Assets/Image/NewService/Mvp/Gold.svg";
import RR from "../../Assets/Image/NewService/Software/rr.svg";
import Festive from "../../Assets/Image/NewService/Software/festiv.svg";
import Win from "../../Assets/Image/NewService/Software/win.svg";

import Num1 from "../../Assets/Image/NewService/Mvp/Num1.svg";
import Num2 from "../../Assets/Image/NewService/Mvp/Num2.svg";
import Num3 from "../../Assets/Image/NewService/Mvp/Num3.svg";
import Num4 from "../../Assets/Image/NewService/Mvp/Num4.svg";
import Num5 from "../../Assets/Image/NewService/Mvp/Num5.svg";
import Ai from "../../Assets/Image/NewService/Mvp/Ai.svg";
import Ai2 from "../../Assets/Image/NewService/Mvp/Ai2.svg";
import Robot from "../../Assets/Image/NewService/Mvp/Robot.svg";
import Tag1 from "../../Assets/Image/NewService/Mvp/Tag1.svg";
import Tag2 from "../../Assets/Image/NewService/Mvp/Tag2.svg";

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
import NewFaq from "../../Components/NewFaq";
import NewBlogPage from "../../Components/NewBlogPage";
import NewContactForm from "../../Components/NewContactForm";
import MvpImage from "../../Assets/Image/NewService/Mvp/mvbimageone.svg"
import aboutMVP from "../../Assets/Image/NewService/Mvp/aboutMVP.svg"

import cardTime from "../../Assets/Image/NewHome/cardTime.svg";
import cardEye from "../../Assets/Image/NewHome/cardEye.svg";
import TopDevpBlog from "../../Assets/Image/NewHome/TopDevpBlog.svg";
import WebDevBlog from "../../Assets/Image/NewHome/WebDevBlog.svg";
import EvloutionBlog from "../../Assets/Image/NewHome/EvloutionBlog.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MvpPage = () => {
  const [hide, Setshow] = useState({
    Expertise: true,
    Business: false,
    Smooth: false,
    Design: false,
    Contentment: false,
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
          Contentment: false,
        });
        break;
      case "Business":
        Setshow({
          ...hide,
          Expertise: false,
          Business: true,
          Smooth: false,
          Design: false,
          Contentment: false,
        });
        break;
      case "Smooth":
        Setshow({
          ...hide,
          Expertise: false,
          Business: false,
          Smooth: true,
          Design: false,
          Contentment: false,
        });
        break;
      case "Design":
        Setshow({
          ...hide,
          Expertise: false,
          Business: false,
          Smooth: false,
          Design: true,
          Contentment: false,
        });
        break;
      case "Contentment":
        Setshow({
          ...hide,
          Expertise: false,
          Business: false,
          Smooth: false,
          Design: false,
          Contentment: true,
        });
        break;
      default:
        Setshow({
          ...hide,
          Expertise: true,
          Business: false,
          Smooth: false,
          Design: false,
          Contentment: false,
        });
    }
  };

  const [state1, setState1] = useState("question-1");
  const handleChange1 = (value) => {
    setState1(value);
  };
  const sampleArray = [
    {
      question: `<h6>1. What sets Akkenna Animation and Technologies apart as your MVP app development partner?</h6>`,
      answer: `<p>Akkenna stands out as an MVP app development partner due to our focus on user-centric design, rapid iteration capabilities, and a track record of delivering successful MVPs that meet client objectives.</p>`,
    },
    {
      question: `<h6>2. How does Akkenna determine the cost and timeline for creating custom applications?</h6>`,
      answer: `<p>We determine the cost and timeline for custom applications through a detailed analysis of project requirements, considering factors such as scope, complexity, and desired features, ensuring transparent communication and adherence to deadlines.</p>`,
    },
    {
      question: `<h6>3. Which technologies and frameworks do Akkenna specialize in for MVP development?</h6>`,
      answer: `<p>Akkenna specializes in a wide range of technologies and frameworks for MVP development, including Python, Django, React Native, and more, tailored to the specific needs of each project to deliver optimal results.</p>`,
    },
    {
      question: `<h6>4. How does Akkenna ensure a seamless transition from MVP to a fully-fledged product for your business needs?</h6>`,
      answer: `<p>We ensure a seamless transition from MVP to a fully-fledged product by leveraging agile methodologies, continuous feedback loops, and scalable architecture, ensuring that the final product meets evolving business needs and market demands.</p>`,
    },
    {
      question: `<h6>5. What criteria should businesses consider when selecting a trustworthy MVP software development company?</h6>`,
      answer: `<p>Businesses should consider factors such as expertise, portfolio, communication, and transparency when selecting a trustworthy MVP software development company.</p>`,
    },
    {
      question: `<h6>6. How does Akkenna Animation and Technologies stand out as a reliable partner for MVP software development?</h6>`,
      answer: `<p>Akkenna stands out as a reliable partner for MVP software development due to our commitment to quality, transparency, and client satisfaction, demonstrated through successful project deliveries and long-term partnerships.</p>`,
    },
    {
      question: `<h6>7. What benefits can smart entrepreneurs expect from partnering with Akkenna to build their MVP?</h6>`,
      answer: `<p>Smart entrepreneurs partnering with us can expect benefits such as accelerated time-to-market, cost-effective solutions, and access to a dedicated team of experts focused on realizing their vision and achieving business objectives.</p>`,
    },
    {
      question: `<h6>8. How can Akkenna assist entrepreneurs in realizing their MVP development goals effectively?</<h6>`,
      answer: `<p>We assist entrepreneurs in realizing their MVP development goals effectively through comprehensive analysis, user-centric design, iterative development, and strategic guidance, ensuring successful product launches and continued growth.</p>`,
    },
  ];

  return (
    <main id="MvpPage">
      <section className="Discover">
        <Container fluid className="Banner">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <div className="Discdiv">
                  <div className="DisContent">
                    <h4>
                      MVP Development <br></br>Company- Your Premier<br></br>
                      MVP Development Partner
                    </h4>
                  </div>
                  <div className="DisContent">
                    <p>
                      Finding an MVP Development Partner is Simple, but Choosing
                      the Finest is Essential.<br></br> Akkenna Animation
                      Technologies Stands Out as Your Premier MVP Development
                      Partner.
                    </p>
                  </div>
                  <div className="DisContent">
                    <button>Get Involved</button>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-center">
                <img src={MvpImage} alt="" srcset="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      {/* decoding section */}

      <section>
        <Container>
          <Row className="Decoding-Banner">
            <Col lg={6} md={6} sm={6} className="d-flex align-items-center justify-content-center">
              <img src={aboutMVP} alt="" srcset="" className="img-fluid" />
            </Col>
            <Col lg={6} md={6} sm={6} >
              <div className="Decoding-Heading mb-2">
                <h5>
                  A Strong MVP is the Foundation of Your Product's Success
                </h5>
              </div>
              <div className="Decoding-Content d-flex flex-column gap-3 mt-2">
                <p>Our area of expertise at Akkenna Animations and Technology is MVP development services (Minimum Viable Product), which we leverage to create revolutionary advancements. We, being a leading MVP development company, recognize the importance of providing solutions of exceptional quality that align with your vision and engage your target audience.</p>
                <p>An excellent MVP lays the groundwork for achieving your product's objectives. It enables you to validate market demand, test your ideas, and collect valuable user feedback while minimizing your time and resources. Akkenna Animations and Technology is dedicated to assisting you in developing an exceptional MVP that lays the foundation for sustained prosperity</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Development Solutions Section */}

      <section className="MvpExplore">
        <Container>
          <Row className="">
            <Col className="Solution-Heading justify-content-center align-items-center">
              <h4>How Akkenna Animation & Technologies Craft MVPs</h4>
              <p className="subpara subpara-black mt-2">We specialize in full-cycle custom software product development services at Akkenna Technologies. Navigate each phase of the endeavor with ease.</p>
            </Col>
            <Col>
              <div className="Solution-Row d-flex flex-column gap-3">
                <div>
                  <div className="d-flex gap-3 Solution-Content">
                    <div>
                      <img src={Conatct1} alt="Description" />
                    </div>
                    <div>
                      <h5 className="mb-2">Discovery and Ideation</h5>
                      <p className="nunitoMedium mb-0">
                        Understanding your goals, audience, and market is the first
                        step. Our staff brainstorms with you to identify signature
                        MVP characteristics.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-3 Solution-Content">
                    <div>
                      <img src={Msg} alt="Description" />
                    </div>
                    <div>
                      <h5 className="mb-2">Prototyping</h5>
                      <p className="nunitoMedium mb-0">
                        After understanding your demands, we create interactive MVP
                        functionality and user flow prototypes. See the finished
                        product and provide feedback before development.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-3 Solution-Content">
                    <div>
                      <img src={Clk} alt="Description" />
                    </div>
                    <div>
                      <h5 className="mb-2">Development</h5>
                      <p className=" nunitoMedium mb-0">
                        Our experienced developers design your MVP using
                        cutting-edge technologies and best practices. We use agile
                        development to be flexible and iterate quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="Solution-Row d-flex flex-column gap-3">
                <div>
                  <div className="d-flex gap-3 Solution-Content">
                    <div>
                      <img src={Layer} alt="Description" />
                    </div>
                    <div>
                      <h5 className="mb-2">Testing and Feedback</h5>
                      <p className="nunitoMedium">
                        We thoroughly evaluate your MVP before launch for quality
                        and usability. We value your comments and make changes to
                        fit your needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-3 Solution-Content">
                    <div>
                      <img src={Gold} alt="Description" />
                    </div>
                    <div>
                      <h5 className="mb-2">Launch and Iteration</h5>
                      <p className="nunitoMedium">
                        After testing, we help you launch your MVP. We monitor
                        performance, acquire customer feedback, and iterate the
                        product to ensure success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ServiceMvp section  */}

      <section className="ServiceMvp">
        <Container>
          <div className="MvpService">
            <Row className="w-100">
              <Col lg={12}>
                <h1>
                  Why Choose Akkenna Animations and Technology for<br></br> MVP
                  Development Services?
                </h1>
                <p className="subpara">Begin your generative AI journey with a comprehensive consultation from a <br></br>
                  leading generative AI development company. </p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              {/* <Col lg={12} className="MvpServiceRow"> */}
              <Col lg={12} className="MvpServiceRow">
                <Row className="rowcolor">
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Expertise");
                    }}
                  >
                    <Row className="MvpServiceColMain ">
                      <Col>
                        <img src={Ai} alt="" />
                      </Col>
                      <Col>
                        <img src={Num1} alt="" />
                      </Col>
                      <Col>
                        <h5>Expertise</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Business");
                    }}
                  >
                    <Row className="MvpServiceColMain ">
                      <Col>
                        <img src={Robot} alt="" />
                      </Col>
                      <Col>
                        <img src={Num2} alt="" />
                      </Col>
                      <Col>
                        <h5>Customization</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Smooth");
                    }}
                  >
                    <Row className="MvpServiceColMain ">
                      <Col>
                        <img src={Tag1} alt="" />
                      </Col>
                      <Col>
                        <img src={Num3} alt="" />
                      </Col>
                      <Col>
                        <h5>Innovation</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Design");
                    }}
                  >
                    <Row className="MvpServiceColMain ">
                      <Col>
                        <img src={Tag2} alt="" />
                      </Col>
                      <Col>
                        <img src={Num4} alt="" />
                      </Col>
                      <Col>
                        <h5>Punctuality</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    onMouseOver={() => {
                      handleMouseOver("Contentment");
                    }}
                  >
                    <Row className="MvpServiceColMain ">
                      <Col>
                        <img src={Ai2} alt="" />
                      </Col>
                      <Col>
                        <img src={Num5} alt="" />
                      </Col>
                      <Col>
                        <h5>Contentment</h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center mt-3">
              <Col lg={10}>
                {hide.Expertise && (
                  <Row className=" MvpServiceRowText">
                    <Col lg={4}>
                      <h4>Expertise</h4>
                    </Col>
                    <Col lg={8}>
                      <p>
                        Our proficiency and knowledge in MVP software
                        development have been refined over an extended period,
                        enabling us to provide market-leading solutions.
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.Business && (
                  <Row className=" MvpServiceRowText">
                    <Col lg={4}>
                      <h4> Customization</h4>
                    </Col>
                    <Col lg={8}>
                      <p>
                        Our MVP development services are{" "}
                        <a href="https://www.akkenna.com/about">
                          meticulously customized
                        </a>{" "}
                        to correspond with your unique specifications and goals
                        precisely.
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.Smooth && (
                  <Row className=" MvpServiceRowText">
                    <Col lg={4}>
                      <h4> Innovation</h4>
                    </Col>
                    <Col lg={8}>
                      <p>
                        We design minimum viable products (MVPs) that can stand
                        out in today's highly competitive market by embracing
                        cutting-edge technology and industry trends.
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.Design && (
                  <Row className=" MvpServiceRowText">
                    <Col lg={4}>
                      <h4>Customer Satisfaction</h4>
                    </Col>
                    <Col lg={8}>
                      <p>
                        We prioritize your satisfaction above all else. We
                        highly value your input, promptly attend to any
                        concerns, and strive to achieve your utmost satisfaction
                        with the final product.
                      </p>
                    </Col>
                  </Row>
                )}
                {hide.Contentment && (
                  <Row className=" MvpServiceRowText">
                    <Col lg={4}>
                      <h4>Contentment</h4>
                    </Col>
                    <Col lg={8}>
                      <p>
                        Our proficiency and knowledge in MVP software
                        development have been refined over an extended period,
                        enabling us to provide market-leading solutions.
                      </p>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CallToAction Section */}
      <section>
        <NewCallToAction
          header="Need Assistance Developing Your MVP?"
          buttonText="Initiate Your Project Discussion Today"
        />
      </section>

      {/*  section blackbackground */}
      <section className="ServiceMvp padd-20">
        <Container>
          <div className="MvpService">
            <Row className="w-100">
              <Col lg={12}>
                <h1>Guide To SaaS Application Development</h1>
                <p className="subpara">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/*  section blackbackground */}
      <section className="DevelopMvp">
        <Container className="mainbox">
          <Row className="">
            <Col lg={6} className="" >
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
                          className={`radiobox ${state1 === "question-1" && "active"
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
                          className={`radiobox ${state1 === "question-2" && "active"
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
                          className={`radiobox ${state1 === "question-3" && "active"
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
                          className={`radiobox ${state1 === "question-4" && "active"
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
                          className={`radiobox ${state1 === "question-5" && "active"
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
            <Col lg={6} className="d-flex flex-column justify-content-center">
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
      {/* FAQ */}
      <NewFaq array1={sampleArray} title={"We bring people & technology together"} description={"<p className='subpara'>Together, we can design and build the most cutting-edge digital products. </br>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>"} />

      {/* Our Recent works */}
      <section className="DesktopRecentWork">
        <Container className="Our-Banner">
          <div className=" ">
            <Row className="paddingtb-20">
              <Col>
                <div className=" text-center Our-Heading">
                  <h4>Our Recent Works</h4>
                  <p className="subpara">
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
            {/* <div className="Our-Row-wrapper"> */}
              <Row className="Our-Row Our-Row-wrapper">
                <Col lg={4} className="d-flex flex-column align-items-center">
                  <div className="Our-Content">
                    <div className="Our-Img">
                      <img src={RR} alt="" />
                    </div>
                    <div className="ourworkpara">
                    <p className="mb-2">Rehappy</p>
                      <p>
                        React.js boosts the Rehabilitation center listing site:
                        modular,fast rendering, dynamic content, and simplified
                        UI for seamless browsing.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="d-flex flex-column align-items-center">
                  <div className="Our-Content">
                    <div className="Our-Img">
                      <img src={Festive} alt="" />
                    </div>
                    <div className="ourworkpara">
                    <p className="mb-2">Festiv Tickets</p>
                      <p>
                        Choose React.js for Event Carnival Management: modular,
                        fast rendering, extensive ecosystem for dynamic platform.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="d-flex flex-column align-items-center">
                  <div className="Our-Content">
                    <div className="Our-Img">
                      <img src={Win} alt="" />
                    </div>
                    <div className="ourworkpara">
                    <p className="mb-2">WinEnergy</p>
                      <p>
                        Opt for React.js: efficient component reuse, fast
                        performance, simplified state management.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            {/* </div> */}
          </div>
        </Container>
      </section>

      {/* Industry section */}

      <section>
        <Container className="">
          <div className="main-Div">
            <Row className="mb-1 ">
              <div className="RecentHeading">
                <div className="text-center texts-Heading">
                  <h4 className=" DMSansBold">
                    Industry We Serve
                  </h4>
                  <p className="subpara">Begin your generative AI journey with a comprehensive consultation from a
                    <br></br>leading generative AI development company. </p>
                </div>
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
                  <h6>Banking <br></br> services</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Insurance} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Insurance <br></br> services</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Investment} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Investment <br></br> Plan</h6>
                </div>
              </Col>

              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Fintech} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>FinTech <br></br> Solutions</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Payment} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Payments <br></br> Methods</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Retail} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Retail <br></br>option</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Health} alt="" className="imgs-size" />
                </div>{" "}
                <div>
                  <h6>Healthcare <br></br> solutions</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Manufacturing} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Manufacturing <br></br> Company</h6>
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
                    & Logistics
                  </h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Tele} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Tele <br></br>communications</h6>
                </div>
              </Col>
              <Col className="sass-border" lg={3}>
                <div>
                  <img src={Construction} alt="" className="imgs-size" />
                </div>
                <div>
                  <h6>Construction <br></br> Method</h6>
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
                  <h6>Construction <br></br> Method</h6>
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

      <NewContactForm />
      <NewBlogPage />
    </main>
  );
};
export default MvpPage;
