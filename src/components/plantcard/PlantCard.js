import React from 'react'
import './Plantcard.css'

function PlantCard({newItem}) {
  // const {image,name,price,description}=newItem
  return (
    <div>
  <li className='card'>
     <div>
       <img src={newItem.image} alt={newItem.name}/> 
       <div className='details'>
      <p>{newItem.name}</p>
      <p>Ksh.{newItem.price}</p>
      <button>Add to Cart</button>
      </div>
      </div>
  </li>
  </div>
  
  );
}

export default PlantCard

