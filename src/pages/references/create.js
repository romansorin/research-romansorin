import React, { useState } from 'react'

import { Input } from 'Components/Input'
import { PrimaryButton } from 'Components/Button'
import { Layout } from 'Components/index'
import useForm from './useForm'

const CreateReferencePage = () => {
  const callback = () => console.log(inputs)

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      title: '',
      authors: [],
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
      Create reference
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={inputs.title}
          id='title'
          name='title'
          onChange={handleInputChange}
        />
        <Input
          name='storage_url'
          id='storage_url'
          value={inputs.storage_url}
          onChange={handleInputChange}
        />
        <Input
          name='citation'
          id='citation'
          value={inputs.citation}
          onChange={handleInputChange}
        />
        <Input
          name='summary'
          id='summary'
          value={inputs.summary}
          onChange={handleInputChange}
        />
        <Input
          name='slug'
          id='slug'
          value={inputs.slug}
          onChange={handleInputChange}
        />
        <PrimaryButton variant={0} type='submit'>
          Submit
        </PrimaryButton>
      </form>
    </Layout>
  )
}

export default CreateReferencePage
