import React from 'react'

function FlowerCard({newList,handleClick}) {
  return (
    
    <li className='card'>

       <img src={newList.image} alt={newList.name}/> 
       <div>
      <p>{newList.name}</p>
      <p>Ksh.{newList.price}</p>
        <p ><span className='status'>{JSON.stringify(newList.inStock?"InStock":"SoldOut")}</span></p>
      <button onClick={()=>handleClick(newList)}>Add to Cart</button>
      
      </div>
  </li>

 
  )
}

export default FlowerCard

