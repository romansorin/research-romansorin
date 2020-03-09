import React from "react"

const BlogPage = () => {
  return <div />
}

export default BlogPage
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
        Thank you for participating in this study!
      </h1>
      <p>
        A little bit of info on when the results will come out, how to keep up
        to date, etc.
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
          Be notified about updates and release of the paper.
        </label>
        <p>Thank you! A confirmation email will be sent to you shortly.</p>
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
