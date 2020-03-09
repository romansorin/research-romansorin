import React from "react"

import { Layout, SEO } from "Components"
import { Input, Label, TextArea, RiaInput } from "Components/Input"
import { PrimaryButton, SecondaryButton } from "Components/Button"
import { Row, Column } from "Components/index"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Start' />
      <h1 className='mb-3 text-text-2 text-3xl md:text-4xl leading-snug font-medium'>
        Welcome to my research study.
      </h1>
      <p>
        A little bit of info on what this is about, how long it will take, etc.
        Directions:
      </p>
      ;
      <form onSubmit={null}>
        <Row className='my-6 flex-wrap'>
          <Column className='my-6 md:my-0 w-full md:w-1/2 md:pr-12'>
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
          usage and privacy policy clauses, and agree to the terms of service.{" "}
        </label>
        <PrimaryButton
          variant={0}
          className='mt-12 px-16 tracking-wide'
          type='submit'
        >
          Begin
        </PrimaryButton>
      </form>
    </Layout>
  )
}

export default IndexPage
