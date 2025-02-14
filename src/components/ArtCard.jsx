// ArtCard.jsx
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

const ArtCard = ({ data }) => {
  const { name, price, image, description } = data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="art-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <LazyLoad
        height={200}
        offset={100}
        placeholder={<div className="loading-placeholder">Loading...</div>}
      >
        <div className="image-container">
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: 'auto',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          />
          {isHovered && (
            <div className="hover-overlay">
              <h3>Buy Now</h3>
            </div>
          )}
        </div>
        <div>
          <p
            style={{
              color: 'white',
              fontFamily: 'Tanseek Modern Pro Arabic Book',
              fontSize: '21px',
              paddingLeft: '4%',
            }}
          >
            <i
              className="fa-solid fa-dollar-sign"
              style={{ color: '#ffffff', fontSize: '13px' }}
            ></i>
            {price}
          </p>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ArtCard;
