import React from 'react'
import './Dashboard.css'
import { NavLink } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Sellerplants from '../sellerplants/Sellerplants';
import Sellerflowers from '../sellerflowers/Sellerflowers'
import NewPlantForm from '../newplantForm/NewPlantForm';





function Dashboard() {
  return (
    <div>
        <div className='dashboard'>
          <div className='menu'>
            <NavLink to='/Sellerplants'>
                <h4>Plants</h4>

            </NavLink>
            <NavLink to='/Sellerflowers'
            >
                <h4>Flowers</h4>
            </NavLink>

            <NavLink to='/NewPlantForm'>

                <h4>Post Product</h4>

            </NavLink>
           
        </div>

        <div className='products'>

            <Routes>
            <Route path='/Sellerplants' element={<Sellerplants />} />
            <Route path='/Sellerflowers' element={<Sellerflowers />} />
            <Route path='/NewPlantForm' element={<NewPlantForm />}/>
         
            </Routes>
            
           
           
        </div>
       
        </div>
        

    </div>
  )
}

export default Dashboard

