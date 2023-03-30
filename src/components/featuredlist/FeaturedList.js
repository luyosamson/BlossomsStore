import React from 'react'
import FeaturedCard from '../featuredcard/FeaturedCard'
import './FeaturedList.css'

function FeaturedList({handleClick,listitem}) {
  return (
    <div>
     
        <ul className='featuredList'>
         {
            listitem?.map((lists)=>(
                <FeaturedCard
                key={lists.id}
                lists={lists}
                handleClick={handleClick}
                 />
            ))
         }
         
        </ul>
    </div>
  )
}

export default FeaturedList