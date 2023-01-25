import React from 'react'
import Myassets from '../../assets/hero.png'
import Myasset2 from '../../assets/hero2.png'
// import Myasset3 from '../../assets/hero3.png'

import './Hero.css'


function Hero() {
  return (
    <div className='herocard'>
       <img src={Myassets} alt='HeroImage'/>
        {/* <p>"Flowers always make people better, happier and more helpful;
           they are sunshine, food and medicine for the soul.”</p> */}
       <button className='heroButton'>Explore More</button>
    </div>
  )
}

export default Hero

