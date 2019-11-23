import React from 'react'

import { Wrapper, Row } from 'Stories/layout'
import {
  Input,
  RtaInput,
  LiaInput,
  RiaInput,
  LriaInput,
  LirtInput
} from 'Components/Input'

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
      <LiaInput placeholder='Placeholder' />
    </Row>
  </Wrapper>
)

export const rightIconAddon = () => (
  <Wrapper>
    <Row info='Arrow Icon - Span'>
      <RiaInput placeholder='Placeholder' />
    </Row>
    <Row info='Arrow Icon - Anchor'>
      <RiaInput
        renderIconAs='a'
        href='https://romansorin.com'
        placeholder='Placeholder'
      />
    </Row>
    <Row info='Arrow Icon - Button'>
      <RiaInput renderIconAs='button' placeholder='Placeholder' />
    </Row>
  </Wrapper>
)
export const leftRightIconAddon = () => (
  <Wrapper>
    <Row info='Arrow Icon - Span'>
      <LriaInput placeholder='Placeholder' />
    </Row>
    <Row info='Arrow Icon - Anchor'>
      <LriaInput
        renderIconAs='a'
        href='https://romansorin.com'
        placeholder='Placeholder'
      />
    </Row>
    <Row info='Arrow Icon - Button'>
      <LriaInput renderIconAs='button' placeholder='Placeholder' />
    </Row>
  </Wrapper>
)
export const leftIconRightTextAddon = () => (
  <Wrapper>
    <Row info='Search & Text'>
      <LirtInput type='text' text='text' placeholder='Placeholder' />
    </Row>
    <Row info='Search & Text - Anchor'>
      <LirtInput
        renderTextAs='a'
        type='text'
        text='text'
        href='https://romansorin.com'
        placeholder='Placeholder'
      />
    </Row>
    <Row info='Search & Text - Button'>
      <LirtInput
        type='text'
        text='text'
        renderTextAs='button'
        placeholder='Placeholder'
      />
    </Row>
  </Wrapper>
)

leftRightIconAddon.story = {
  name: 'Left/Right Icon Addon'
}
leftIconRightTextAddon.story = {
  name: 'Left Icon/Right Text Addon'
}
