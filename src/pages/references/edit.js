import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Select from 'react-select'
import { PrimaryButton, SecondaryButton } from 'Components/Button'
import { Column, Layout, Row } from 'Components/index'
import { InputAsDiv, Input, Label, RiaInput, TextArea } from 'Components/Input'
import { Database } from 'Firebase'
import { navigate } from 'gatsby'

Modal.setAppElement('#___gatsby')

const PATH = 'references'
const DB = Database.collection(PATH)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const options = [{ label: 'test', value: 'test' }]

const EditReferencePage = props => {
  const [authors, setAuthors] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [invalidHover, setInvalidHover] = useState(false)
  const [authorErrorMessage, setAuthorErrorMessage] = useState('')
  const [inputs, setInputs] = useState({
    title: '',
    authors: [],
    summary: '',
    slug: '',
    citation: '',
    date_posted: '',
    storage_url: ''
  })
  const [documentId, setDocumentId] = useState()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(
    () => {
      const data = []
      setIsLoading(true)
      DB.where('slug', '==', props.reference)
        .limit(1)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.size === 0) navigate('/404')
          else {
            querySnapshot.forEach(doc => {
              data.push(doc.data())
              setDocumentId(doc.id)
            })
            setInputs({
              title: data[0].title,
              summary: data[0].summary,
              slug: data[0].slug,
              citation: data[0].citation,
              date_posted: data[0].date_posted,
              storage_url: data[0].storage_url
            })
            setAuthors(data[0].authors)
            setIsLoading(false)
          }
        })
        .catch(error => {
          console.log(error)
          navigate('/404')
        })
    },
    [props.reference]
  )

  const handleAuthorInputChange = (event, index) => {
    if (authorErrorMessage.length) setAuthorErrorMessage('')

    event.persist()

    const newAuthors = [...authors]
    newAuthors[index] = event.target.value

    setAuthors(newAuthors)
  }

  const handleRemoveAuthor = id => {
    if (authors.length > 1) {
      setAuthors([
        ...authors.filter((_, index) => {
          return id !== index
        })
      ])
    } else setAuthorErrorMessage('You must have at least one author.')
  }

  const handleSubmit = event => {
    if (event) event.preventDefault()
    editReference()
  }

  const handleInputChange = event => {
    event.persist()

    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }))
  }

  const handleAddAuthor = () => {
    if (authorErrorMessage.length) setAuthorErrorMessage('')
    setAuthors([...authors, ''])
  }

  const editReference = () => {
    inputs.authors = authors
    DB.doc(documentId)
      .set({ ...inputs })
      .then(() => console.log('Document updated'))
      .catch(error => console.error('Error updating document: ', error))
  }

  const deleteReference = () => {
    DB.doc(documentId)
      .delete()
      .then(() => {
        console.log('Document deleted')
        navigate('/references')
      })
      .catch(error => console.log('Error deleting document', error))
  }

  return (
    <Layout>
      <h1 className='mb-3 text-text-2 text-3xl md:text-4xl leading-snug font-medium'>
        Edit reference
      </h1>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Modal
            style={customStyles}
            contentLabel='Example modal'
            isOpen={modalIsOpen}
          >
            <h1 className='font-bold text-text-2 text-4xl'>
              Are you sure you want to delete this reference?
            </h1>
            <SecondaryButton variant={2}>delete</SecondaryButton>
            <PrimaryButton variant={0}>cancel</PrimaryButton>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </Modal>
          <Row className='my-6 flex-wrap'>
            <Column className='my-6 md:my-0 w-full md:w-1/2 md:pr-12'>
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
            <Column className='my-6 md:my-0 w-full md:w-1/2 md:pl-12'>
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
            <Column className='my-6 md:my-0 w-full'>
              <Label htmlFor='authors'>Authors</Label>
              {authors.map((author, i) => (
                <div key={i}>
                  <RiaInput
                    type='text'
                    icon='X'
                    iconStrokeWidth='3'
                    iconSize='18'
                    iconWrapperStyles='text-text-1 mt-6'
                    handleIconClick={() => handleRemoveAuthor(i)}
                    className={`${
                      authorErrorMessage
                        ? 'border border-invalid text-invalid '
                        : ''
                    }my-3 border border-transparent`}
                    placeholder='Author name'
                    onChange={e => handleAuthorInputChange(e, i)}
                    value={author}
                  />
                </div>
              ))}
              {authorErrorMessage ? (
                <small className='font-light text-invalid'>
                  {authorErrorMessage}
                </small>
              ) : (
                ''
              )}
            </Column>
            <SecondaryButton
              onClick={handleAddAuthor}
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
              rows={7}
              value={inputs.summary}
              className='mt-3'
              onChange={handleInputChange}
            />
          </Column>
          <Row className='my-6 flex-wrap'>
            <Column className='my-6 md:my-0 w-full md:w-1/2 md:pr-12'>
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
            <Column className='my-6 md:my-0 w-full md:w-1/2 md:pl-12'>
              <Label htmlFor='storage_url'>Document URL</Label>
              {/* <Select /> */}
              <Input
                name='storage_url'
                type='text'
                className='mt-3'
                placeholder='gs URL'
                id='storage_url'
                value={inputs.storage_url}
                onChange={handleInputChange}
              />
              {/* TODO: Select from storage instead of using URL */}
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
                // value={inputs.date_posted}
                onChange={handleInputChange}
              />

              <Select options={options} placeholder='Month' />
              {/* <Select placeholder='Day' />
                <Select placeholder='Year' /> */}
            </Column>
          </Row>
          <PrimaryButton
            variant={0}
            className='mt-12 px-16 tracking-wide'
            type='submit'
          >
            save
          </PrimaryButton>
          <PrimaryButton
            onMouseEnter={() => setInvalidHover(true)}
            onMouseLeave={() => setInvalidHover(false)}
            style={invalidHover ? { backgroundColor: '#F41901' } : {}}
            className='mt-12 px-12 mx-6 bg-invalid invalid-hover text-white-0 tracking-wide'
            type='button'
            onClick={() => setModalIsOpen(true)}
          >
            delete
          </PrimaryButton>
        </form>
      )}
    </Layout>
  )
}

export default EditReferencePage
