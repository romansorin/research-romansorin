import React from 'react'

import { Input } from '../Input'
import { Wrapper, Row } from './layout'

export default {
  title: 'Input'
}

export const base = () => (
  <Wrapper>
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
  </Wrapper>
)

export const rightTextAddon = () => <div />
