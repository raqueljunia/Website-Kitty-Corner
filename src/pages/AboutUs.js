import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import membersData from '../components/MembersData';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
    <div className="container">
      <div className="header">
        <br /> <br /> <br />
        <h1>Hi!</h1>
        <h1>We're Group 1 From Class H</h1>
      </div>
      <div className="introduction">
        <p>
          Welcome to the Kitty Corner website! As part of our final project for the "Introduction to Internet Technology" class, we have developed a website using React JS. Kitty Corner is a unique pet store dedicated to cats, offering various services such as Cat Salon, Cat Hotel, Cat Shop, and Cat Adoption. Additionally, we provide facilities like a Cafe and Cat Playground to enhance the experience for our customers and feline friends.
        </p>
        <p>
          In the development of this website, we have utilized several technologies and tools to create a good user experience. Here are the key technologies and frameworks we have incorporated:
        </p>
        <ul>
          <li>Library: React.js</li>
          <li>Library: Axios</li>
          <li>Library: SweetAlert.js</li>
          <li>Framework: Bootstrap</li>
          <li>Package: Fontawesome</li>
        </ul>
        <p>
          In addition to these technologies, we have integrated external API to enhance the functionality of Kitty Corner:
        </p>
        <ul>
            <li>
              <a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'black' }}>
                The Cat API
              </a>
            </li>
          </ul>
        <p>
          We hope you enjoy exploring the various services, facilities, and features we have implemented.
        </p>
        <p>
          Thank you for visiting Kitty Corner! :D
        </p>
      </div>
      </div>
      <div className="header-2">
        <br /> <br /> <br />
        <h1>Let's Meet</h1>
        <h2>Our Members</h2>
      </div>
      <br />
      <div className="cards">
        {membersData.map((member, index) => (
          <div className="card" key={index}>
            <img src={member.imgURL} alt={member.name} className="profile-img" />
            <h2>{member.name}</h2>
            <p>{member.nim}</p>
            <p>{member.quote}</p>
            <hr />
            <div className="social-links">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon-1"/>
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    <br /><br /><br />
    </div>
  );
};

export default AboutUs;