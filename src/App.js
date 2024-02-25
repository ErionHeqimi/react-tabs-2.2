import React, { useState } from 'react';
import './LabelWithDescription.css';

const LabelWithDescription = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isThemeClicked, setIsThemeClicked] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
    setIsThemeClicked(!isThemeClicked); 
  };

  return (
  <div className="container">
      {/* Label */}
      <div onClick={toggleDescription} className="label1">
        <strong>Why park a domain name in Parkname?</strong>
        <span id="shenja">&#11167;</span>
        
       
      </div>
    
      {/* ALL Description */}
      {isDescriptionVisible && (
        <div className={`description-container ${isThemeClicked ? 'theme-clicked' : ''}`}>
          {/* Label  on top of description */}
          <div onClick={toggleDescription} className="label2">
            <strong>Why park a domain name in Parkname?</strong>
            
            <span id="shenja">&#11165;</span>
          </div>

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
