"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const OrderProduct = () => {
    const router = useRouter()
    const handleClick = () => {
        console.log('order placed');
        router.push('/')
        
    }

   return (
    <div>
      <p onClick={handleClick}>Place order</p>
    </div>
  )
}

export default OrderProduct
