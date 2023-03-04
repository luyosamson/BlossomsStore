import React from 'react'
import './FeaturedCard.css'

function FeaturedCard({lists,handleClick}) {
  return (
    <div>
    <li className='Featuredcard'>
     <div>
       <img src={lists.image} alt={lists.name}/> 
       <div className='details'>
      <p>{lists.name}</p>
      <p>Ksh.{lists.price}</p>
      <button onClick={()=>handleClick(lists)}>Add to Cart</button>
      </div>
      </div>
  </li>


    </div>
  )
}

export default FeaturedCard

