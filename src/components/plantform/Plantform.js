import React from 'react'
import Formdata from './Formdata'
import './Plantform.css'

function Plantform({items}) {
  return (
    <div>

        <table>
            <tbody>
                <tr>
                    <th>S/N</th>
                     <th>Name</th>
                      <th>Price</th>
                       <th>Status</th>
                </tr>
                {
                    items.map(newItem=>
                        <Formdata 
                        key={newItem.id}
                        newItem={newItem}
                        
                        />
                        
                        )
                        }
      

            </tbody>
        </table>
    </div>
  )
}

export default Plantform