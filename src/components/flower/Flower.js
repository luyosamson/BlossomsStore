import React from 'react'
import FlowerPage from '../flowerpage/FlowerPage'
import './Flower.css'

function Flower({handleClick}) {
  return (
    <div className='flower'>
      Filter By<select>
        <option>All</option>
        <optgroup label='By Occasion'>
        <option>Romantic Flowers</option>
         <option>Thank you flowers</option>
          <option>Celebration flowers</option>
           <option>Get well soon flowers</option>
            <option>Sympathy flowers</option>
            <option>I'm sorry flowers</option>
            <option>New baby flowers</option>
            </optgroup>
            <optgroup label='By Type'>
              <option>Flower Hampers</option>
              <option>Flower bouquets</option>
              <option>Flower boxes</option>
              <option>Flower baskets</option>

            </optgroup>
      </select>
    <FlowerPage handleClick={handleClick}/>
    </div>
  )
}

export default Flower