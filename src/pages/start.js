import React from 'react'

import { Layout, SEO } from 'Components'
import { Input, Label, TextArea, RiaInput } from 'Components/Input'
import { PrimaryButton, SecondaryButton } from 'Components/Button'
import { Row, Column } from 'Components/index'

const StartPage = () => {
  return (
    <Layout>
      <SEO title='Start' />
      <h1 className='mb-3 text-3xl font-medium leading-snug text-text-2 md:text-4xl'>
        Welcome to my research study.
      </h1>
      <p>
        A little bit of info on what this is about, how long it will take, etc.
        Directions: Goal: Please reach registration of service presented.
      </p>

      <form onSubmit={null}>
        <Row className='flex-wrap my-6'>
          <Column className='w-full my-6 md:my-0 md:w-1/2 md:pr-12'>
            <Label htmlFor='title'>Title</Label>
            <Input
              type='text'
              placeholder='Reference title'
              id='title'
              name='title'
              className='mt-3'
            />
          </Column>
        </Row>
        <input type='checkbox' name='agree' />
        <label for='agree'>
          By checking this box, you acknowledge that you have read the data
          usage and privacy policy clauses, and agree to the terms of service.{' '}
        </label>
        <PrimaryButton
          variant={0}
          className='px-16 mt-12 tracking-wide'
          type='submit'
        >
          Begin
        </PrimaryButton>
      </form>
    </Layout>
  )
}

export default StartPage
