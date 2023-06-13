import React from 'react';
import catCafe from "../assets/img/cafe-hdr.jpeg";

function CafeHeader() {
  return (
    <div className="cafe-header">
    <div className="main">
        <img src={catCafe} alt="Cat Hotel" className="image-opacity" style={{ height: '100vh'}}/>
      <div className="overlay"></div>
      <div className="baner-cafe">
        <div class="row">
            <div class="col-12">
      <h3>KITTY CORNER</h3>
      <h1>CAFE</h1>
            </div>
            <div class="col-12">              
                <p style={{ color: 'white' }}>Step into Kitty Corner Cafe and indulge in a delightful culinary experience. Our charming cafe offers a delectable selection of main courses, beverages, and desserts.</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CafeHeader;