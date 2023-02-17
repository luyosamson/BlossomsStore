import React from 'react'
import Flowerdata from './Flowerdata'


function Flowerform({items,onDeleteItem,onUpdatedPrice,updatestatus}) {
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
                {
                    items.map(newItem=>
                        <Flowerdata 
                        key={newItem.id}
                        newItem={newItem}
                        onDeleteItem={onDeleteItem}
                        onUpdatedPrice={onUpdatedPrice}
                        updatestatus={updatestatus}
                        
                        />
                        
                        )
                        }
      

            </tbody>
        </table>
    </div>
  )
}

export default Flowerform