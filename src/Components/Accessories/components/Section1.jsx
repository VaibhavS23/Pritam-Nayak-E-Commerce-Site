import React from 'react';
import './Section.css';
import arrow from "../assets/Images/newonearrow.png";
import card1 from "../assets/Images/card11.png";
import card2 from "../assets/Images/sec12.png";
import card3 from "../assets/Images/sec13.png";
import card4 from "../assets/Images/sec14.png";

const Section1 = () => {
  return (
    <div className='section1'>
<div>
  <div className='newinsec'>
  <p className='newheading'>New In</p> 
  <img src={arrow} alt="" />
  </div>
</div>
<div>
  <div className='sec1cardcontainer'>
  <ul className='sec1ul'>
    <li><a href="">
      <div >
        <img className='card1' src={card1} alt="" />
        <div className='card1text'>
          
          <p className='forsec1font' >Green Western Dress</p>
          
          <p>&#10216; USD &#10217; 	&#36;1000</p>
          
        </div>
      </div>
      </a></li>
    <li><a href="">
    <img className='card1' src={card2} alt="" />
    <div className='card1text'>
          
          <p className='forsec1font' >Green Western Dress</p>
          
          <p>&#10216; USD &#10217; 	&#36;1000</p>
          
        </div>
      </a></li>
    <li><a href="">
    <img className='card1' src={card3} alt="" />
    <div className='card1text'>
          
          <p className='forsec1font' >Green Western Dress</p>
          
          <p>&#10216; USD &#10217; 	&#36;1000</p>
          
        </div>
      </a></li>
    <li><a href="">
    <img className='card1' src={card4} alt="" />
    <div className='card1text'>
          
          <p className='forsec1font' >Green Western Dress</p>
          
          <p>&#10216; USD &#10217; 	&#36;1000</p>
          
        </div>
      </a></li>
    
  </ul>
  </div>
</div>
    </div>
  )
}

export default Section1

