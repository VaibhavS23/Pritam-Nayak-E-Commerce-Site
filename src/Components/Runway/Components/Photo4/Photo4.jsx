import React from 'react';
import './Photo4.css';  // Assuming you have this SCSS file for styling
import Pic7 from '../../assets/Pic7.png';  // Update these paths as needed

const Photo1 = () => {
  return (
    <div className="photo-gallery2-container">
      <div className="photo-gallery2">
        <img src={Pic7} alt="Person 1" className="gallery-img" />
      </div>
    </div>
  );
}

export default Photo1;