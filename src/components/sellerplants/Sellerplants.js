import React,{useState,useEffect} from 'react'
import Plantform from '../plantform/Plantform';


function Sellerplants() {


  const [items,setItems]=useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((items)=>setItems(items));

  },[])

  return (
    <div>
      <Plantform items={items}/>
    
    </div>
  )
}

export default Sellerplants