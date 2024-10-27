import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const Archived = () => {
  return (
    <Card>
      <p>Default</p>
      <Link href={'/complex-dasboard'}>dashboard</Link>
    </Card>
  )
}

export default Archived
