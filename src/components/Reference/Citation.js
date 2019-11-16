import React from 'react'

const Citation = props => {
  return (
    <div className='border-t border-white-2'>
      <p className='py-2 font-light text-sm md:text-base text-text-2'>
        {props.children}
      </p>
    </div>
  )
}

export default Citation
