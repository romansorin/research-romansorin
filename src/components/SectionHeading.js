import React from 'react'

const SectionHeading = props => {
  return (
    <h1 className='md:text-5xl text-3xl tracking-tight mb-4 leading-none font-bold'>
      {props.children}
    </h1>
  )
}

export default SectionHeading
