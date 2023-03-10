import React from 'react'

function FlowerCard({newList,handleClick}) {
  return (
    <div>
    <li className='card'>
     <div>
       <img src={newList.image} alt={newList.name}/> 
       <div className='details'>
      <p>{newList.name}</p>
      <p>Ksh.{newList.price}</p>
        <p ><span className='status'>{JSON.stringify(newList.inStock?"InStock":"SoldOut")}</span></p>
      <button onClick={()=>handleClick(newList)}>Add to Cart</button>
      </div>
      </div>
  </li>

 </div>
  )
}

export default FlowerCard

