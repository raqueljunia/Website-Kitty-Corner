import React from 'react';
import catCafe from "../assets/img/cafe-hdr.jpeg";

function CafeHeader() {
  return (
    <div className="cafe-header">
      <div className="main">
        <div 
          className="cafe-background"
          style={{
            backgroundImage: `url(${catCafe})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="overlay"></div>
          <div className="baner-cafe">
            <h3>KITTY CORNER</h3>
            <h1>CAFE</h1>         
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeHeader;
