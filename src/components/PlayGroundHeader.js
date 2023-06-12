import React from 'react';
import Playground from "../assets/img/cat-playground.jpg";

const PlayGroundHeader = () => {
  return (
    <div className="main">
      <img src={Playground} alt="Cat Hotel" className="image-opacity" />
      <div className="overlay"></div>
      <div className="header-content">
        <h1>Welcome to</h1>
        <h1>Cat Playground</h1>
      </div>
    </div>
  )
}

export default PlayGroundHeader;