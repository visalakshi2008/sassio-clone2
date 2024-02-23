import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image1 from "../assests/tick1.png";
import Image2 from "../assests/tick2.png";
import Button from "react-bootstrap/Button"
function Section3() {
  return (
    <Container>
        <Row id="How it works">
            <Col lg={6} md={6} sm={12} xs={12} data-aos="fade-right">
            <Card style={{backgroundColor:"#138afd"}}  classNmae="text-white mb-5" >
      <Card.Body>
        <p className="font1 text-white p-4 " style={{fontWeight:"700"}}>  SaaSio theme for SAAS</p>
        <p className="text-white font2 px-4">
        See which features and content are driving your site’s conversions.
        </p>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image1} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2'>Convert more trials into paying customers
            </p>
            </Col>
        </Row>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image1} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '>Reduce churn
            </p>
            </Col>
        </Row>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image1} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '>Generate more revenue per customer
            </p>
            </Col>
        </Row>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image1} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '>Measure monthly recurring revenue by cohort
            </p>
            </Col>
        </Row>
        <Row className="px-4 mb-5">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image1} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '>Lifetime value by customer type
            </p>
            </Col>
        </Row>
        <div className='px-4'>
        <Button  variant="dark " className="rounded-pill py-2 px-3 mb-4 fs-5 arrow" style={{fontWeight:"600"}}> Read more</Button>
     </div>
      </Card.Body>
    </Card>
            </Col>
            <Col className="pad" data-aos="fade-left">
            <Card   className=" bg-dark text-white mb-5" >
      <Card.Body>
        <p className="font1 text-white p-4 " style={{fontWeight:"700"}}>SaaSio theme for E-Commerce</p>
        <p className="text-white font2 px-4">
        Discover the characteristics that define your "big spenders" so you can market to them.
        </p>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image2} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2'>Easily integrate with Shopify
            </p>
            </Col>
        </Row>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image2} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '>Optimize your checkout funnel
            </p>
            </Col>
        </Row>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image2} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '>Increase new and repeat purchases
            </p>
            </Col>
        </Row>
        <Row className="px-4">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image2} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '>See lifetime value by category
            </p>
            </Col>
        </Row>
        <Row className="px-4 mb-5">
            <Col lg={1} md={1} sm={2} xs={2}>
                <img src={Image2} width={30} alt="ticks"></img>
            </Col>
            <Col>
            <p className='text-white font2 '> Report on subscription revenue
            </p>
            </Col>
        </Row>
        <div className='px-4'>
        <Button  variant="info " className="rounded-pill py-2 px-3 mb-4 fs-5 colors arrow" style={{fontWeight:"600"}}> Read more</Button>
     </div>
      </Card.Body>
    </Card>
            </Col>

        </Row>
    </Container>
   
  )
}

export default Section3
