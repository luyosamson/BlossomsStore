import React from 'react'
import FlowerPage from '../flowerpage/FlowerPage'
import './Flower.css'

function Flower({handleClick}) {
  return (
    <div className='flowers'>

    <FlowerPage handleClick={handleClick}/>
    </div>
  )
}

export default Flower