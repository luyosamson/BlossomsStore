// import React from 'react'
// import './FeaturedPage.css'
// import Rev2 from '../../reviews/Daisies.webp'
// import Rev3 from '../../reviews/Daisies2.webp'
// import Rev7 from '../../reviews/Daisies3.webp'
// import Rev8 from '../../reviews/Lily Plant.webp'
// import {AiFillStar} from 'react-icons/ai'

// function FeaturedPage() {
//   const review=[
//   {
//     id:1,
//     src:Rev7,
//     name:"Rainbow Tulip",
//     price:'Ksh.1200'
    
    
//   },
//     {
//     id:2,
//     src:Rev2,
//     name:"Mixed Rosses",
//     price:'Ksh.2500'
     
    

//   },
//     {
//     id:3,
//     src:Rev3,
//     name:"Memorial Magnolia Tree",
//     price:'Ksh.1400'
  
//   },
//       {
//     id:4,
//     src:Rev8,
//     name:"Peace Lilly Plant",
//     price:'Ksh.2500'

//   }
// ]

//    return (
//     <div className='featured-container'>
//        <h2> THIS WEEK'S HIGHLIGHT</h2>
//   <div className='featured-card'>
   
//     {
//       review.map(({id,src,name,price})=>(
//         <div key={id} className="card">
//           <div className="image-container">
//             <img src={src} alt="display" />
          
//           </div>

//             <h4>{name}</h4>
//             <h4>{price}</h4>
//             Ratings:<h4><AiFillStar/></h4>
           
//         </div>
//       ))      
//     }     
//   </div>
// </div>

//   )
// }

// export default FeaturedPage


import React from 'react'
import './FeaturedPage.css'
import Rev2 from '../../reviews/Daisies.webp'
import Rev3 from '../../reviews/Daisies2.webp'
import Rev7 from '../../reviews/Daisies3.webp'
import Rev8 from '../../reviews/Lily Plant.webp'
import {AiFillStar} from 'react-icons/ai'

function FeaturedPage() {
  const review=[
  {
    id:1,
    src:Rev7,
    name:"Rainbow Tulip",
    price:'Ksh.1200'
  },
  {
    id:2,
    src:Rev2,
    name:"Mixed Rosses",
    price:'Ksh.2500'
  },
  {
    id:3,
    src:Rev3,
    name:"Memorial Magnolia Tree",
    price:'Ksh.1400'
  },
  {
    id:4,
    src:Rev8,
    name:"Peace Lilly Plant",
    price:'Ksh.2500'
  }
]

  return (
    <div className='featured-container'>
      <h2>THIS WEEK'S HIGHLIGHT</h2>
      <div className='featured-card'>
        {
          review.map(({id, src, name}) => (
            <div key={id} className="card">
              <div className="images-container">
                <img src={src} alt="display" />
              </div>
              <h4>{name}</h4>
             
              <div className="ratings">
                <h4>
                Ratings:{[...Array(5)].map((star, index) => {
                  return <AiFillStar key={index} color='green' />;
                })}</h4>
              </div>
            </div>
          ))      
        }     
      </div>
    </div>
  )
}

export default FeaturedPage

