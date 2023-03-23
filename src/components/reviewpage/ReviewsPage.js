import React from 'react'
import './Reviewspage.css'
import Rev2 from '../../reviews/Display1.jpg'
import Rev3 from '../../reviews/Display3.jpg'
import Rev7 from '../../reviews/Display4.jpg'
import Rev8 from '../../reviews/monstera.jpg'


function ReviewsPage() {

const reviews=[
  {
    id:1,
    src:Rev7,
    name:"New Baby Flowers",
    
  },
    {
    id:2,
    src:Rev2,
    name:"Valentine Flowers",
    

  },
    {
    id:3,
    src:Rev3,
    name:"Thank You Flowers",
  
  },
      {
    id:4,
    src:Rev8,
    name:"Indoor Plants"

  }
]


  return (
    <div className='reviewPage'>
       <h2>Our Products meet various occasions and situations!</h2>
  <div className='reviewCard'>
   
    {
      reviews.map(({id,src,name})=>(
        <div key={id} className="card">
          <div className="image-container">
            <img src={src} alt="display" />
            <h4>{name}</h4>
          </div>
        </div>
      ))      
    }     
  </div>
</div>

  )
}

export default ReviewsPage
