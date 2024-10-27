import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const Analytics = () => {
  return (
    <Card>
      <div>
        <p>Analytics</p>
        <Link href={'/complex-dasboard/archived'}>next</Link>
      </div>
    </Card>
  )
}

export default Analytics
