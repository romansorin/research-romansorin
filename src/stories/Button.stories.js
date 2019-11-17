import React from 'react'

import { Wrapper, Row } from 'Stories/layout'
import { Button, PrimaryButton, SecondaryButton } from 'Components/Button'

export default {
  title: 'Button'
}

export const base = () => (
  <Wrapper>
    <Row info='Default'>
      <Button>Button</Button>
    </Row>
  </Wrapper>
)

export const primary = () => (
  <Wrapper>
    <Row info='Variant 0'>
      <PrimaryButton variant={0}>Button</PrimaryButton>
    </Row>
    <Row info='Variant 1'>
      <PrimaryButton variant={1}>Button</PrimaryButton>
    </Row>
    <Row info='Variant 2'>
      <PrimaryButton variant={2}>Button</PrimaryButton>
    </Row>
    <Row info='Variant 3'>
      <PrimaryButton variant={3}>Button</PrimaryButton>
    </Row>
  </Wrapper>
)

export const secondary = () => (
  <Wrapper>
    <Row info='Variant 0'>
      <SecondaryButton variant={0}>Button</SecondaryButton>
    </Row>
    <Row info='Variant 1'>
      <SecondaryButton variant={1}>Button</SecondaryButton>
    </Row>
    <Row info='Variant 2'>
      <SecondaryButton variant={2}>Button</SecondaryButton>
    </Row>
  </Wrapper>
)
