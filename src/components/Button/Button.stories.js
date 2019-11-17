import React from 'react'

import { Button, PrimaryButton, SecondaryButton } from '.'

export default {
  title: 'Button'
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
      <Button>Button</Button>
    </Row>
  </div>
)

export const primary = () => (
  <div className='mx-5 my-5'>
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
  </div>
)

export const secondary = () => (
  <div className='mx-5 my-5'>
    <Row info='Variant 0'>
      <SecondaryButton variant={0}>Button</SecondaryButton>
    </Row>
    <Row info='Variant 1'>
      <SecondaryButton variant={1}>Button</SecondaryButton>
    </Row>
    <Row info='Variant 2'>
      <SecondaryButton variant={2}>Button</SecondaryButton>
    </Row>
  </div>
)
