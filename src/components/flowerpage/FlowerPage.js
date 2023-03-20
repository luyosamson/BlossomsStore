import React,{useState,useEffect} from 'react'
import FlowerList from '../flowerlist/FlowerList'
import Pagination from '../pagination/Pagination'
import Search from '../search/Search'
import './Flowerpage.css'


function FlowerPage({handleClick}) {
  const [list,setList]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [postPerPage,setPostperpage]=useState(8)

  const [searchTerm, setSearchTerm] = useState("");



 
useEffect(()=>{
  fetch("http://localhost:6001/flowers")
  .then((r)=>r.json())
  .then((items)=>
    setList(items));
   
},[])

  const handleChange = (value) => {
    setSearchTerm(value);
  };



const lastPostindex=currentPage*postPerPage;
const firstPostindex=lastPostindex-postPerPage;

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


const currentPosts=filteredList.slice(firstPostindex,lastPostindex);




  return (
    <div>

    <div className='flowers-headers'>
      Filter By<select>
        <option>All</option>
        <optgroup label='By Occasion'>
        <option>Romantic Flowers</option>
         <option>Thank you flowers</option>
          <option>Celebration flowers</option>
           <option>Get well soon flowers</option>
            <option>Sympathy flowers</option>
            <option>I'm sorry flowers</option>
            <option>New baby flowers</option>
            </optgroup>
            <optgroup label='By Type'>
              <option>Flower Hampers</option>
              <option>Flower bouquets</option>
              <option>Flower boxes</option>
              <option>Flower baskets</option>

            </optgroup>
      </select>
        <Search onSearch={searchTerm} 
        onChangeSearch={handleChange}
         />
       </div>

         
        <FlowerList
        key={list.id}
        list={currentPosts}
         handleClick={handleClick}/>

       

        <Pagination 
        totalPosts={filteredList.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setPostperpage={setPostperpage}
        
        />
        
        
    </div>
  )
}

export default FlowerPage
