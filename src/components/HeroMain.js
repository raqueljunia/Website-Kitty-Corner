import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import bgHero from "../assets/img/bgHero.png";
import headerImg from "../assets/img/whiteCat.png";

const HeroMain = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className='hero-sec'>
    <div
      style={{
        backgroundImage: `url(${bgHero})`,
        height: 'auto',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <section className='heromain' id='home'>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col>
              <div className="text-center text-md-start">
                <h1 className="header-hero" style={{ color: 'rgb(247,129,5)' }}>The Purrfect</h1>
                <h1 className="header-hero" style={{ color: 'rgb(0,128,131)' }}>Place For Your</h1>
                <h1 className="header-hero" style={{ color: 'rgb(247,129,5)' }}>Feline Friend</h1>
                <div className="d-flex gap-4" style={{ marginTop: '50px' }}>
                  <Button
                    className="btn-hero-1 text-center align-item-center justify-content-center"
                    variant="primary"
                    onClick={scrollToBottom}
                  >
                    <a className="text-decoration-none" style={{ color: 'rgb(255,255,255)' }}>
                      Contact
                    </a>
                  </Button>
                  <Button className="btn-hero-2 text-center align-item-center justify-content-center" variant="primary"> 
                    <a href="/aboutUs" className="text-decoration-none" style={{ color: 'rgb(0,0,0)' }}>
                      About Us
                    </a>
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={6} md={6} xl={6} className="d-flex justify-content-center align-items-center">
              <img src={headerImg} alt="Header Img" style={{ maxWidth: '130%', marginTop: 50, marginRight: 100}} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </div>
  );
};

export default HeroMain;
