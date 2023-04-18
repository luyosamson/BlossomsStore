import React, { useState, useEffect } from 'react';
import FlowerList from '../flowerlist/FlowerList';
import Pagination from '../pagination/Pagination';
import Search from '../search/Search';
import './Flowerpage.css';

function FlowerPage({ handleClick }) {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostperpage] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');

  useEffect(() => {
    fetch('/flowers')
      .then((r) => r.json())
      .then((items) => setList(items));
  }, []);

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const lastPostindex = currentPage * postPerPage;
  const firstPostindex = lastPostindex - postPerPage;

  const filteredList = list.filter((item) => {
    if (selectedOption === 'All') {
      return true;
    } else {
      return item.type === selectedOption;
    }
  }).filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const currentPosts = filteredList.slice(firstPostindex, lastPostindex);

  return (
    <div>
      <div className='flowers-headers'>
        Filter By
        <select value={selectedOption} onChange={handleFilterChange}>
          <option value='All'>All</option>
          <option value='Romantic Flowers'>Romantic Flowers</option>
          <option value='Thank you Flowers'>Thank you Flowers</option>
          <option value='Celebration Flowers'>Celebration Flowers</option>
          <option value='Birthday Flowers'>Birthday Flowers</option>
          <option value='Sympathy Flowers'>Sympathy Flowers</option>
          <option value='I am sorry Flowers'>I Am Sorry Flowers</option>
          <option value='New baby Flowers'>New Baby Flowers</option>
        </select>
        <Search onSearch={searchTerm} onChangeSearch={handleChange} />
      </div>

      <FlowerList key={list.id} list={currentPosts} handleClick={handleClick} />

      <Pagination
        totalPosts={filteredList.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setPostperpage={setPostperpage}
      />
    </div>
  );
}

export default FlowerPage;
