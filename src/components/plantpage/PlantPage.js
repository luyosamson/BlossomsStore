import React,{useState,useEffect} from 'react'
import PlantList from '../plantlist/PlantList'
import Pagination from '../pagination/Pagination'

function PlantPage() {
  const [items,setItems]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [postPerPage,setPostperpage]=useState(8)
  

  

useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then((r)=>r.json())
  .then((items)=>setItems(items))
},[])

const lastPostindex=currentPage*postPerPage;
const firstPostindex=lastPostindex-postPerPage;
const currentPosts=items.slice(firstPostindex,lastPostindex);


  return (
    <div>
  <PlantList items={currentPosts}/>  

      <Pagination 
        totalPosts={items.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setPostperpage={setPostperpage}
        
        />
    </div>
  )
}

export default PlantPage
