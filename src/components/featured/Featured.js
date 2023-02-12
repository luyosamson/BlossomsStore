import React from 'react'
import FeaturedPage from '../featuredpage/FeaturedPage'
// import PlantPage from '../plantpage/PlantPage'
import './Featured.css'

function Featured() {


  return (
    <div className='featured'>
      <h2 className='Ftitle'>Featured Products</h2>
      <div className='item'>
      <FeaturedPage/>
    
      </div>
      </div>
  )
}

export default Featured