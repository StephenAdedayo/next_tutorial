import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Homepage</h1>

      <Link href={'/blog'}>Blog</Link>
    </div>
  )
}

export default page

