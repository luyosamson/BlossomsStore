import React from 'react'
import PlantCard from '../plantcard/PlantCard'
import './Plantlist.css'

function PlantList({items}) {

  

return (
    <ul className='cards'>
      { items?.map(newItems=> (
     <PlantCard
    key={newItems.id}
    newItem={newItems}
    />
      ))}
   </ul>
  );
}


export default PlantList

