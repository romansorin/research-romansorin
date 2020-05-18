import { Layout, SEO } from 'Components'
import React, { useState } from 'react'
import { navigate } from '@reach/router'

import { Input, Label, TextArea, RiaInput } from 'Components/Input'
import { PrimaryButton, SecondaryButton } from 'Components/Button'
import { Row, Column } from 'Components/index'
import { Database } from 'Firebase'

const pages = ['8nqXhdl3JD8u', 'hwVB0eKUehxy', 'vtc5qYP2r8Ut']

const IndexPage = () => {
  const [email, setEmail] = useState(null)

  const beginExperiment = () => {
    const randomVariant = pages[Math.floor(Math.random() * 3)]
    Database.collection('users').add({
      email: email,
      date: new Date(),
      variant: randomVariant,
      session_start: new Date(),
      session_end: null
    })

    navigate(`/experiment/${randomVariant}`)
  }

  return (
    <Layout>
      <SEO title='Start' />
      <section className='lg:block hidden'>
        <h1 className='mb-3 text-3xl font-medium leading-snug text-text-2 md:text-4xl'>
          Welcome to my research study.
        </h1>
        <p>
          A little bit of info on what this is about, how long it will take,
          etc. Directions: Goal: Please reach registration of service presented.
        </p>
        <Row className='flex-wrap my-6'>
          <Column className='w-full my-6 md:my-0 md:w-1/2 md:pr-12'>
            <Label htmlFor='title'>Title</Label>

            <Input
              onChange={event => setEmail(event.target.value)}
              value={email}
              type='email'
              placeholder='Your email'
              id='email'
              name='email'
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
          onClick={() => beginExperiment()}
          className='px-16 mt-12 tracking-wide'
        >
          Begin
        </PrimaryButton>
      </section>

      <div className='lg:hidden block container mx-auto'>
        A desktop device is required to participate.
      </div>
    </Layout>
  )
}
export default IndexPage
