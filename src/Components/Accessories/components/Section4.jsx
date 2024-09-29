import React from 'react'
import './Section4.css';
import sec4img from "../assets/Images/sec4.png";
const Section4 = () => {
  return (
    <div className='mainsec4' style={{ backgroundImage:`url(${sec4img})`,backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}>
      <div className='forbttmalg'>
        <div>
        <p  className='sec4frttxt'>Stylish Ear Statements</p>
        <p className='secsectxt'>Refer to contemporary earring designs that embody current trends and styles. These earrings often feature…</p></div>
        <div class="wrapper">
  <button className='sec4btn'>
    Shop Now 
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>

      </div>
    </div>
  )
}

export default Section4
