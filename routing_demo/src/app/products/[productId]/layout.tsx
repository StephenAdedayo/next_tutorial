import React, { ReactNode } from 'react'

const ProductDetails = ({children} : {
    children : ReactNode
}) => {
  return (
    <div>
      {children}
      <p>All Products</p>
    </div>
  )
}

export default ProductDetails
