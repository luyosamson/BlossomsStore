import React from 'react'
import './Plantcard.css'

function PlantCard({newItem,handleClick}) {



  return (
    <div>
  <li className='card'>
     <div>
       <img src={newItem.image} alt={newItem.name}/> 
       <div className='details'>
      <p>{newItem.name}</p>
      <p>Ksh.{newItem.price}</p>
     <p ><span className='status'>{JSON.stringify(newItem.inStock?"Instock":"SoldOut")}</span></p>
          
      <button onClick={()=>handleClick(newItem)}>Add to Cart</button>
      </div>
      </div>
  </li>
  </div>
  
  );
}

export default PlantCard

