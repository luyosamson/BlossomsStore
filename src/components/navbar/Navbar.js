import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import {BiSearchAlt2} from "react-icons/bi"
import {CgShoppingCart} from "react-icons/cg"
import {FaUserAlt} from "react-icons/fa"


const linkstyle={
  display:"inline-block",
  width:"80px",
  marginTop:"30px",
  marginRight:"20px",
  // marginLeft:"px",
  padding:"1px",
  // background:"blue",
  textDecoration:"none",
  justifyContent:'space-between'
  
}

function Navbar({size}) {



   
  return (
    <div className="navbar">
        <NavLink 
        to='/'
        style={linkstyle}
        >
        Home
        </NavLink>

        <NavLink 
        to='/flower'
        style={linkstyle}
        >Flower
        </NavLink>

        <NavLink
        to="/plant"
         style={linkstyle}
        >
          Plant
        </NavLink>

        <NavLink
        to="seller"
         style={linkstyle}>
        Seller 
        </NavLink>

        <NavLink
        to='/signup'
         style={linkstyle}
         >
        <FaUserAlt size='1.5rem'/>
        </NavLink>

        <NavLink
        to='/search'
         style={linkstyle}
         >
        <BiSearchAlt2 size='1.5rem' />
          </NavLink>

        <NavLink 
        to='/cart'
         style={linkstyle}
         
         >
          <CgShoppingCart size='2rem'/><span>{size}</span>
        </NavLink>

    </div>
  );
}

export default Navbar;