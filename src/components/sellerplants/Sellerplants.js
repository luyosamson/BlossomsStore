import React, { useState, useEffect } from 'react';
import Dashboard from '../dashboard/Dashboard';
import Plantform from '../plantform/Plantform';
import './Sellerplants.css';

function Sellerplants() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://evergreen-1t2o.onrender.com/plants')
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  function handleDeleteItem(deleteditem) {
    const updatedItem = items.filter((item) => item.id !== deleteditem.id);
    setItems(updatedItem);
  }

  function handleUpdatedPrice(updatedItem) {
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  }

  function handleAddStatus(newstatus) {
    setItems([...items, newstatus]);
  }

  return (
    <div className="container">
      <div className="dashboard">
        <Dashboard />
      </div>
      <div className="items-container">
        <Plantform
          items={items}
          onDeleteItem={handleDeleteItem}
          onUpdatedPrice={handleUpdatedPrice}
          updatestatus={handleAddStatus}
        />
      </div>
    </div>
  );
}

export default Sellerplants;
