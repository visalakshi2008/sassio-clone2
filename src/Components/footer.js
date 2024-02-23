import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Image1 from '../assests/foot1.png';
import Image2 from '../assests/foot2.png';
import Image3 from '../assests/foot3.png';
import Image4 from '../assests/foot4.png';
import Image5 from '../assests/foot5.png';
import Image6 from '../assests/foot6.png';
function footer() {
  return (
    <div style={{backgroundColor: '#edf1f5'}} >
       <Container  >
        <Row  className="border1 mb-3">
            <Col data-aos="fade-up">
            <p style={{ fontSize: "34px", fontWeight: "800",color:"#138afd" }} className="font1 mt-4 mb-4">  Saasi<span className='color1'>o</span></p>
            <p>Be the first to find out about exclusive deals, the latest Lookbooks trends. We're on a mission to build a better future where technology. </p>
            </Col>
            <Col data-aos="fade-up">
            <h5 className="mt-5 mb-4">Address</h5>
            <h6 className="mb-3">Phone: <span style={{color:"gray"}}>+1 605 722 2032</span></h6>
            <h6 className="mb-3">Email: <span style={{color:"gray"}}> example@mail.com</span></h6>
            <h6 className="mb-3">Address: <span style={{color:"gray"}}> Charlotte, North Carolina, United States</span></h6>
            </Col>
        <Col data-aos="fade-up">
        <h5 className="mt-5 mb-4">Quick Links</h5>
     <Row>
        <Col>
        <p class="bottom-border-hover"> What is ICO</p>
        </Col>
        <Col>
        <p class="bottom-border-hover"> CO Apps</p>
        </Col>
    
        <Col>
        <p class="bottom-border-hover"> What is ICO</p>
        </Col>
        <Col>
        <p class="bottom-border-hover"> Join Us</p>
        </Col>
    <Col>
    
    <p class="bottom-border-hover"> Tokens</p></Col>
    
        <Col>
        <p class="bottom-border-hover">Clients</p>
        </Col>
        <Col>
        <p class="bottom-border-hover"> Whitepaper</p>
        </Col>
    <Col>
    
    <p class="bottom-border-hover">Contact</p></Col>
     
        <Col>
        <p class="bottom-border-hover">Roadmap</p>
        </Col>
        <Col>
        <p class="bottom-border-hover">  Teams</p>
        </Col>
    <Col>
    <p class="bottom-border-hover">FAQ</p></Col>
     </Row>
        </Col>
        <Col data-aos="fade-up">
        <h5 className="mt-5 mb-4">Instagram</h5>
<img src={Image1} alt="pic1"></img> <img src={Image2} alt="pic1"></img> <img src={Image3} alt="pic1"></img> <img src={Image4} alt="pic1"></img> <img src={Image5} alt="pic1"></img> <img src={Image6} alt="pic1"></img> 
        </Col>
        </Row>
        <Row>
            <Col lg={10}>
            <p >© 2023 , SaaSio Theme by Themexriver Team | Privacy Policy | Sitemap</p>
            </Col>
        <Col>
        <p > All Rights Reserved</p>
        </Col>
        </Row>
    

       </Container>  
       </div>
  )
}

export default footer
