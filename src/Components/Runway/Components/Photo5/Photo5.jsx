import React from 'react';
import './Photo5.css';  // Assuming you have this SCSS file for styling
import Pic6 from '../../assets/Pic6.png';  // Update these paths as needed

const Photo1 = () => {
  return (
    <div className="photo-gallery3-container">
      <div className="photo-gallery3">
        <img src={Pic6} alt="Person 1" className="gallery-img" />
      </div>
    </div>
  );
}

export default Photo1;