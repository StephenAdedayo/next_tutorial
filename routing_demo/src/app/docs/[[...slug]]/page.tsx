import React from 'react'

const Slug = ({params} : {
    params : {slug : Array<string>}
}) => {

    if(params.slug?.length == 2 ){
  return (
    <div>
      <h1>docs at {params.slug[0]} and {params.slug[1]}</h1>
    </div>
  )
}

  else if(params.slug?.length == 1){
    return <p>docs for only {params.slug[0]}</p>
  } 

  return <p>docs for viewing</p>
}

export default Slug
