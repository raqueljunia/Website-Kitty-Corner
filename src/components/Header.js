import React from 'react';
import videoBg from "../assets/video/Video.mp4";

const Header = () => {
  return (
    <div className="main">
      <video className="video-background" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="header-content">
        <h1>Welcome to</h1>
        <h1>Kitty Corner</h1>
      </div>
    </div>
  )
}

export default Header;