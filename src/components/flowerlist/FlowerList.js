import React from 'react'
import './FlowerList.css'
import FlowerCard from '../flowercard/FlowerCard'


function FlowerList({list,handleClick}) {




  return (
    <div>
    <ul className='flowerList'>
        {
            list?.map(newList=>(
                <FlowerCard
                key={newList.id}
                newList={newList}
                handleClick={handleClick}
               />

            ))
        }
    </ul>
    </div> 
  )
}

export default FlowerList