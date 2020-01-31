import React from 'react'

const Label = props => {
  return (
    <label
      className={`${props.className ? props.className + ' ' : ''}text-text-2`}
      htmlFor={props.for}
    >
      {props.children}
    </label>
  )
}

export default Label
