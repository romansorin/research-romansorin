import { useState } from 'react'

const useForm = (initialState, callback) => {
  const [inputs, setInputs] = useState(initialState)
  const [authors, setAuthors] = useState(initialState)
  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleInputChange = event => {
    event.persist()

    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }))
  }

  const handleAuthorInputChange = event => {
    event.persist()

    setAuthors(
      authors => ({
        ...authors,
        [event.target.name]: event.target.value
      }),
      console.log(authors)
    )
  }

  return {
    handleSubmit,
    handleInputChange,
    handleAuthorInputChange,
    authors,
    inputs
  }
}

export default useForm
