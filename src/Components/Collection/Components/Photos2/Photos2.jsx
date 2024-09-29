import React from 'react';
import './Photos2.css';
import Pic4 from '../../assets/Pic4.png';  // Use your actual image path
import Pic5 from '../../assets/Pic5.png';

const Photo2 = () => {
  return (
    <div className='photos'>
    <div className="photo-gallery">
      <img src ={Pic4}  alt="Person 1" className="gallery-img" />
      <img src={Pic5} alt="Person 2" className="gallery-img" />
    </div>
    </div>
  );
}

export default Photo2;
