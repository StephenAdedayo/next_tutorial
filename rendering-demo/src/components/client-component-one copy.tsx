'use client'

import { useState } from "react"

export const ClientComponentTwo = () => {

    const [name, setName] = useState('Superman')

    return <h1>client component Two {name}</h1>
}