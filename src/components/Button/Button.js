import React from 'react'

import '../../../.storybook/utils.css'

const Button = props => (
  <button className='rounded-6 bg-theme-0' {...props}>
    {props.children}
  </button>
)

export default Button
