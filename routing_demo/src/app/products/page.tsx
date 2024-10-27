import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div>
      <h1>Product List</h1>

   <Link href={'/products/1'}><p>Product 1</p></Link>     
   <Link href={'/products/2'} replace >Product 2</Link>     
   <Link href={'/products/3'}><p>Product 3</p></Link>     

    </div>
  )
}

export default Products 
