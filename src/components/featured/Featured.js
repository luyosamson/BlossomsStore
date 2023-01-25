import React from 'react'
import PlantPage from '../plantpage/PlantPage'
import './Featured.css'

function Featured() {


  return (
    <div className='featured'>
      <h2 className='Ftitle'>Featured Products</h2>
      <div className='item'>
    <PlantPage/>
    
      </div>
      </div>
  )
}

export default Featured