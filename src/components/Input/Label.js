import React from 'react'

const Label = props => {
  return (
    <label
      className={`${props.className ? props.className + ' ' : ''}text-text-2`}
      {...props}
    >
      {props.children}
    </label>
  )
}

export default Label
