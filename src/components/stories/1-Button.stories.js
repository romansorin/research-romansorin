import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button, PrimaryButton, SecondaryButton } from '../Button'

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

export const primary = () => (
  <div className='mx-5 my-5'>
    <PrimaryButton
      className='bg-black text-white-0'
      onClick={action('clicked')}
    >
      Button
    </PrimaryButton>
  </div>
)

export const secondary = () => (
  <div className='mx-5 my-5'>
    <SecondaryButton
      className='bg-black text-white-0'
      onClick={action('clicked')}
    >
      Button
    </SecondaryButton>
  </div>
)
