import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image13 from "../assests/icon.png";
import Card from 'react-bootstrap/Card';
import Image1 from "../assests/pic1.png";
import Image2 from "../assests/pic2.png";
import Image3 from "../assests/pic3.png";
import Image4 from "../assests/pic4.png";


function Section5() {
  return (
    <div style={{ backgroundColor: '#edf1f5' }} id="Team">
   <Container >
    <center>
    <Row style={{paddingTop:"5vh"}}>
        <center>
     <Col lg={2} md={4} sm={6} xs={6}>
    <p  className='rounded-pill fs-6 mb-3 box2' >
 <span><img src={Image13} className="px-1" alt="diamond-icon"></img></span> Our Team 
    </p>
    </Col>
    </center>
    </Row>
    <h1 className="mb-3"> Meet <span style={{fontWeight:"300"}}> Our Team</span> </h1>
    <p className='font2 mb-4'>As a SAAS web crawler expert, I help organizations adjust<br/> to the expanding significance of internet promoting.</p>
    </center>
   <Row className="mb-5">
    <Col className="mb-5">
    <Card  style={{border:"none"}}>
      <Card.Img variant="top" src={Image3} data-aos="zoom-in" style={{padding:"10%",backgroundColor: '#edf1f5'}}/>
      <Card.Body  style={{ backgroundColor: '#edf1f5' }}>
        <center>
        <h4>Shaik Gouse</h4>
        <p>Web Developer</p>
        </center>
      </Card.Body>
    </Card>
    </Col>
   
    <Col>
    <Card  style={{border:"none"}}>
      <Card.Img variant="top" src={Image4}  data-aos="zoom-in" style={{padding:"10%",backgroundColor: '#edf1f5'}}/>
      <Card.Body  style={{ backgroundColor: '#edf1f5' }}>
        <center>
        <h4>Namburi Sai Chandu</h4>
        <p>Web Developer</p>
        </center>
      </Card.Body>
    </Card>
    </Col>
   <Col>
   <Card  style={{border:"none"}}>
      <Card.Img variant="top" src={Image2}   data-aos="zoom-in" style={{padding:"10%",backgroundColor: '#edf1f5'}}/>
      <Card.Body  style={{ backgroundColor: '#edf1f5' }}>
        <center>
        <h4>Jayanth</h4>
        <p>App Developer</p>
        </center>
      </Card.Body>
    </Card>
   </Col>
   <Col>
   <Card  style={{border:"none"}}>
      <Card.Img variant="top" src={Image1}  data-aos="zoom-in"  style={{padding:"10%",backgroundColor: '#edf1f5'}}/>
      <Card.Body  style={{ backgroundColor: '#edf1f5' }}>
        <center>
        <h4>Sravani</h4>
        <p>Theme Developer</p>
        </center>
      </Card.Body>
    </Card> 
 
   </Col>
   </Row>
   </Container>
   </div>
  )
}

export default Section5
