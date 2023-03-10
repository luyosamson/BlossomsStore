import React,{useState,useEffect} from 'react'
import FlowerList from '../flowerlist/FlowerList'
import Pagination from '../pagination/Pagination'


function FlowerPage({handleClick}) {
  const [list,setList]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [postPerPage,setPostperpage]=useState(8)

 

 


useEffect(()=>{
  fetch("http://localhost:6001/flowers")
  .then((r)=>r.json())
  .then((items)=>setList(items))
},[])

const lastPostindex=currentPage*postPerPage;
const firstPostindex=lastPostindex-postPerPage;
const currentPosts=list.slice(firstPostindex,lastPostindex);




  return (
    <div>
        <FlowerList
        key={list.id}
        list={currentPosts}
         handleClick={handleClick}/>

        <Pagination 
        totalPosts={list.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setPostperpage={setPostperpage}
        
        />
        
        
    </div>
  )
}

export default FlowerPage

