import React from 'react'
import './Reviewspage.css'
// import Rev1 from '../../reviews/rev1.jpeg'
import Rev2 from '../../reviews/rev2.jpg'
import Rev3 from '../../reviews/rev3.jpeg'
// import Rev4 from '../../reviews/rev4.jpeg'
// import Rev5 from '../../reviews/rev5.jpeg'
// import Rev6 from '../../reviews/rev6.jpeg'
import Rev7 from '../../reviews/rev7.jpeg'


function ReviewsPage() {

const reviews=[
  {
    id:1,
    src:Rev7,
    name:"Luyo Samson",
    title:"Great product, greater service",
    review:"Flowers were fresh and in pristine condition. Delivery was quick. I recommend Purpink any day, any time!"

  },
    {
    id:2,
    src:Rev2,
    name:"Mary K.",
    title:"Premium products, premium services",
    review:"The ordering process was so efficient and I received constant updates on my order, this was especially important to me as I"


  },
    {
    id:3,
    src:Rev3,
    name:"Elizabeth V.",
    title:"The most beautiful bouquet!",
    review:"I enjoyed every step of the process that went into ordering these flowers.Customer service was great"

  }
]


  return (
    <div className='reviewPage'>
      <div className='reviewCard'>
        {
         
          reviews.map(({id,name,title,review})=>(
            <div key={id} className="card">
            <h4>{name}</h4>
            <h3>{title}</h3>
            <p>"{review}"</p>


          </div>
          ))      
        }
           
      </div>
    </div>
  )
}

export default ReviewsPage
