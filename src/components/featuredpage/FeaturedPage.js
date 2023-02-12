import React,{useState,useEffect} from 'react'
import FeaturedList from '../featuredlist/FeaturedList'

function FeaturedPage() {

    const [listitem,setListItems]=useState([])


    useEffect(()=>{
        fetch("http://localhost:6001/featured")
        .then((r)=>r.json())
        .then((item)=>setListItems(item))
    },[])

  return (
    <div>
        <FeaturedList
        
        listitem={listitem}/>



    </div>
  )
}

export default FeaturedPage