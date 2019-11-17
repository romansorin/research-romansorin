import React from 'react'

import { Wrapper, Row } from '../layout'
import { Input, RtaInput, LiaInput } from '../../Input'

export default {
  title: 'Input/Field'
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

export const rightTextAddon = () => (
  <Wrapper>
    <Row info='Text'>
      <RtaInput type='text' text='text' placeholder='Placeholder' />
    </Row>
    <Row info='Anchor'>
      <RtaInput
        type='text'
        href='https://romansorin.com'
        text='text'
        renderTextAs='a'
        placeholder='Placeholder'
      />
    </Row>
    <Row info='Button'>
      <RtaInput
        type='text'
        buttonType='button'
        text='text'
        renderTextAs='button'
        placeholder='Placeholder'
      />
    </Row>
  </Wrapper>
)
export const leftIconAddon = () => (
  <Wrapper>
    <Row info='Search Icon'>
      <LiaInput placeholder='Paper title or author' />
    </Row>
  </Wrapper>
)
export const rightIconAddon = () => <div />
export const leftRightIconAddon = () => <div />
export const leftIconRightTextAddon = () => <div />

leftRightIconAddon.story = {
  name: 'Left/Right Icon Addon'
}
leftIconRightTextAddon.story = {
  name: 'Left Icon/Right Text Addon'
}
