'use client'

import { useState } from "react"
import { ClientComponentTwo } from "./client-component-one copy"
import { ServerComponentOne } from "./server-component-one"

export const ClientComponentOne = ({children} : {children : React.ReactNode}) => {

    const [name, setName] = useState('Batman')

    return(

<>
<h1>client component one {name}</h1>
<ClientComponentTwo />
{/* <ServerComponentOne /> */}
{children}
</>
    ) 
}