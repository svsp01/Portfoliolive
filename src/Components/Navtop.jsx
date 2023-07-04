import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navtop() {
  const user = {
    name : "Sakthi Vignesh",
    domain: "Full Stack"
  }
  const [hoveredLink, setHoveredLink] = useState(null);

  function handleMouseEnter(index) {
    setHoveredLink(index);
  }

  function handleMouseLeave() {
    setHoveredLink(null);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className='d-flex align-items-center'>
          <div id='blue-box' className=' me-2'></div>
          <span className="fs-3 fw-bold">{user.name} / </span>
          <span className="fs-6 text-uppercase">
          {user.domain} <TypingAnimation />|
          </span>
          </div>
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav d-flex ms-auto  navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ms-5 text-uppercase  ${hoveredLink === 0 ? "text-primary " : ""}`}
                aria-current="page"
                onClick={() => handleMouseEnter(0)}
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className={`nav-link ms-5 text-uppercase ${hoveredLink === 1 ? "text-primary" : ""}`}
                onClick={() => handleMouseEnter(1)}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/project"
                className={`nav-link ms-5 text-uppercase ${hoveredLink === 2 ? "text-primary" : ""}`}
                onClick={() => handleMouseEnter(2)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ms-5 text-uppercase ${hoveredLink === 3 ? "text-primary" : ""}`}
                onClick={() => handleMouseEnter(3)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function TypingAnimation() {
  const jobTitles = ['designer', 'developer'];
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (animatedTitle.length < jobTitles[currentIndex].length) {
          setAnimatedTitle((prevTitle) => prevTitle + jobTitles[currentIndex][prevTitle.length]);
        } else {
          setIsTyping(false);
          setDelay(200); 
        }
      } else {
        if (animatedTitle.length > 0) {
          setAnimatedTitle((prevTitle) => prevTitle.slice(0, -1));
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
          setIsTyping(true);
          setDelay(200); 
          setAnimationCount((prevCount) => prevCount + 1);
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex, animatedTitle, isTyping, delay]);

  useEffect(() => {
    if (animationCount === 5) {
      setAnimationCount(0);
    }
  }, [animationCount]);

  return <span className="cursor">{animatedTitle}</span>;
}


export default Navtop;
