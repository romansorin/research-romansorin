import React from 'react'

import Button from './Button'

const commonStyles = 'text-white-0'

const PrimaryButton = props => {
  switch (props.variant) {
    case 0:
      return (
        <Button
          {...props}
          className={`${
            props.className ? props.className + ' ' : ''
          }${commonStyles} bg-theme-2 hover:bg-theme-5 focus:bg-theme-5`}
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
          }${commonStyles} bg-theme-5 hover:bg-theme-4 focus:bg-theme-4`}
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
          }${commonStyles} bg-theme-0 hover:bg-theme-1 focus:bg-theme-1`}
        >
          {props.children}
        </Button>
      )
    case 3:
      return (
        <Button
          {...props}
          className={`${
            props.className ? props.className + ' ' : ''
          }${commonStyles} bg-text-2 hover:bg-text-1 focus:bg-text-1`}
        >
          {props.children}
        </Button>
      )
    default:
      return <Button {...props}>{props.children}</Button>
  }
}

export default PrimaryButton
