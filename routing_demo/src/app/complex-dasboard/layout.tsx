import React, { ReactNode } from 'react'


type Props = {
    children :React.ReactNode,
    users :React.ReactNode,
    revenue : React.ReactNode,
    analytics : React.ReactNode,
    login : React.ReactNode
}

const layout = ({children, users, revenue, analytics, login} : Props) => {

    const isLoggedIn = true

  return isLoggedIn ? (
    <div>
     <div>{children}</div> 
      <div style={{display : 'flex'}}>

        <div style={{display : 'flex'}}>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
 
       <div style={{display : 'flex', flex : 1}}>{analytics}</div>
      </div>


    </div>
  ) : (
    login
  )
}

export default layout
