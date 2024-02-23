import React from 'react'
import Container from "react-bootstrap/Container";
import  Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image13 from "../assests/icon.png";
import Image1 from "../assests/background1.png";
import Card from 'react-bootstrap/Card';
import Image2 from "../assests/people1.png";
import Image3 from "../assests/people2.png";
import Image4 from "../assests/people3.png";
import Image5 from "../assests/people4.png";
import Image6 from "../assests/people5.png";
import Image7 from "../assests/left-arrow.png";
import Image8 from "../assests/right-arrow.png";
import { useState,useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CardBody } from 'react-bootstrap';
import Star from "../assests/star.png";

function Section6() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef();
  
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  const handleImageClick = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='mt-5 mb-5' id="Testimonials">
      <Container>
      <center>
    <Row>
        <center>
     <Col lg={2} md={4} sm={6} xs={6}>
    <p  className='rounded-pill fs-6 mb-3 box2' >
 <span><img src={Image13} className="px-1" alt="diamond-icon"></img></span> Client’s testimonials 
    </p>
    </Col>
    </center>
    </Row>
    <h1 className="mb-3"> We serve<span style={{fontWeight:"300"}}> our clients</span> </h1>
    <p className='font2 mb-4'>As a SAAS web crawler expert, I help organizations adjust<br/> to the expanding significance of internet promoting.</p>
    </center>
       <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
        <Card style={{border:"none"}}  >
      <Card.Img src={Image1} alt="Card image"  data-aos="zoom-out"/>
      <Card.ImgOverlay>
      <div  onClick={() => handleImageClick(0)} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <img className='arrow' src={Image2} alt="people-1" style={{ borderRadius: "100%" }} />
        </div>
        <div  onClick={() => handleImageClick(2)} style={{ position: "absolute", top: "20%", left: "20%", transform: "translate(-50%, -50%)" }}>
          <img className='arrow' src={Image3} alt="people-1" style={{ borderRadius: "50%" }} />
        </div>
        <div   onClick={() => handleImageClick(3)} style={{ position: "absolute", top: "70%", left: "70%", transform: "translate(-50%, -50%)" }}>
          <img className='arrow' src={Image4} alt="people-1" style={{ borderRadius: "50%" }} />
        </div>
        <div onClick={() => handleImageClick(1)} style={{ position: "absolute", top: "20%", left: "80%", transform: "translate(-50%, -50%)" }}>
          <img className='arrow'  src={Image5} alt="people-1" style={{ borderRadius: "50%" }} />
        </div>
        <div   onClick={() => handleImageClick(4)}style={{ position: "absolute", top: "80%", left: "20%", transform: "translate(-50%, -50%)" }}>
          <img className='arrow' src={Image6} alt="people-1" style={{ borderRadius: "50%" }} />
        </div>
      </Card.ImgOverlay>
    </Card>
        </Col>
        <Col data-aos="zoom-out">
        <Carousel interval={2000}    activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)}  ref={carouselRef} pause={false} wrap={true} keyboard={true}  >
      <Carousel.Item >
        <Card   className='box1'>
            <CardBody  >
              <Row>
                <Col lg={2} md={4} sm={4} xs={4}>
                <img src={Image2}  style={{ borderRadius: "100%" }} className='arrow' alt="people1"></img>
                </Col>
                <Col>
                <p className="font2">Shaik Gouse </p>
                <p> web developer</p>
                </Col>

              </Row>

            <p className='font33 '>Lorem ipsum dolor sit amet consecter tony adipiscing elitsed do eiusmodi tempor roar incididunt ut laboreet dolore magna as the opposed to using. Type of partnership or Malta. The limited todot liability.</p>
            <img src={Star} alt="5-star"></img>
            </CardBody>
        </Card>
        </Carousel.Item>
        <Carousel.Item >
        <Card   className='box1'>
            <CardBody  >
              <Row>
                <Col lg={2} md={4} sm={4} xs={4}>
                <img src={Image5}  style={{ borderRadius: "100%" }} className='arrow' alt="people1"></img>
                </Col>
                <Col>
                <p className="font2 " style={{fontWeight:"600"}}>Namburi Sai Chandu </p>
                <p> web developer</p>
                </Col>

              </Row>
            <p className='font33'>Lorem ipsum dolor sit amet consecter tony adipiscing elitsed do eiusmodi tempor roar incididunt ut laboreet dolore magna as the opposed to using. Type of partnership or Malta. The limited todot liability.</p>
            <img src={Star} alt="5-star"></img>
            </CardBody>
        </Card>
        </Carousel.Item>
        <Carousel.Item >
        <Card   className='box1'>
            <CardBody  >
              <Row>
                <Col lg={2} md={4} sm={4} xs={4}>
                <img src={Image3}  style={{ borderRadius: "100%" }} className='arrow' alt="people1"></img>
                </Col>
                <Col>
                <p className="font2" style={{fontWeight:"600"}}>Bindu manasa</p>
                <p> app developer</p>
                </Col>

              </Row>

            <p className='font33 '>Lorem ipsum dolor sit amet consecter tony adipiscing elitsed do eiusmodi tempor roar incididunt ut laboreet dolore magna as the opposed to using. Type of partnership or Malta. The limited todot liability.</p>
            <img src={Star} alt="5-star"></img>
            </CardBody>
        </Card>
        </Carousel.Item>
        <Carousel.Item >
        <Card   className='box1'>
            <CardBody  >
              <Row>
                <Col lg={2} md={4} sm={4} xs={4}>
                <img src={Image4}  style={{ borderRadius: "100%" }} className='arrow' alt="people1"></img>
                </Col>
                <Col>
                <p className="font2" style={{fontWeight:"600"}}>Swapna Sai </p>
                <p> App developer</p>
                </Col>

              </Row>

            <p className='font33 '>Lorem ipsum dolor sit amet consecter tony adipiscing elitsed do eiusmodi tempor roar incididunt ut laboreet dolore magna as the opposed to using. Type of partnership or Malta. The limited todot liability.</p>
            <img src={Star} alt="5-star"></img>
            </CardBody>
        </Card>
        </Carousel.Item>
        <Carousel.Item >
        <Card   className='box1'>
            <CardBody  >
              <Row>
                <Col lg={2} md={4} sm={4} xs={4}>
                <img src={Image6}  style={{ borderRadius: "100%" }} className='arrow' alt="people1"></img>
                </Col>
                <Col>
                <p className="font2" style={{fontWeight:"600"}}>Sravani </p>
                <p> Theme developer</p>
                </Col>

              </Row>

            <p className='font33 '>Lorem ipsum dolor sit amet consecter tony adipiscing elitsed do eiusmodi tempor roar incididunt ut laboreet dolore magna as the opposed to using. Type of partnership or Malta. The limited todot liability.</p>
            <img src={Star} alt="5-star"></img>
            </CardBody>
        </Card>
        </Carousel.Item>
        </Carousel>
       <center className='mt-5'> <img onClick={handlePrev} src={Image7} width={45} className="arrow" style={{borderRadius:"100%"}}  alt='left-arrow'></img>  <img src={Image8} onClick={handleNext} className="arrow" style={{borderRadius:"100%"}} alt="right-arrow" ></img></center>
        </Col>
       </Row>
      </Container>
    </div>
  )
}

export default Section6
