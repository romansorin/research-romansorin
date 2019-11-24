import React from 'react'

const Column = props => {
  return (
    <div
      className={`${props.className ? props.className + ' ' : ''}flex flex-col`}
    >
      {props.children}
    </div>
  )
}

export default Column
