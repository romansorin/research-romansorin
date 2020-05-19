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
  const [emailError, setEmailError] = useState(false)

  const beginExperiment = () => {
    if (!email) {
      setEmailError(true)
      return
    } else setEmailError(false)

    const randomVariant = pages[Math.floor(Math.random() * 3)]
    Database.collection('users')
      .add({
        email: email,
        date: new Date(),
        variant: randomVariant,
        session_start: new Date(),
        session_end: null
      })
      .then(docRef => navigate(`/experiment/${randomVariant}?doc=${docRef.id}`))
  }

  return (
    <Layout>
      <SEO title='Start' />
      <section className='hidden lg:block'>
        <h1 className='mb-3 text-3xl font-medium leading-snug text-text-2 md:text-4xl'>
          Welcome to my research study.
        </h1>
        <p>
          This study is centered around identifying how different common or
          popular layouts may potentially yield more effective retention or
          customer acquisition, and detail other associated behaviors. In
          summary, three common layouts were identified and created from six
          clusters of almost 1000 sites, identified by a K-Means clustering
          algorithm.
          <br />
          <br />
          This experiment should take approximately three minutes or less.
          Please navigate within the layout and attempt to identify how to begin
          using or signing up for the presented product. None of the copy or
          images represent any real companies or products in any aspect.
          <br />
          <br />
          Emails are collected strictly for unique identification and filtering
          responses. Courtesy of{' '}
          <a
            className='font-semibold text-theme-1'
            href='https://tailwindui.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            TailwindUI
          </a>{' '}
          for providing the components to build out sample layouts. You must use
          a desktop device to participate.
        </p>
        <Row className='flex-wrap my-6'>
          <Column className='w-full my-6 md:my-0 md:w-1/2 md:pr-12'>
            <Label htmlFor='email'>Email address</Label>
            <Input
              onChange={event => setEmail(event.target.value)}
              value={email}
              type='email'
              placeholder='Your email'
              id='email'
              name='email'
              className='mt-3'
            />
            {emailError && (
              <small className='mt-1 text-invalid'>
                You must provide an email.
              </small>
            )}
          </Column>
        </Row>
        <PrimaryButton
          variant={0}
          onClick={() => beginExperiment()}
          className='px-16 mt-12 tracking-wide'
        >
          Begin
        </PrimaryButton>
      </section>

      <div className='container block mx-auto lg:hidden'>
        A desktop device is required to participate.
      </div>
    </Layout>
  )
}
export default IndexPage
