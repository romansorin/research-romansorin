import React from 'react'

const Heading = ({ title, authors }) => {
  return (
    <div>
      <h1 className='text-text-2 text-4xl md:text-5xl leading-snug font-medium'>
        {title}
      </h1>
      <h2 className='text-text-2 text-base md:text-lg'>{authors}</h2>
    </div>
  )
}

export default Heading
