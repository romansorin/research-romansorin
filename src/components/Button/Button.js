import React from 'react'

const Button = props => (
  <button
    {...props}
    className={`${
      props.className
    } shadow-0 hover:shadow-1 text-center border-box font-semibold rounded-md uppercase px-5 py-2`}
  >
    {props.children}
  </button>
)

export default Button
