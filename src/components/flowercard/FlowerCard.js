import React from 'react'

function FlowerCard({newList}) {
  return (
    <div>
    <li className='card'>
     <div>
       <img src={newList.image} alt={newList.name}/> 
       <div className='details'>
      <p>{newList.name}</p>
      <p>Ksh.{newList.price}</p>
      <button>Add to Cart</button>
      </div>
      </div>
  </li>

 </div>
  )
}

export default FlowerCard