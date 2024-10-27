import { cookies } from 'next/headers';
import React from 'react'

const About =  () => {
    console.log('server component');

    const cookieStore = (cookies())

    // const theme = cookieStore.get('theme')
    //  console.log(theme);
     
    const time = new Date().toLocaleTimeString()
  return (
    <div>
      about <p>{time}</p>
    </div>
  )
}

export default About
