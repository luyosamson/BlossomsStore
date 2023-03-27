import React,{useState,useEffect} from 'react'
import FeaturedList from '../featuredlist/FeaturedList'
import './FeaturedPage.css'

function FeaturedPage({handleClick}) {

    const [listitem,setListItems]=useState([])


    useEffect(()=>{
        fetch("http://localhost:6001/featured")
        .then((r)=>r.json())
        .then((item)=>setListItems(item))
    },[])

  return (
    <div className='featuredPage'>
       <h2>Featured Products</h2>
        <FeaturedList
        handleClick={handleClick}
        listitem={listitem}/>



    </div>
  )
}

export default FeaturedPage