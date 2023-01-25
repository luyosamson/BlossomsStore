import React,{useState,useEffect} from 'react'
import PlantList from '../plantlist/PlantList'

function PlantPage() {
  

  const [items,setItems]=useState([])

useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then((r)=>r.json())
  .then((items)=>setItems(items))
},[])


  return (
    <div>
  <PlantList items={items}/>  
    </div>
  )
}

export default PlantPage
