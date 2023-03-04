import React from 'react'
import './Dashboard.css'
import { NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    
        <div className='dashboard'>
          <div className='menu'>
            <NavLink exact to="/seller/dashboard">
              <h4>Dashboard</h4>
            </NavLink>
            <NavLink exact to='/seller/dashboard/Sellerplants'>
                <h4>Plants</h4>

            </NavLink>
            <NavLink exact to='/seller/dashboard/Sellerflowers'
            >
                <h4>Flowers</h4>
            </NavLink>

            <NavLink exact to='/seller/dashboard/NewPlantForm'>

                <h4>Post Product</h4>

            </NavLink>
           
        </div>     
        </div>
        

    
  )
}

export default Dashboard

