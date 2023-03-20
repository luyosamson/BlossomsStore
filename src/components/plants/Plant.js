import React from 'react'
import PlantPage from '../plantpage/PlantPage'
import Search from '../search/Search'
import './Plants.css'

function Plant({handleClick}) {
  return (
    <div className='plants'>
      <div className='plants-header'>
        <label>Filter By:</label>
        <select>
          <option>All</option>
          <optgroup label='Type'>
            <option>Succulent Plants</option>
            <option>Floor Plants</option>
            <option>Outdoor Plants</option>
            <option>Bonsai</option>
            <option>Flowering Plants</option>
            <option>Herbs</option>
            <option>Tree Plants</option>
            <option>Gift Plants</option>
          </optgroup>
        </select>
        <Search/>
      </div>
      <PlantPage handleClick={handleClick}/>
    </div>
  )
}

export default Plant
