import React from 'react'
import './FlowerCard.css'

function FlowerCard({newList,handleClick}) {
  return (
    
    <li className='card'>

       <img src={newList.image} alt={newList.name}/>
       <div>
      <p className='itemName'>{newList.name}</p>
      <p>Ksh.{newList.price}</p>
        <p ><span className='status'>{JSON.stringify(newList.inStock?"InStock":"SoldOut")}</span></p>
      <button onClick={()=>handleClick(newList)}>ADD TO CART</button>
      
      </div>
  </li>
  )
}

export default FlowerCard

