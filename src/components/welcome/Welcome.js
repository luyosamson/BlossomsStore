import React from 'react'
import {AiFillCar} from 'react-icons/ai'
import {FaThumbsUp} from 'react-icons/fa'
import {AiFillClockCircle} from 'react-icons/ai'
import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome'>
      <div className='welcomeNote'>
      <h2>Welcome Here</h2>
      <p>This is the best Platform for purchasing high quality flowers at <br/>
      an affordable rate
      </p>
      </div>
      <div className='iconss'>
      <AiFillCar size="4rem" color='purple'/> Free Shipping
      <FaThumbsUp size="4rem" color='purple'/> Transactional Save 
      <AiFillClockCircle size="4rem" color='purple'/> Support Online 24/7

      </div>
<p className='moto'>We Deliver at Your Convinience</p>

    </div>
  )
}

export default Welcome