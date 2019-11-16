import React from 'react'

const Input = props => {
  return (
    <input
      {...props}
      className={`${
        props.className ? props.className + ' ' : ''
      }shadow-0 hover:shadow-1 font-semibold rounded-md uppercase px-5 py-2`}
    />
  )
}

export default Input
