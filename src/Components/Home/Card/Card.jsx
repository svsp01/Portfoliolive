import React, { useState } from 'react';

function Card({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  const handleCardLeave = () => {
    setIsFlipped(false);
    setIsHovered(false);
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card container-fluid shadow-box p-0 my-5 ${isFlipped ? 'is-flipped' : ''} ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      onClick={handleCardFlip}
    >
      <div className="card-inner container-fluid rounded">
        <div className="card-front container-fluid rounded">
          {frontContent}
        </div>
        <div className="card-back container-fluid">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default Card;
