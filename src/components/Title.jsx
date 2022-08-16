import React from 'react'

const Title = ({children}) => {
  return (
    <h1 className=" md:text-5xl text-3xl my-8 text-center font-bold">{children}</h1>

  )
}

export const Subtitle = ({children})=>{
  return(
    <h1 className="md:text-4xl text-2xl my-6 text-center font-semibold text-gray-700">{children}</h1>
  )
}

export default Title