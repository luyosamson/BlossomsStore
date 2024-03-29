import React from 'react'
import './FeaturedCard.css'

function FeaturedCard({lists,handleClick}) {
  return (
 
    <li className='Featuredcard'>
       <img src={lists.image} alt={lists.name}/> 
       <div>
      <p className='itemName'>{lists.name}</p>
      <p>Ksh.{lists.price}</p>
      <button onClick={()=>handleClick(lists)}>ADD TO CARD</button>
      </div>
  </li>

  )
}

export default FeaturedCard

