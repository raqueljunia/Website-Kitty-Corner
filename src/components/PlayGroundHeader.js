import React from 'react';

const PlayGroundHeader = () => {
  return (
    <div className="playground-header">
      <div className="main">
        <div className="header-background"></div>
        <div className="header-playground">
          <h3 style={{ fontFamily: 'Montserrat', fontWeight: '600' }}>KITTY CORNER</h3>
          <h1 className="playground-header-title" style={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '60px' }}>CAT PLAYGROUND</h1>
        </div>
      </div>
    </div>
  );
}

export default PlayGroundHeader;
