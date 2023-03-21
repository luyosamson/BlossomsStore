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
   const [selectedOption, setSelectedOption] = useState('All');
  

  

useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then((r)=>r.json())
  .then((items)=>setItems(items))
},[])

  const handleChange = (value) => {
    setSearchTerm(value);
  };

    const handleFilterChange = (e) => {
    setSelectedOption(e.target.value);
  };


const lastPostindex=currentPage*postPerPage;
const firstPostindex=lastPostindex-postPerPage;

   const filteredList = items.filter((item) => {
    if (selectedOption === 'All') {
      return true;
    } else {
      return item.type === selectedOption;
    }
  }).filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

const currentPosts=filteredList.slice(firstPostindex,lastPostindex);


  return (
    <div>

      <div className='plants-header'>
        Filter By:
        <select value={selectedOption} onChange={handleFilterChange}>
          <option value="all">All</option>
            <option value="Succulent Plants">Succulent Plants</option>
            <option value="Tropical Plants">Tropical Plants</option>
            <option value="Floor Plants">Floor Plants</option>
            <option value="Outdoor Plants">Outdoor Plants</option>
            <option value="Indoor Plants">Indoor Plants</option>
            <option value="Bonsai">Bonsai</option>
            <option value="Flowering Plants">Flowering Plants</option>
            <option value="House Plants">House Plants</option>
            <option value="Hanging Plants">Hanging Plants</option>
        </select>
         <Search onSearch={searchTerm}  onChangeSearch={handleChange}/>
      </div>
  <PlantList  key={items.id} items={currentPosts} handleClick={handleClick}/>  

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

export default PlantPage
