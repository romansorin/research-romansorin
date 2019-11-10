import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../Button/Button'

export default {
  title: 'Button'
}

export const base = () => (
  <div className='mx-5 my-5'>
    <Button className='bg-black text-white-0' onClick={action('clicked')}>
      Button
    </Button>
  </div>
)

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </Button>
)
