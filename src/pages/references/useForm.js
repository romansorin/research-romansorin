import { useState } from 'react'

const useForm = (initialState, initialAuthorState, callback) => {
  const [inputs, setInputs] = useState(initialState)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleInputChange = event => {
    event.persist()

    setInputs(
      inputs => ({
        ...inputs,
        [event.target.name]: event.target.value
      }),
      console.log(inputs)
    )
  }

  return {
    handleSubmit,
    handleInputChange,

    inputs
  }
}

export default useForm
