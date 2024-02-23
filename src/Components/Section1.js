import React from 'react'
import Container from "react-bootstrap/Container";
import Image2 from "../assests/icon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Image11 from "../assests/set.png";
import Image22 from "../assests/stat.png";
import Image3 from "../assests/image33.png";
import Image4 from "../assests/image44.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
function Section1() {
  const settings = {
    dots: true, 
    appendDots: dots => (
      <ul style={{ margin: "0px", padding: "0px", bottom: "10px",fontSize:"60px" }}>
        {dots}
      </ul>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000 ,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };
  return (
  <Container className="mb-5">
                <div className='top1'>
     <div className='text-center '>
      <Row id="features">
        <center>
     <Col lg={2} md={4} sm={6} xs={7} >
    <p  className='rounded-pill fs-6 box2' >
 <span><img src={Image2} className="px-1" alt="diamond-icon"></img></span>  Featured services
    </p>
    </Col>
    </center>
    </Row>
    <h1> Why you <span style={{fontWeight:"300"}}> will choose?</span> </h1>
    <p className='font2'>As a SAAS web crawler expert, I help organizations adjust to the<br/> expanding significance of internet promoting.</p>
     </div>
    </div>
    <center>

    <Slider {...settings} style={{border:"none"}}>
      <div data-aos="fade-up">
    <Card style={{border:"none" }} className="card1">
      <Card.Body>
        <img src={Image11} style={{padding:"30px" ,marigin:"30px",boxShadow: "0px 14px 18px 0px rgba(1, 105, 228, 0.25)",background:"linear-gradient(-38deg, #20fdee 0%, #0478e9 100%)",borderRadius:"100%"}} className="rounded-pill bg-info  mb-5" alt="setting-icon"></img>
        <h4 className='mb-4'>Easy to edit</h4>
        <p className='mb-4 font4'>
        Google Ad campaigns are an effective target receptive audience they get you.
        </p>
        <Button variant="primary" className="rounded-pill mb-5">Contact Us</Button>
      </Card.Body>
    </Card>
    </div>

    <div data-aos="fade-up">
    <Card style={{border:"none" }} className="card1">
      <Card.Body>
        <img src={Image22} style={{padding:"30px" ,marigin:"30px",boxShadow: "0px 14px 18px 0px rgba(1, 105, 228, 0.25)",background:"linear-gradient(-38deg, #20fdee 0%, #0478e9 100%)",borderRadius:"100%"}} className="rounded-pill bg-info mb-5" alt="setting-icon"></img>
        <h4 className='mb-4'>Branding</h4>
        <p className='mb-4 font4'>
Make sure your brand assets contribute to your company’s personality and reputation.
        </p>
        <Button variant="primary" className=" rounded-pill  mb-5">Contact Us</Button>
      </Card.Body>
    </Card>
    </div>

    <div data-aos="fade-up">
    <Card style={{border:"none" }} className="card1">
      <Card.Body>
        <img src={Image3} style={{padding:"30px" ,marigin:"30px",boxShadow: "0px 14px 18px 0px rgba(1, 105, 228, 0.25)",background:"linear-gradient(-38deg, #20fdee 0%, #0478e9 100%)",borderRadius:"100%"}} className="rounded-pill bg-info mb-5" alt="setting-icon"></img>
        <h4 className='mb-4'>Marketing Analysis</h4>
        <p className='mb-4 font4'>
        Your content is an integral part of your SEO efforts and online marketing strategy.
        </p>
        <Button variant="primary" className=" rounded-pill mb-5">Contact Us</Button>
      </Card.Body>
    </Card>
    </div>

    <div data-aos="fade-up">
          <Card style={{border:"none" }} className="card1">
      <Card.Body>
        <img src={Image4} style={{padding:"30px" ,marigin:"30px",boxShadow: "0px 14px 18px 0px rgba(1, 105, 228, 0.25)",background:"linear-gradient(-38deg, #20fdee 0%, #0478e9 100%)",borderRadius:"100%"}} className="rounded-pill bg-info mb-5" alt="setting-icon"></img>
        <h4 className='mb-4'>UI/UX Designing</h4>
        <p className='mb-4 font4'>
        eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.
        </p>
        <Button variant="primary" className=" rounded-pill mb-5">Contact Us</Button>
      </Card.Body>
    </Card>
    </div>
    </Slider>
    </center>
  </Container>
  )
}

export default Section1
