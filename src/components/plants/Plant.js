import React from 'react'
import PlantPage from '../plantpage/PlantPage'
import './Plants.css'

function Plant({handleClick}) {
  return (
    <div className='plants'>
      <PlantPage handleClick={handleClick}/>
    </div>
  )
}

export default Plant
