import React from 'react'
import './Section3.css';
import arrow from "../assets/Images/newonearrow.png";
import card1 from "../assets/Images/sec31.png";
import card2 from "../assets/Images/sec32.png";
import card3 from "../assets/Images/sec33.png";
import maincard from "../assets/Images/newheroimg.jpeg";

const Section3 = () => {
  return (
    <div className='sec3maindiv'>
      <div>
      <div className='newinsec'>
  <p className='newheading'>Top Trending</p> 
  <img src={arrow} alt="" />
  </div>
      </div>
      <div className='secnav'>
      
<ul>
    <li className='active'>
        <button className='default'>BROOCH</button>
        
    </li>
    <li>
        <button>NECKLACE</button>
    </li>
    <li>
        <button>CLUTCHES</button>
    </li>
    <li>
        <button>BRACELET</button>
    </li>
    <li>
        <button>RING</button>
    </li>
    <li>
        <button>TIE</button>
    </li>
</ul>
      </div>

      <div>
      <div className='sec1cardcontainer'>
  <ul className='sec1ul'>
  <li><a href="">
      <div  className='card1 position' style={{ backgroundImage:`url(${maincard})`,backgroundRepeat:"no-repeat",backgroundSize:"494px 570px" }}>
        {/* <img className='card1 position' src={maincard} alt="" /> */}
        <p className='broocktxt hero2sttxt'>Brooch</p>
      </div>
      </a></li>
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
    
  </ul>
  </div>
</div>
      </div>
    // </div>
    // </div>
    // </div>
  )
}

export default Section3
