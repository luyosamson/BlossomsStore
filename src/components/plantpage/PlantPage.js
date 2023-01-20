import React,{useEffect,useState} from "react";
import NewPlantForm from "../newplantForm/NewPlantForm";
import PlantList from "../plantlist/PlantList";
import Search from "../search/Search";

function PlantPage() {


 const [items,setItems]=useState([])
 const [searchTerm,setsearchTerm]=useState("")
 

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((items)=>setItems(items))

  },[])

  function handleAddPlant(added){
      setItems([...items,added])
     
  }

  const plantsToDisplay=items.filter((item)=>{
    return item?.name.toLowerCase().includes(searchTerm.toLowerCase())

  })

  function handleDeleteItem(id){
   const upDatedItems=items.filter((item) => item.id !== id)
   setItems(upDatedItems)
  }

  function handlePriceUpdate(newPrice){
   const upDatedItems=items.map((item)=>{

    if(item.id===newPrice.id){
      return newPrice

    }
    else{
      return item
    }
   })
   setItems(upDatedItems)


  }



  return (
    <main>
      {/* <NewPlantForm onAddPlant={handleAddPlant}/> */}
      <Search onSearch={searchTerm} onChangeSearch={setsearchTerm}/>
      <PlantList  
      items={plantsToDisplay} 
      onDeleteItem={handleDeleteItem}
      onUpdate={handlePriceUpdate}/>
    </main>
  );
}

export default PlantPage;
