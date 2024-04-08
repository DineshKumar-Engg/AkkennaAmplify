import "../Style/NewCallToAction.css";
import { Container, Row, Col } from "react-bootstrap";

const NewCallToAction = ({ header, buttonText }) => {
  return (
    <section id="NewCallToAction">
      <Container className="NewCallContain">
        <Row className="RowcallToAction">
          <Col lg={11} className="homeCallAction">
            <Row>
              <Col lg={6}>
                <div>
                  <h4>
                    {header}
                  </h4>
                </div>
              </Col>
              <Col lg={5} className="homeCallContainMobile">
                <div>
                  <button> {buttonText}</button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewCallToAction;