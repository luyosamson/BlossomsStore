import React from 'react'
import './Plantcard.css'

function PlantCard({newItem,handleClick}) {



  return (
   
  <li className='card'>
     <div>
       <img src={newItem.image} alt={newItem.name}/> 
       <div>
      <p className='itemName'>{newItem.name}</p>
      <p>Ksh.{newItem.price}</p>
     <p ><span className='status'>{JSON.stringify(newItem.inStock?"Instock":"SoldOut")}</span></p>
          
      <button onClick={()=>handleClick(newItem)}>ADD TO CART</button>
      </div>
      </div>
  </li>
  
  
  );
}

export default PlantCard

