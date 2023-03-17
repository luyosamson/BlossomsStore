import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import {AiFillDashboard} from 'react-icons/ai'
import {RiPlantFill} from 'react-icons/ri'
import {GiFlowerPot} from 'react-icons/gi'
import {MdPostAdd} from 'react-icons/md'

function Dashboard() {
  return (
    <div className='dboard'>
      <div className='menu-container'>
        <NavLink exact to="/seller/dashboard" className='menu-item'>
          <h4><AiFillDashboard color='white' size={40}/> Dashboard</h4>
        </NavLink>
        <NavLink exact to='/seller/dashboard/Sellerplants' className='menu-item'>
          <h4><RiPlantFill color='white' size={40}/>Plants</h4>
        </NavLink>
        <NavLink exact to='/seller/dashboard/Sellerflowers' className='menu-item'>
          <h4><GiFlowerPot color='white' size={40}/>Flowers</h4>
        </NavLink>
        <NavLink exact to='/seller/dashboard/NewPlantForm' className='menu-item'>
          <h4><MdPostAdd color='white' size={40}/>Post Product</h4>
        </NavLink>
      </div>
     </div>
  );
}

export default Dashboard;
