import React,{useState} from 'react'
import './Plantform.css'

function Formdata({newItem,onDeleteItem,onUpdatedPrice,updatestatus}) {

  

   const [updatedPrice, setUpdatedPrice] = useState(newItem.price);


  const [inStock, setinStock] = useState(true);


  function handleDelete(){
    fetch(`http://localhost:6001/plants/${newItem.id}`,{
        method:'DELETE'
    })

    .then((r)=>r.json())
    .then(()=>onDeleteItem(newItem))

}



  function handleUpdatePrice(){

    fetch(`http://localhost:6001/plants/${newItem.id}`,{
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
   
    fetch(`http://localhost:6001/plants/${newItem.id}`,{
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
            <td>{newItem.type}</td>
            <td>{newItem.price}</td>

            <td>
              <button onClick={handleSubmitStatus}>

                {inStock ? 'In Stock' : 'Sold Out'}

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

export default Formdata
  