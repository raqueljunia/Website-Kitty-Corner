import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import '../index.css';
import CatReadyAdopt1 from '../assets/img/CatReadyAdopt1.jpg';
import CatReadyAdopt2 from '../assets/img/CatReadyAdopt2.jpg';
import CatReadyAdopt3 from '../assets/img/CatReadyAdopt3.jpg';

const AdoptionReady = () => {
  const cats = [
    {
      name: 'Kitty',
      age: '2 years',
      breed: 'Domestic Shorthair',
      vaccinated: true,
      imgUrl: CatReadyAdopt1,
    },
    {
      name: 'Whiskers',
      age: '3 years',
      breed: 'Maine Coon',
      vaccinated: true,
      imgUrl: CatReadyAdopt2,
    },
    {
      name: 'Mittens',
      age: '1 year',
      breed: 'Siamese',
      vaccinated: true,
      imgUrl: CatReadyAdopt3,
    },
  ];

  return (
    <section className="adoption-ready">
      <Container>
        <h2 className="section-title">Find Your Feline Friend(s)!</h2>
        <Row>
          {cats.map((cat, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <div className="cat-card">
                      <img src={cat.imgUrl} alt={cat.name} className="cat-image" />
                      <div className="cat-info">
                        <h3 className="cat-name">{cat.name}</h3>
                        <p className="cat-description">
                          Age: {cat.age}<br />
                          Breed: {cat.breed}<br />
                          Vaccinated: {cat.vaccinated ? 'Yes' : 'No'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AdoptionReady;
