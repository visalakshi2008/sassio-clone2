import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image1 from "../assests/background.png";
import Form from "react-bootstrap/Form";
import InputGroup  from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button"

function Section7() {
  return (
    <div>
      <Container className='mb-5'>
        <Card className="colors" style={{border:"none"}} >
        <Card.Body>
            <Row>
                <Col lg={4} data-aos="fade-right">
                <img src={Image1} alt="post"></img>
                </Col>
                <Col lg={6} data-aos="fade-left">
                <h1 className="mt-5 text-white mb-5">Subscription</h1>
                <p className="mb-5 text-white font4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do <br/> eiusmod tempor incididunt ut. </p>
                <InputGroup >
      <Form.Control
        size="lg"
        placeholder="Enter your email address"
        aria-label="Enter Your email address"
        aria-describedby="basic-addon2"
      />
    
        <Button className="colors arrow" id="button-addon2">
        Subscribe
        </Button>
     
    </InputGroup>
                </Col>
              
            </Row>
        </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Section7
