import React, { useState } from 'react'
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Row } from "react-bootstrap";
import NewContactForm from "../Components/NewContactForm";
import FormButton from "../Assets/Image/NewHome/formButton.svg";
import '../Style/Component.css'

function FormCanva({ show, onHide }) {
    return (
      <section className="homeFormCanva">
        <Offcanvas
          id="homeFormCanva"
          show={show}
          onHide={onHide}
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

const MobileForm = () => {
    const [Formshow, setFormshow] = useState(false);
    const toggleShow = () => {
      setFormshow(!Formshow);
  };
  return (
    <section
    onClick={toggleShow}
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

    <FormCanva show={Formshow} onHide={toggleShow} />
  </section>
  )
}

export default MobileForm