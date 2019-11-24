import React from 'react'

import Button from './Button'

const SecondaryButton = props => {
  switch (props.variant) {
    case 0:
      return (
        <Button
          {...props}
          className={`${
            props.className ? props.className + ' ' : ''
          }text-theme-2 hover:text-text-5 focus:text-text-5`}
        >
          {props.children}
        </Button>
      )
    case 1:
      return (
        <Button
          {...props}
          className={`${
            props.className ? props.className + ' ' : ''
          }text-theme-0 hover:text-theme-1 focus:text-theme-1`}
        >
          {props.children}
        </Button>
      )
    case 2:
      return (
        <Button
          {...props}
          className={`${
            props.className ? props.className + ' ' : ''
          }text-text-1 hover:text-text-2 focus:text-text-2`}
        >
          {props.children}
        </Button>
      )
    default:
      return <Button {...props}>{props.children}</Button>
  }
}

export default SecondaryButton
