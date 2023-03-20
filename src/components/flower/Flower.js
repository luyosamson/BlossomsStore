import React from 'react'
import FlowerPage from '../flowerpage/FlowerPage'
// import Search from '../search/Search'
import './Flower.css'

function Flower({handleClick}) {
  return (
    <div className='flowers'>

    <FlowerPage handleClick={handleClick}/>
    </div>
  )
}

export default Flower