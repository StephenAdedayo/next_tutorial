import React from 'react'
import { Metadata } from 'next';
import Link from 'next/link';

// the absolute will completely ignore the template from layout.tsx
export const metadata : Metadata = {
     title : {
        absolute : 'Blog',

     }
}

const Blog = () => {
  return (
    <div>
      Blog

      <Link href={'/'}>Blog</Link>
    </div>
  )
}

export default Blog
