import React from "react";
import PlantCard from "./PlantCard";

function PlantList({items,onDeleteItem,onUpdate}) {



  const itemPlants=items.map((item)=>(

    <PlantCard key={item.id}
     item={item} 
     onDeleteItem={onDeleteItem} 
     onUpdate={onUpdate} />
  ))



  return (
    <ul className="cards">{/* render PlantCards components in here */
    itemPlants
    
    }</ul>
  );
}

export default PlantList;
