import React from 'react'
import PlantCard from '../plantcard/PlantCard'
import './Plantlist.css'

function PlantList({items}) {
  const newItem=items.slice(0,4)
  

return (
    <ul className='cards'>
      { newItem?.map(newItems=> (
     <PlantCard
    key={newItems.id}
    newItem={newItems}
    />
      ))}
   </ul>
  );
}


export default PlantList

