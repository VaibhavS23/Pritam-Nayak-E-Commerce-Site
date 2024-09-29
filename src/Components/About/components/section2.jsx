import React from 'react'
import './section2.css'
import sec2heroimg from '../assets/images/about11.png'
const section2 = () => {
  return (
    <div className='sec2main'>
        <div className='textsec'>
            <p className='about'>
                About
            </p>
            <p className='txt'>
            Pritam Nayak is an acclaimed Indian fashion designer known for his luxury fashion clothes and accessories. His work beautifully blends traditional Indian craftsmanship with modern aesthetics, creating timeless pieces characterized by exquisite tailoring and intricate details.
            </p>
<p  className='txt'>
            Pritam's collections are celebrated for their quality and innovation, making them popular among fashion enthusiasts and celebrities. His accessories, including statement jewelry and elegant handbags, perfectly complement his clothing lines, adding a touch of sophistication to any outfit.
            </p>
<p  className='txt'>
            Renowned for his dedication to craftsmanship and unique design philosophy, Pritam Nayak continues to make a significant impact on the luxury fashion industry.</p>
        </div>
        <div className='imagediv' >
            <img src={sec2heroimg} alt="" className='sec2heroimg' />
        </div>

    </div>
  )
}

export default section2