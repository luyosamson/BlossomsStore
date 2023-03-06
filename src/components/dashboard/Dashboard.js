

import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    // <div className='dashboard'>
      <div className='menu-container'>
        <NavLink exact to="/seller/dashboard" className='menu-item'>
          <h4>Dashboard</h4>
        </NavLink>
        <NavLink exact to='/seller/dashboard/Sellerplants' className='menu-item'>
          <h4>Plants</h4>
        </NavLink>
        <NavLink exact to='/seller/dashboard/Sellerflowers' className='menu-item'>
          <h4>Flowers</h4>
        </NavLink>
        <NavLink exact to='/seller/dashboard/NewPlantForm' className='menu-item'>
          <h4>Post Product</h4>
        </NavLink>
      </div>
    // </div>
  );
}

export default Dashboard;
