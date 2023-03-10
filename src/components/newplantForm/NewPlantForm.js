import React,{useState} from "react";
import Dashboard from "../dashboard/Dashboard";
import './Newplantform.css'




function NewPlantForm({onAddPlant}) {
  const [name,setName]=useState("")
  const [image,setImage]=useState("")
  const [price,setPrice]=useState("")
  const[description,setDescription]=useState("")





function handleAddPlant(e){
  e.preventDefault();

  const newItem = {
      name:name,
      image:image,
      price:price,
      description:description,

  };

  fetch("http://localhost:6001/plants",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(newItem)
  })
  .then((r)=>r.json())
  .then((item)=>onAddPlant(item))

  
}






  return (
    <div className="new-plant-form">
      <div className="dashboard">
      <Dashboard/>
      </div>
      <div className="items-container">
      <h2>Sell your product by providing details through this form</h2>
      <div className="postProduct">

      <form className="addProduct" onSubmit={handleAddPlant}>
      <label>Product Name</label><input type="text" name="name" placeholder="product name" onChange={(e)=>setName(e.target.value)} />
      <label>Price</label> <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
      <label>Upload Image</label> <input type="text" name="image" placeholder="Upload image" onChange={(e)=>setImage(e.target.value)}/>

      <label>Description</label><textarea className="textarea" onChange={(e)=>setDescription(e.target.value)}></textarea>
      <p><button>Submit</button></p>
      </form>

      </div>
      </div>
    </div>
  );
}

export default NewPlantForm;
