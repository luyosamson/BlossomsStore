import React from 'react'
import './FlowerList.css'
import FlowerCard from '../flowercard/FlowerCard'


function FlowerList({list}) {




  return (
    <div>
    <ul className='flowerList'>
        {
            list?.map(newList=>(
                <FlowerCard
                key={newList.id}
                newList={newList}/>

            ))
        }
      
        
    </ul>
   

    </div>
    
  )
}

export default FlowerList