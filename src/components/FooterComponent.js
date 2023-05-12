import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const FooterComponent = () => {
  return (
      <footer className="text-white" style={{ backgroundColor: 'rgb(0, 128, 131)' }}>
        <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h5>KITTY CORNER</h5>
            <div className="d-flex justify-content-md-start mb-3 mb-md-0">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="me-2" style={{ color: 'rgb(255,187,85)' }}>
                <FontAwesomeIcon icon={faFacebook} size="1.5x"/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="me-2" style={{ color: 'rgb(255,187,85)' }}>
                <FontAwesomeIcon icon={faInstagram} size="1.5x"/>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="me-2" style={{ color: 'rgb(255,187,85)' }}>
                <FontAwesomeIcon icon={faYoutube} size="1.5x"/>
              </a>
              <a href="mailto:raquelhermawan@gmailcom" style={{ color: 'rgb(255,187,85)' }}>
                <FontAwesomeIcon icon={faEnvelope} size="1.5x"/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <h6 style={{ color: 'rgb(255,187,85)' }}>SERVICES</h6>
            <ul className="list-unstyled">
              <li><Link to="/services/catSalon" style={{ color: 'white' }}>Cat Salon</Link></li>
              <li><Link to="/services/catHotel" style={{ color: 'white' }}>Cat Hotel</Link></li>
              <li><Link to="/services/catShop" style={{ color: 'white' }}>Cat Shop</Link></li>
              <li><Link to="/services/catAdoption" style={{ color: 'white' }}>Cat Adoption</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 style={{ color: 'rgb(255,187,85)' }}>FACILITIES</h6>
            <ul className="list-unstyled">
              <li><Link to="/facilities/cafe" style={{ color: 'white' }}>Cafe</Link></li>
              <li><Link to="/facilities/catPlayground" style={{ color: 'white' }}>Cat Playground</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Subscribe Now To Receive All Our News And Updates</h5>
            <div className="form-group border rounded p-2" style={{ backgroundColor: '#fff' }}>
              <form>
                <div className="form-group d-flex">
                  <input type="email" className="form-control me-2" style={{width: "100%"}} placeholder="Enter your Email" />
                  <button type="submit" className="btn" style={{ backgroundColor: 'rgb(250, 171, 53)' }}>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
          <hr className="my-4" />
          <div className="d-flex align-items-center justify-content-center">
          <div className="text-md-start me-auto">
            <p style={{ color: 'rgb(190, 190, 190)' }}>&copy;2023 Kitty Corner. All Rights Reserved</p>
          </div>
          <div className="text-center mx-auto" >
            <img src={logo} height="60" alt="Kitty Corner logo" />
          </div>
          <div className="text-center text-md-end ms-auto">
            <div className="d-flex justify-content-md-end">
              <p className="px-4" style={{ color: 'rgb(190, 190, 190)' }}>Terms of Service</p>
              <p style={{ color: 'rgb(190, 190, 190)' }}>Privacy Policy</p>
            </div>
          </div>
          </div>
        </div>
      </footer>
    );
  };

export default FooterComponent;