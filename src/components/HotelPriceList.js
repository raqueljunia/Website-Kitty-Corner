import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import './CatHotel.css';
import catHotel10 from '../assets/img/catHotel10.jpg';
import catHotel11 from '../assets/img/catHotel11.jpg';
import catHotel12 from '../assets/img/catHotel12.jpg';

const HotelPriceList = () => {
  const rooms = [
    {
      type: 'Premium Room',
      price: 150,
      features: [
        'Spacious and comfortable accommodation',
        'Personalized care for your cat',
        'Delicious gourmet meals',
        'Access to premium amenities',
      ],
      imgUrl: catHotel11,
    },
    {
      type: 'Luxury Room',
      price: 250,
      features: [
        'Luxurious and lavish living space',
        "24/7 dedicated staff for your cat's needs",
        'Customized menu and dietary options',
        'Exclusive access to spa and wellness services',
      ],
      imgUrl: catHotel10,
    },
    {
      type: 'Regular Room',
      price: 100,
      features: [
        'Comfortable and cozy accommodation',
        'Attentive care for your cat',
        'Standard meals provided',
        'Access to basic amenities',
      ],
      imgUrl: catHotel12,
    },
  ];

  return (
    <section className="hotel-price-list">
      <Container>
        <h2 className="section-title">KITTY CORNER ROOMS</h2>
        <Row>
          {rooms.map((room, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`room-card ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                    <div className="room-image">
                      <img src={room.imgUrl} alt={room.type} />
                      <div className="room-price">${room.price}</div>
                    </div>
                    <div className="room-info">
                      <h3 className="room-type">{room.type}</h3>
                      <ul className="room-features">
                        {room.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
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

export default HotelPriceList;
