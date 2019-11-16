import React from 'react'

import { Input } from '.'

export default {
  title: 'Input'
}

const commonStyles = 'mr-8'

const Row = props => (
  <div>
    <h1 className='text-xl font-semibold mb-4'>{props.info}</h1>
    <div className='flex flex-row justify-start mb-8'>{props.children}</div>
  </div>
)

export const base = () => (
  <div className='mx-5 my-5'>
    <Input />
  </div>
)
