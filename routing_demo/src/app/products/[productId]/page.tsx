import React from 'react'
import { Metadata } from 'next'

type props = {
    params : {productId : any}
}


export const generateMetadata = async ({params}: props) : Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iphone ${params.productId}`)
        }, 100)
    })

    return {
        title : `product ${title}`
    }
} 

const ProductDetails  = ( {params} : props )=> {

  return (
    <div>
      single product {params.productId}
    </div>
  )
}

export default ProductDetails
