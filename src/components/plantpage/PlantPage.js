import React,{useState,useEffect} from 'react'
import PlantList from '../plantlist/PlantList'
import Pagination from '../pagination/Pagination'
import Search from '../search/Search'
import './Plantpage.css'

function PlantPage({handleClick}) {
  const [items,setItems]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [postPerPage,setPostperpage]=useState(8)
   const [searchTerm, setSearchTerm] = useState("");
  

  

useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then((r)=>r.json())
  .then((items)=>setItems(items))
},[])

  const handleChange = (value) => {
    setSearchTerm(value);
  };


const lastPostindex=currentPage*postPerPage;
const firstPostindex=lastPostindex-postPerPage;

 const filteredList = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const currentPosts=filteredList.slice(firstPostindex,lastPostindex);


  return (
    <div>

      <div className='plants-header'>
        <label>Filter By:</label>
        <select>
          <option>All</option>
          <optgroup label='Type'>
            <option>Succulent Plants</option>
            <option>Floor Plants</option>
            <option>Outdoor Plants</option>
            <option>Bonsai</option>
            <option>Flowering Plants</option>
            <option>Herbs</option>
            <option>Tree Plants</option>
            <option>Gift Plants</option>
          </optgroup>
        </select>
         <Search onSearch={searchTerm} 
        onChangeSearch={handleChange}
         />
      </div>
  <PlantList items={currentPosts}
  handleClick={handleClick}/>  

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
