import React, { useEffect, useState } from 'react'

const commonStatusStyles = 'pt-2'

const Input = props => {
  const [statusStyles, setStatusStyles] = useState('text-text-1')
  const [placeholderStyle, setPlaceholderStyle] = useState(
    'placeholder-placeholder'
  )
  const [successMessage, setSuccessMessage] = useState('Successful!')
  const [errorMessage, setErrorMessage] = useState('Something is wrong.')

  useEffect(
    () => {
      function checkStatus () {
        if (props.success) setStatusStyles('text-valid border border-valid')
        else if (props.error) {
          setStatusStyles('text-invalid border border-invalid')
        }

        if (props.placeholderStyle) {
          setPlaceholderStyle(props.placeholderStyle)
        }

        if (props.successMessage) setSuccessMessage(props.successMessage)
        else if (props.errorMessage) setErrorMessage(props.errorMessage)

        if (props.disabled) {
          setStatusStyles('text-disabled bg-white-0')
          setPlaceholderStyle('placeholder-disabled')
        }
      }

      checkStatus()
    },
    [props]
  )
  return (
    <div className='flex flex-col'>
      <input
        {...props}
        className={`${
          props.className ? props.className + ' ' : ''
        }shadow-0 hover:shadow-1 font-base ${statusStyles} rounded-md leading-none ${placeholderStyle} px-6 py-3`}
      />
      {props.error ? (
        <small className={`${commonStatusStyles} text-invalid`}>
          {errorMessage}
        </small>
      ) : (
        ''
      )}
      {props.success ? (
        <small className={`${commonStatusStyles} text-valid`}>
          {successMessage}
        </small>
      ) : (
        ''
      )}
    </div>
  )
}

export default Input
