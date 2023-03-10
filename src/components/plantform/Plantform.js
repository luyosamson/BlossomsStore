import React from 'react'
import Formdata from './Formdata'
import './Plantform.css'

function Plantform({items,onDeleteItem,onUpdatedPrice,updatestatus}) {
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
                        <Formdata 
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

export default Plantform