import React from 'react';
import catCafe from "../assets/img/cafe-hdr.jpeg";

function CafeHeader() {
  return (
    <div className="main">
      <img src={catCafe} alt="Cat Hotel" className="image-opacity" />
      <div className="overlay"></div>
      <div className="baner-cafe">
        <div class="row">
            <div class="col-12">
      <h2>Cafe Menu</h2>
            </div>
            <div class="col-12">              
                <p>Step into Kitty Corner Cafe and indulge in a delightful culinary experience. Our charming cafe offers a delectable selection of main courses, beverages, and desserts.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CafeHeader;