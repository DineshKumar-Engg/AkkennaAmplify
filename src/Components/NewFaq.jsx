import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import '../Style/NewFaq.css';
const NewFaq = ({ array1}) =>{
    let n= array1.length;
    const firstSet = array1.slice(0, (n/2));
    const secondSet = array1.slice(n/2, n);

  const accordionItems = (set) => (
    <Accordion>
      {set?.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header >
            <div dangerouslySetInnerHTML={{__html:item?.question}}></div>
          </Accordion.Header>
          <Accordion.Body>
            <div dangerouslySetInnerHTML={{__html:item?.answer}}>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );


    return(
        <section id="NewFaq">
            <div className='homeFaq'>
                <Container>
                    <Row>
                        <Col>
                            <h1>Addressing Popular Queries with <br></br> Expertise and Innovation!</h1>
                        </Col>
                    </Row>
                    <Row className='homeFaqRow'>
                        <Col lg={12}>
                            <Row>
                                <Col lg={6}>
                                {accordionItems(firstSet)}
                                </Col>
                                <Col lg={6}>
                                {accordionItems(secondSet)}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default NewFaq;