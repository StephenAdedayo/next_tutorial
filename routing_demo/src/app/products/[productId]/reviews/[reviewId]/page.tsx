'use client'  
// made use of use client to make the reset in the error.jsx work
import { notFound } from 'next/navigation'
import React from 'react'


const ReviewId = ({params} : {
    params : {reviewId : string, productId : string}
              
}) => {

    const genRandomInt = (count : number)  => {
        return Math.floor(Math.random() * count)
    } 

    const random = genRandomInt(2)


    if(random === 1){
        throw new Error('Review In Progress')
    }

    if(parseInt(params.reviewId) > 1000){
        notFound()
    }

  return (
    <div>
      Review {params.reviewId} for Product {params.productId}
    </div>
  )
}

export default ReviewId
