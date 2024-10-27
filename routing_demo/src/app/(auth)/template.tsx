"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode, useState } from 'react'

const layout = ({children} : {
    children : ReactNode
}) => {


    const navLinks = [
        {name : 'Register', href : '/register'},
        {name : 'Login', href : '/login'},
        {name : 'Forgotpassword', href : '/forgotpassword'}
    ]

    const pathName = usePathname()

    const [input, setInput] = useState('')

  return (
    <div>
        <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        </div>
      {navLinks.map(link => {

        const isActive = pathName.startsWith(link.href)

        return (
            <Link href={link.href} className={isActive ? 'font-bold text-blue-500' : ''}>{link.name}</Link>

        )
      })}
    

      {children}
    </div>
  )
}

export default layout
