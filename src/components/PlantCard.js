import React,{useState} from "react";

function PlantCard({item,onDeleteItem,onUpdate}) {
  const {id,price}=item

 const [inStock,setinStock]=useState(true)
 const [priceCurrent,setPrice]=useState(price)

 function onStockToggle(){
setinStock((inStock) => !inStock);

 }

 function handleDelete(){
fetch(`http://localhost:6001/plants/${item.id}`,{
  method:"DELETE"

})
.then((r)=>r.json())
.then(()=>onDeleteItem(id))

// onDeleteItem(id)

 }

 function handlePriceClick(e){
  e.preventDefault();
  fetch(`http://localhost:6001/plants/${item.id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({price:priceCurrent})

  })
  .then((r)=>r.json())
  .then((item)=>onUpdate(item))

 }


  return (
    <li className="card">
      <img src={item.image} alt={"plant name"} />
      <h4>{item.name}</h4>
      <p><button onClick={handlePriceClick}>Price: {item.price}</button></p>

      {inStock ? (
        <button className="primary" onClick={onStockToggle}>In Stock</button>
      ) : (
        <button onClick={onStockToggle}>Sold Out</button>
      )}
      <button className="secondary" onClick={handleDelete}>Delete</button>
       <form onSubmit={handlePriceClick}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          value={priceCurrent}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Update Price</button>
      </form>
    
    </li>
  );
}

export default PlantCard;
