import React, { useEffect, useState } from 'react'

const commonStatusStyles = 'pt-2'

const Input = props => {
  const [statusStyles, setStatusStyles] = useState('text-text-1')
  const [placeholderStyle, setPlaceholderStyle] = useState(
    'placeholder-placeholder'
  )
  useEffect(
    () => {
      if (props.success) setStatusStyles('text-valid border border-valid')
      else if (props.error) {
        setStatusStyles('text-invalid border border-invalid')
      } else if (props.disabled) {
        setStatusStyles('text-disabled bg-white-0')
        setPlaceholderStyle('placeholder-disabled')
      }
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
          Something is wrong.
        </small>
      ) : (
        ''
      )}
      {props.success ? (
        <small className={`${commonStatusStyles} text-valid`}>
          Successful!
        </small>
      ) : (
        ''
      )}
    </div>
  )
}

export default Input
