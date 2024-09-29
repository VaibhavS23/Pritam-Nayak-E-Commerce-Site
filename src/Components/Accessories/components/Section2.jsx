import React from 'react'
import arrow from "../assets/Images/newonearrow.png";
import './Section2.css';
import img1 from "../assets/Images/sec21.png";
import img2 from "../assets/Images/sec22.png";
import img3 from "../assets/Images/sec23.png";
import img4 from "../assets/Images/sec24.png";



const Section2 = () => {
  return (
    <div>
    <div className='sec2maindiv'>
    <div className='newinsec'>
  <p className='newheading'>Collection</p> 
  <img src={arrow} alt="" />
  </div>
  {/* </div> */}
        <div className='slider'>
            <div className='slide-track'>
<div className='slide'><a href="
"><img className='sliderimg'  src={img1} alt="" />

</a></div>
<div className='slide'><a href="
"><img className='sliderimg' src={img2} alt="" />

</a></div>
<div className='slide'><a href="
"><img className='sliderimg' src={img3} alt="" />

</a></div>
<div className='slide'><a href="
"><img className='sliderimg' src={img4} alt="" />

</a></div>
{/* slides doubled */}
<div className='slide'><a href="
"><img className='sliderimg' src={img1} alt="" />

</a></div>
<div className='slide'><a href="
"><img className='sliderimg' src={img2} alt="" />

</a></div>
<div className='slide'><a href="
"><img className='sliderimg' src={img3} alt="" />

</a></div>
<div className='slide' ><a href="
"><img className='sliderimg' src={img4} alt="" />

</a></div>

{/* tripple */}
<div className='slide'><a href="
"><img className='sliderimg' src={img1} alt="" />

</a></div>
<div className='slide'><a href="
"><img className='sliderimg' src={img2} alt="" />

</a></div>
<div className='slide'><a href="
"><img className='sliderimg' src={img3} alt="" />

</a></div>
<div className='slide' ><a href="
"><img className='sliderimg' src={img4} alt="" />

</a></div>

            </div>

        </div>

    </div>
    </div> 
  )
}

export default Section2
