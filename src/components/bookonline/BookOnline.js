import React from "react";
import Form from 'react-bootstrap/Form';
import Logo from '../../assets/img/logo.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BookOnline.css'


const BookOnline = () => {


  
    return(
       <div className="bookingform-section">
       <Row>
        <Col md={12}>
        <Form >
        <div className="logo-form">
          <img src={Logo} alt="Kitty Corner" />
        </div>
        
        
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name"  className="px-3" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="12345678" className="px-3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" className="px-3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Booking Date</Form.Label>
          <Form.Control type="date" placeholder="01-01-1990" className="px-3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Services Type</Form.Label>
        <Form.Check type="checkbox" label="Small Cat" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Medium Cat" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Large Cat" />
      </Form.Group>
        <a href="/catSalon" className="w-100 bg-primary text-white py-2 text-center fs-5 text-decoration-none" id="btn">
          Book
        </a>
      </Form>
        
        </Col>
       </Row>
         
       </div>
    )
}   

export default BookOnline