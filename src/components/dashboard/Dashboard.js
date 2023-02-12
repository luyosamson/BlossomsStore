import React from 'react'
import { NavLink } from 'react-router-dom';



function Dashboard() {
  return (
    <div className='dashboard'>
        <div>
            <NavLink
            to='/plants'>
                Plants

            </NavLink>
            <NavLink
            to='/flowers'
            >
                Flowers
            </NavLink>

            <NavLink to='/seller'>

                Sell With Us

            </NavLink>
        </div>

       

    </div>
  )
}

export default Dashboard