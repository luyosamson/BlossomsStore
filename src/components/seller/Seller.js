import React from 'react'

import NewPlantForm from '../newplantForm/NewPlantForm'

import PlantPage from '../plantpage/PlantPage'
import './Seller.css'
import PlantList from '../plantlist/PlantList'
import PlantCard from '../plantcard/PlantCard'
import Dashboard from '../dashboard/Dashboard'



function Seller() {
  return (
    <div>
     

      <NewPlantForm />
         <Dashboard/>

      
    </div>
  )
}

export default Seller
