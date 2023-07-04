import React, { useState, useEffect } from 'react';
import CardFront from '../Components/Home/Card/CardFront';
import CardBack from '../Components/Home/Card/CArdBack';
import Card from '../Components/Home/Card/Card';
import Idcard from '../Components/Home/Card/Idcard';
import AboutTextContent from '../Components/Home/AboutTextContent';

function About() {
  const value = {
    spec: 'Your Specialization',
    role: 'Your Role',
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container py-3 text-center">
      <div className="row mt-5 gx-5">
        <AboutTextContent value={value} />
        <div className={`col-lg-6 order-lg-2 ${windowSize <= 992 ? 'd-none' : ''}`} id='card-component'>
          <Card
            frontContent={<CardFront />}
            backContent={<CardBack />}
          />
        </div>
        <div className={`col-lg-6 order-lg-2 ${windowSize >= 992 ? 'd-none' : ''}`} id='card-component'>
          <Idcard/>
        </div>
      </div>
    </div>
  );
}

export default About;
