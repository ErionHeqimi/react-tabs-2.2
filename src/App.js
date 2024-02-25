import React, { useState } from 'react';
import './LabelWithDescription.css';

const LabelWithDescription = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isThemeClicked, setIsThemeClicked] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
    setIsThemeClicked(!isThemeClicked);
    // Toggle the up/down arrow class
    const shenja = document.getElementById('shenja');
    shenja.classList.toggle('up');
  };

  return (
    <div className="container">
      {/* Label */}
      <div onClick={toggleDescription} className="label1">
        <strong>Why park a domain name in Parkname?</strong>
        <div id="shenja" className="down"></div>
      </div>
      
      {/* ALL Description */}
      {isDescriptionVisible && (
        <div className={`description-container ${isThemeClicked ? 'theme-clicked' : ''}`}>
          {/* Description */}
          <div className="description">
            <p>Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabelWithDescription;
