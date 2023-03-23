import React from 'react'
import './FeaturedCard.css'

function FeaturedCard({lists,handleClick}) {
  return (
 
    <li className='Featuredcard'>
       <img src={lists.image} alt={lists.name}/> 
       <div>
      <p>{lists.name}</p>
      <p>Ksh.{lists.price}</p>
      <button onClick={()=>handleClick(lists)}>Add to Cart</button>
      </div>
  </li>

  )
}

export default FeaturedCard

