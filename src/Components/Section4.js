import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/company1.png";
import Image2 from "../assests/company2.png";
import Image3 from "../assests/company3.png";
import Image4 from "../assests/company4.png";
import Image5 from "../assests/company5.png";
import Image6 from "../assests/company6.png";
import Image7 from "../assests/company7.png";
import Image8 from "../assests/company8.png";
import Image9 from "../assests/company9.png";
import Image10 from "../assests/company10_.png";
import Image11 from "../assests/company11.png";
import Image12 from "../assests/company12.png";
import Image13 from "../assests/icon2.png";

function Section4() {
  return (
   <Container className="px-4 mb-5" id="Partner">
    <Row className="px-4">
      <Col lg={6} md={6} sm={12} xs={12} data-aos="zoom-out">
        <Row  className="mb-2">
            <Col className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image1}  alt="Company1" className='images  arrow'  ></img>
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image2} className='images  arrow' alt="Company1" ></img> 
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image3} className='images  arrow' alt="Company1" ></img> 
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image4} alt="Company1" className='images  arrow' ></img>
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image5}  alt="Company1" className='images  arrow'  ></img>
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image6} className='images  arrow' alt="Company1" ></img>
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image7} className='images  arrow' alt="Company1" ></img> 
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image8} alt="Company1" className='images  arrow'  ></img>
            </Col>
       
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image9}  alt="Company1" className='images  arrow'  ></img>
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image10} className='images  arrow' alt="Company1" ></img>
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image11} className='images  arrow' alt="Company1" ></img> 
            </Col>
            <Col  className='p-1' lg={3} md={4} sm={4} xs={4}>
            <img src={Image12} alt="Company1" className='images  arrow' ></img>
            </Col>
        </Row>
     </Col>
      <Col  data-aos="zoom-out">
     <Row>
     <Col lg={5} md={8} sm={8} xs={10} >
    <p  className='rounded-pill fs-6 mb-3 p-1 box2' >
 <span><img src={Image13} className="px-1" alt="diamond-icon"></img></span> Our partners 
    </p>
    </Col>
    </Row>
    <h1 className="mb-3"> Trusted By 25,000+ Users <br/><span style={{fontWeight:"300"}}> looks so awesome!</span> </h1>
    <p className='font2 mb-4'>Try with your favorite tool and save yourself from manually managing bugs and tasks. Also fits with your theme.</p>
    <p className='font2 mb-4'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic web designs. The passage to an unknown typesetter. </p>
  
      </Col>
    </Row>
   </Container>
  )
}

export default Section4
