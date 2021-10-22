import React from 'react';

import healthCenterImg from '../assets/img/sport-center-img.jpg';

const Home = () => (
  <div>
    <br />
    <h1><span style={{ fontFamily: 'Festive' }} >Welcome to the</span> SPORT CENTER</h1>
    <br />
    <img
      alt="health center"
      width="600px"
      src={healthCenterImg}
    />
  </div>
);

export default Home;
