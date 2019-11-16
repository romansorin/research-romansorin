import React from 'react'

import { Button, PrimaryButton, SecondaryButton } from '.'

export default {
  title: 'Button'
}

const commonStyles = 'mr-8'
const hoverShadowStyle = 'shadow-1'

const Row = props => (
  <div>
    <h1 className='text-xl font-semibold mb-4'>{props.info}</h1>
    <div className='flex flex-row justify-start mb-8'>{props.children}</div>
  </div>
)

export const base = () => (
  <div className='mx-5 my-5'>
    <Button>Button</Button>
  </div>
)

export const primary = () => (
  <div className='mx-5 my-5'>
    <Row info='Variant 0'>
      <PrimaryButton className={`${commonStyles}`} variant={0}>
        Button
      </PrimaryButton>
    </Row>
    <Row info='Variant 1'>
      <PrimaryButton className={`${commonStyles}`} variant={1}>
        Button
      </PrimaryButton>
    </Row>
    <Row info='Variant 2'>
      <PrimaryButton className={`${commonStyles}`} variant={2}>
        Button
      </PrimaryButton>
    </Row>
    <Row info='Variant 3'>
      <PrimaryButton className={`${commonStyles}`} variant={3}>
        Button
      </PrimaryButton>
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
