import React from 'react';
import videoBg from "../assets/video/Video.mp4";

const Header = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

{/*<div className="header-content">
<h1>Welcome to</h1>
<h1>Kitty Corner.</h1>
</div>
*/}

export default Header;