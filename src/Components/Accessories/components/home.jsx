import React from "react";
import "./home.css";
import Heroimg from "../assets/Images/newheroimg.jpeg";
import logo from "../assets/Images/LOGO-01 2.png";
import searchico from "../assets/Images/MagnifyingGlass@2x.png";
import spark from "../assets/Images/Sparkle.png";
import heart from "../assets/Images/Heart.png";
import handbag from "../assets/Images/Handbag.png";
import vector from "../assets/Images/Vector.png";


const home = () => {
  return (
    <div>
      <div  className="heromain"style={{ backgroundImage:`url(${Heroimg})`,backgroundRepeat:"no-repeat" }}>
        <div className="fortxtheropositioning">
        <div className="heronav">
<ul className="heronavul">
  <li>
    <a href="">Home</a></li>
    <li>/</li>
  <li>
  <a href="">Collection..</a></li>
</ul>
       
        </div>
        <div className="herotextmain">
          <p className="hero1sttxt foranimation">
          Meet Fashion trends
          </p>
          <div className="maxwidthcss">
          <p  className="hero2sttxt foranimation">
          Bold Impression with Striking Accessories
          </p>
          </div>
        </div>
        </div>
        </div>
        
    </div>
  );
};

export default home;
