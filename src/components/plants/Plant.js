import React from 'react'
import PlantPage from '../plantpage/PlantPage'
import Dashboard from '../dashboard/Dashboard'
import './Plants.css'

function Plant({handleClick}) {
  return (
    <div className='plants'>
      Filter By<select>
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
      <PlantPage  handleClick={handleClick}/>
      
    </div>
  )
}

export default Plant