import React from 'react'
import FeaturedCard from '../featuredcard/FeaturedCard'
import './FeaturedList.css'

function FeaturedList({listitem}) {
  return (
    <div>
        <ul className='featuredList'>
         {
            listitem.map((lists)=>(
                <FeaturedCard
                key={lists.id}
                lists={lists}
                 />
            ))
         }

        </ul>



    </div>
  )
}

export default FeaturedList