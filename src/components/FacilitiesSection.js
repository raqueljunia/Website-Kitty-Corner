import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bgFacilities from '../assets/img/bgFacilities.png';

const FacilitiesSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgFacilities})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingBottom: 100
      }}
    >
      <div className="bg-facilities">
        <Container>
          <Row className="text-center align-items-center">
            <Col xs={12} className="text-white my-5 text-align-center">
              <h1 style={{ paddingTop: '10px', paddingBottom: '80px', fontFamily: 'Outfit', fontWeight: '600', fontSize: '35px' }}>OUR FACILITIES</h1>
            </Col>
            <Col xs={6} md={6} className="text-center">
              <h1 className="text-white" style={{ paddingBottom: '50px' }}>CAFE</h1>
              <div className="btn-facilities-1" style={{ marginTop: '52px' }}>
                <Button variant="primary" className="btn-custom-1"><a className="text-white" href="/facilities/cafe" style={{textDecoration: 'none', fontWeight: 'bold'}}>View More</a></Button>
              </div>
            </Col>
            <Col xs={6} md={6} className="text-center">
              <h1 className="text-white">CAT</h1>
              <h1 className="text-white" style={{ paddingBottom: '50px' }}>PLAYGROUND</h1>
              <div className="btn-facilities-2">
                <Button variant="primary" className="btn-custom-2"><a className="text-white" href="/facilities/catPlayground" style={{textDecoration: 'none', fontWeight: 'bold'}}>View More</a></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FacilitiesSection;
