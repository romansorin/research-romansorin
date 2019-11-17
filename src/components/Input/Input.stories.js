import React from 'react'

import { Input } from '.'

export default {
  title: 'Input'
}

const Row = props => (
  <div>
    <h1 className='text-xl font-semibold mb-4'>{props.info}</h1>
    <div className='flex flex-row justify-start mb-8'>{props.children}</div>
  </div>
)

export const base = () => (
  <div className='mx-5 my-5'>
    <Row info='Default'>
      <Input type='text' placeholder='Placeholder' />
    </Row>
    <Row info='Error'>
      <Input type='text' error='true' placeholder='Error' value='Error' />
    </Row>
    <Row info='Success'>
      <Input type='text' success='true' placeholder='Success' value='Success' />
    </Row>
    <Row info='Disabled'>
      <Input type='text' disabled='true' placeholder='Disabled' />
    </Row>
  </div>
)
