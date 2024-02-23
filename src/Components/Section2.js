import React from 'react'
import Image from "../assests/section1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import image2 from "../assests/section2.png";
import Image3 from "../assests/tick3.png";

function Section2() {
  return (
    <div>
      <Container>
        <Row>
            <Col data-aos="fade-right" lg={6} md={6} sm={12} xs={12}>
            <p className='fs-2' style={{fontWeight:"600"}}>Compare our SaaSio software to <br/> google alytics</p>
            <p className='font2'>Your site is about people, not sessions. Your data should be too.</p>
             <Row>
                <Col  lg={1} md={1} sm={2} xs={2}>
                  <img src={Image3} alt="forward-tick"></img>
                </Col>
                <Col>
                <p className='font4'>Tie data to a real person</p>
                </Col>
             </Row>
             <Row>
                <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image3} alt="forward-tick"></img>
                </Col>
                <Col>
                <p className='font4'>See a user’s full customer journey across devices</p>
                </Col>
             </Row>
             <Row>
                <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image3} alt="forward-tick"></img>
                </Col>
                <Col>
                <p className='font4'>Discover the drop-off points for every flow on your site</p>
                </Col>
             </Row>
             <Button  variant="dark " className="rounded-pill py-2 px-3  fs-5  arrow" style={{fontWeight:"600"}}> Read more</Button>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} data-aos="fade-left">
            <img src={Image} alt="statstics" className="img-fluid" ></img>
            </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row>
        <Col  lg={6} md={6} sm={12} xs={12} data-aos="fade-right">
            <img src={image2} alt="statstics2" className="img-fluid"></img>
            </Col>
            <Col  lg={6} md={6} sm={12} xs={12} data-aos="fade-left">
            <p className='fs-2' style={{fontWeight:"600"}}>If you don’t have behavioral  <br/>analytics, you need it!</p>
             <Row>
                <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image3} alt="forward-tick"></img>
                </Col>
                <Col>
                <p className='font4'>You need to know which features are most valuable by tracking the defining characteristics of each person.</p>
                </Col>
             </Row>
             <Row>
                <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image3} alt="forward-tick"></img>
                </Col>
                <Col>
                <p className='font4'>Your customers are people, not website sessions</p>
                </Col>
             </Row>
             <Row>
                <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image3} alt="forward-tick"></img>
                </Col>
                <Col>
                <p className='font4'>And your business depends on people coming back again and again as you want.</p>
                </Col>
             </Row>
             <Button  variant="dark " className="rounded-pill py-2 px-3 fs-5  arrow" style={{fontWeight:"600"}}> Read more</Button>
            </Col>
            
        </Row>
      </Container>
    </div>
  )
}

export default Section2
