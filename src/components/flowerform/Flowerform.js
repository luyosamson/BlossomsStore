import React, { useState } from 'react';
import Flowerdata from './Flowerdata';
import './Flowerform.css';

function Flowerform({ items, onDeleteItem, onUpdatedPrice, updatestatus }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentItems = items.slice(startIndex, endIndex);

  const pageCount = Math.ceil(items.length / pageSize);

  function handlePageChange(page) {
    setCurrentPage(page);
  }



  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Update Price</th>
          </tr>
          {currentItems.map((newItem) => (
            <Flowerdata
              key={newItem.id}
              newItem={newItem}
              onDeleteItem={onDeleteItem}
              onUpdatedPrice={onUpdatedPrice}
              updatestatus={updatestatus}
            />
          ))}
        </tbody>
      </table>
      <div className="Dpagination">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Flowerform;
