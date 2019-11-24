import React, { useState } from 'react'

import { Input, Label, TextArea, RiaInput } from 'Components/Input'
import { PrimaryButton, SecondaryButton } from 'Components/Button'
import { Layout, Row, Column } from 'Components/index'
import useForm from './useForm'

const CreateReferencePage = () => {
  const callback = () => console.log(inputs)

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      title: '',
      summary: '',
      slug: '',
      citation: '',
      date_posted: '',
      storage_url: ''
    },
    callback
  )

  return (
    <Layout>
      <h1 className='mb-3 text-text-2 text-3xl md:text-4xl leading-snug font-medium'>
        Create reference
      </h1>
      <form onSubmit={handleSubmit}>
        <Row className='my-6'>
          <Column className='w-1/2 pr-12'>
            <Label htmlFor='title'>Title</Label>
            <Input
              type='text'
              placeholder='Reference title'
              value={inputs.title}
              id='title'
              name='title'
              className='mt-3'
              onChange={handleInputChange}
            />
          </Column>
          <Column className='w-1/2 pl-12'>
            <Label htmlFor='slug'>Slug</Label>
            <Input
              type='text'
              name='slug'
              placeholder='reference-slug'
              id='slug'
              value={inputs.slug.replace(/\s+/g, '-').toLowerCase()}
              className='mt-3'
              onChange={handleInputChange}
            />
          </Column>
        </Row>
        {/* <Row className='justify-end flex-wrap my-6'>
          <Column className='w-full'>
            <Label htmlFor='authors'>Authors</Label>
            {authors.map(author => (
              <RiaInput
                key={author.id}
                value={author.value}
                className='mt-3 mb-3'
                type='text'
                name={`author${author.id}`}
                onChange={handleAuthorInputChange}
                placeholder='Placeholder'
              />
            ))}
          </Column>
          <SecondaryButton
            onClick={addAuthor}
            type='button'
            className='mt-8'
            variant={0}
          >
            Add author
          </SecondaryButton>
        </Row> */}
        <Column className='my-6'>
          <Label htmlFor='summary'>Summary</Label>
          <TextArea
            name='summary'
            placeholder='Summary'
            id='summary'
            value={inputs.summary}
            className='mt-3'
            onChange={handleInputChange}
          />
        </Column>
        <Row className='my-6'>
          <Column className='w-1/2 pr-12'>
            <Label htmlFor='citation'>Citation</Label>
            <Input
              name='citation'
              id='citation'
              type='text'
              className='mt-3'
              placeholder='Placeholder'
              value={inputs.citation}
              onChange={handleInputChange}
            />
          </Column>
          <Column className='w-1/2 pl-12'>
            <Label htmlFor='storage_url'>Document URL</Label>
            <Input
              name='storage_url'
              type='text'
              className='mt-3'
              placeholder='Placeholder'
              id='storage_url'
              value={inputs.storage_url}
              onChange={handleInputChange}
            />
          </Column>
        </Row>
        <PrimaryButton
          variant={0}
          className='mt-12 px-16 tracking-wide'
          type='submit'
        >
          create
        </PrimaryButton>
      </form>
    </Layout>
  )
}

export default CreateReferencePage
