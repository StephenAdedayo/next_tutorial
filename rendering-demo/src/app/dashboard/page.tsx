'use client'

import React, { useState } from 'react'

const Dashboard = () => {
    console.log('client component');

    const [name, setName] = useState('')
    
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  )
}

export default Dashboard
