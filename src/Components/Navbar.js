import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from "../assests/image.png";
import Card from 'react-bootstrap/Card';
import "../css/Section.css";
import Image1 from "../assests/image1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"
function TextLinkExample({ scrollToSection }) {
  useEffect(() => {
    AOS.init({
      duration: 900, 
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <Card className="text-white mb-5">
        <Card.Img src={Image} alt="Card image" style={{height:"100vh"}} className="zoomable-image img-fluid" />
        <Card.ImgOverlay>
          <Container fluid>
            <Navbar className='top text-white' expand="lg" data-aos="fade-up">
              <Container>
                <Navbar.Brand href="#home" className="font1 color text-white" style={{ fontSize: "34px", fontWeight: "800" }}>Saasi<span className='color1'>o</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white",background:"white"}} />
                <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
                  <Nav className="gap text-white">
                    <Nav.Link className="color font2 "  style={{fontSize:'19px',fontWright:"500",color:"white"}} onMouseEnter={(e) => e.target.style.color = "#0a2351"}  onMouseLeave={(e) => e.target.style.color = "white"} href="/">Home</Nav.Link>
                    <Nav.Link className="color font2 " onClick={() => scrollToSection("features")} onMouseEnter={(e) => e.target.style.color = "#0a2351"}  onMouseLeave={(e) => e.target.style.color = "white"}  style={{fontSize:'19px',fontWright:"500",color:"white"}}  >Features</Nav.Link>
                    <Nav.Link className="color font2" onClick={() => scrollToSection("How it works")} onMouseEnter={(e) => e.target.style.color = "#0a2351"}  onMouseLeave={(e) => e.target.style.color = "white"} style={{fontSize:'19px',fontWright:"500",color:"white"}}>How it works</Nav.Link>
                    <Nav.Link className="color font2 " onClick={() => scrollToSection("Partner")} onMouseEnter={(e) => e.target.style.color = "#0a2351"}  onMouseLeave={(e) => e.target.style.color = "white"} style={{fontSize:'19px',fontWright:"500",color:"white"}} >Partner</Nav.Link>
                    <Nav.Link className="color font2 " onClick={() => scrollToSection("Team")} onMouseEnter={(e) => e.target.style.color = "#0a2351"}  onMouseLeave={(e) => e.target.style.color = "white"}  style={{fontSize:'19px',fontWright:"500",color:"white"}} >Team </Nav.Link>
                    <Nav.Link className="color font2 " onClick={() => scrollToSection("Testimonials")} onMouseEnter={(e) => e.target.style.color = "#0a2351"}  onMouseLeave={(e) => e.target.style.color = "white"} style={{fontSize:'19px',fontWright:"500",color:"white"}} >Testimonials</Nav.Link>
                    <Button className="rounded-pill px-4 font2"    style={{ "fontWeight": "700" }}> Sign Up</Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className="d-flex flex-column justify-content-center align-items-center top">
              <h1 className='text-center font3 mb-4' data-aos="zoom-out" style={{fontWeight:"800"}}>Grow SAAS business<br /> by Saasio theme</h1>
              <p className="text-center fs-4 mb-4" data-aos="zoom-out" >The best tool for product and marketing teams <br /> accelerate website growth today with us.</p>
              <Button className="rounded-pill mb-5 fs-5 px-4 py-3" variant="dark">Download App</Button>
              <img src={Image1}  alt="dashboard" className="img-fluid" />
            </div>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default TextLinkExample;
