import React from 'react'

import { CheckboxChecked, CheckboxUnchecked } from '../../icons'

const commonStyles = 'absolute top-0 left-0'

const Checkbox = props => {
  return (
    <div
      className={`${
        props.className ? props.className + ' ' : ''
      }relative flex flex-wrap`}
    >
      <input
        defaultChecked={props.checked}
        onChange={props.onChange}
        className='opacity-0'
        type='checkbox'
        {...props}
      />
      {props.label ? (
        <label
          className={`${
            props.labelClasses ? props.labelClasses + ' ' : ''
          }cursor-pointer`}
          htmlFor={props.id}
        >
          {props.checked ? (
            <CheckboxChecked
              width={props.width}
              height={props.height}
              viewBox={`0 0 ${props.height} ${props.width}`}
              className={`${commonStyles}`}
            />
          ) : (
            <CheckboxUnchecked
              width={props.width}
              height={props.height}
              viewBox={`0 0 ${props.height} ${props.width}`}
              className={`${commonStyles}`}
            />
          )}
          <span className='ml-6 select-none'>{props.label}</span>{' '}
        </label>
      ) : (
        ''
      )}
    </div>
  )
}

export default Checkbox
