import React from 'react'
import './section3.css'

import sec31img from '../assets/images/about12.png'
import sec32img from '../assets/images/about13.png'
import sec33img from '../assets/images/about14.png'
const section3 = () => {
  return (
    <div className='sec3'>
        <div className='justpos'>
<div className='sec31'>
  <div className='textsec3pos'>
    <div className='txtsec3'>
<p className='d1txt1'>
COUTURE PROCESS
</p>
<p className='d1txt2'>
1. Design and Conceptualization
</p>
<p className='d1txt3'>
Meticulous journey of creativity and craftsmanship, divided into three modules. The first module is Design and Conceptualization, where Pritam draws inspiration from various sources. He creates initial sketches and mood boards to visualize the collection's theme and aesthetic, carefully selecting fabrics, colors, and embellishments that align with the envisioned design.
</p>
    </div>
</div>
    <div className='sec3img' >
<img src={sec31img} alt="" className='orsec3img' />
    </div>
</div>
        </div>
    



        <div className='justpos'>
<div className='sec31'>
    <div className='sec3img' >
<img src={sec32img} alt="" className='orsec3img' />
    </div>
  <div className='textsec3pos'>
    <div className='txtsec3'>
<p className='d1txt1'>
COUTURE PROCESS
</p>
<p className='d1txt2'>
2. Crafting and Tailoring
</p>
<p className='d1txt3'>
Skilled artisans and craftsmen bring Pritam's designs to life, employing traditional techniques and modern methods. Each garment undergoes precise cutting, stitching, and hand-embellishment to ensure impeccable quality. Multiple fittings are conducted to achieve perfect tailoring and comfort, ensuring that every piece meets Pritam's exacting standards.
</p>
    </div>
</div>
</div>
        </div>

        
        <div className='justpos'>
<div className='sec31'>
  <div className='textsec3pos'>
    <div className='txtsec3'>
<p className='d1txt1'>
COUTURE PROCESS
</p>
<p className='d1txt2'>
3. Final Touches and Quality Control
</p>
<p className='d1txt3'>Where the completed pieces are meticulously inspected for any imperfections. Accessories are designed to complement the clothing, creating a cohesive and sophisticated look. Every item is packaged with care, reflecting the brand's commitment to luxury and excellence.
</p>
    </div>
</div>
    <div className='sec3img' >
<img src={sec33img} alt="" className='orsec3img' />
    </div>
</div>
        </div>





</div>
  )
}

export default section3