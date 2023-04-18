import React,{useState} from 'react'


function Flowerdata({newItem,onDeleteItem,onUpdatedPrice,updatestatus}) {

  

   const [updatedPrice, setUpdatedPrice] = useState(newItem.price);


  const [inStock, setinStock] = useState(false);


function handleDelete() {
  fetch(`/flowers/${newItem.id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      // Call the onDeleteItem prop to remove the deleted item from the list
      onDeleteItem(newItem.id);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}


  function handleUpdatePrice(){

    fetch(`/flowers/${newItem.id}`,{
      method:'PATCH',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({price:updatedPrice})
    })
    .then((r)=>r.json())
    .then((updatedPrice)=>onUpdatedPrice(updatedPrice))


  }

  function handleSubmitStatus(e){
    e.preventDefault()
      setinStock(!inStock);
   
    fetch(`/flowers/${newItem.id}`,{
      method:"PATCH",
      headers:{
              "Content-Type":"application/json",
      },
      body:JSON.stringify({inStock}),


    })
    
    .then((r) => r.json())
    .then((status) => updatestatus(status));

  }


  return (
    
        <tr>
            <td>{newItem.id}</td>
            <td>{newItem.name}</td>
            <td>{newItem.product_type}</td>
            <td>{newItem.price}</td>

            <td>
              <button onClick={handleSubmitStatus}>

                {inStock ? 'Sold Out' : 'In Stock'}

              </button>
            
          </td>
           <td><button onClick={handleDelete}>DELETE</button></td> 
           <td><form>
            <input type="number" value={updatedPrice} 
            onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
             /> 
             <button onClick={handleUpdatePrice}>
            Update Price</button></form></td>

        </tr>

  )
}

export default Flowerdata