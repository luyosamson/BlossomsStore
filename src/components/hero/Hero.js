import React from 'react'
import Myasset2 from '../../assets/hero1.jpg'
import Myasset3 from '../../assets/hero3.png'

import './Hero.css'


function Hero() {
  return (
    <div>
    <div className='herocard'>
       
      
       <img src={Myasset3} alt='Heroimage'/>
         <img src={Myasset2} alt='Heroimage'/>
       
       
    </div>
    <button className='heroButton'>Explore More</button>
    </div>
  )
}

export default Hero


