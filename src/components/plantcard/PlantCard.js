import React,{useState} from 'react'
import './Plantcard.css'

function PlantCard({newItem,handleClick}) {
const [inStock,setinStock]=useState(true)

 function onStockToggle(){
setinStock((inStock) => !inStock);

 }
  return (
    <div>
  <li className='card'>
     <div>
       <img src={newItem.image} alt={newItem.name}/> 
       <div className='details'>
      <p>{newItem.name}</p>
      <p>Ksh.{newItem.price}</p>
          {inStock ? (
        <button className="primary" onClick={onStockToggle}>In Stock</button>
      ) : (
        <button className='soldOut'    onClick={onStockToggle}>Sold Out</button>
      )}
      <button onClick={()=>handleClick(newItem)}>Add to Cart</button>
      </div>
      </div>
  </li>
  </div>
  
  );
}

export default PlantCard

