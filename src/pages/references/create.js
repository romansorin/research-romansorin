import React, { useState } from 'react'
import Select from 'react-select'

import { Input, Label, TextArea, RiaInput } from 'Components/Input'
import { PrimaryButton, SecondaryButton } from 'Components/Button'
import { Layout, Row, Column } from 'Components/index'
import useForm from './useForm'
import { Database } from 'Firebase'

const PATH = 'references'
const DB = Database.collection(PATH)

const CreateReferencePage = () => {
  const [authors, setAuthors] = useState([''])

  const handleAuthorInputChange = (event, index) => {
    event.persist()

    const newAuthors = [...authors]
    newAuthors[index] = event.target.value

    setAuthors(newAuthors, console.log(authors))
  }

  const handleRemoveAuthor = id => {
    const newAuthors = authors.filter((_, index) => {
      return id !== index
    })
    setAuthors([...newAuthors])
  }

  const addReference = () => {
    DB.add(inputs)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }

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
    addReference
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
        <Row className='justify-end flex-wrap my-6'>
          <Column className='w-full'>
            <Label htmlFor='authors'>Authors</Label>
            {authors.map((author, i) => (
              <div key={i}>
                <RiaInput
                  type='text'
                  className='mt-3 mb-3'
                  placeholder='Author name'
                  onChange={e => handleAuthorInputChange(e, i)}
                  value={author}
                />
                <button type='button' onClick={() => handleRemoveAuthor(i)}>
                  Remove
                </button>
              </div>
            ))}
          </Column>
          <SecondaryButton
            onClick={() => setAuthors([...authors, ''])}
            type='button'
            className='mt-8'
            variant={0}
          >
            Add author
          </SecondaryButton>
        </Row>
        <Column className='my-6'>
          <Label htmlFor='summary'>Summary</Label>
          <TextArea
            name='summary'
            placeholder='Reference summary or abstract...'
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
              placeholder='IEEE-format'
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
              placeholder='gs URL'
              id='storage_url'
              value={inputs.storage_url}
              onChange={handleInputChange}
            />
          </Column>
        </Row>
        <Row className='my-6'>
          <Column className='w-1/2 pr-12'>
            <Label htmlFor='date_posted'>Date Posted</Label>
            <Input
              name='date_posted'
              type='text'
              className='mt-3'
              placeholder='UTC date'
              id='date_posted'
              value={inputs.date_posted}
              onChange={handleInputChange}
            />
            {/* TODO: Dropdown date inputs */}
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
