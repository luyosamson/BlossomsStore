import React from 'react'
import './Plantform.css'

function Formdata({newItem}) {


    fetch(`http://localhost:6001/plants/${newItem.id}`,{
        method:'DELETE'
    })

    .then((r)=>r.json())
    .then(()=>console.log(newItem))


    

    function handleDelete(){
    }
  return (
    
        <tr>
            <td>{newItem.id}</td>
            <td>{newItem.name}</td>
            <td>{newItem.price}</td>
            <td>In Stock</td>
            <button onClick={handleDelete}>DELETE</button>

        </tr>

  )
}

export default Formdata