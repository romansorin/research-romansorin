import React from 'react'

import { CheckboxChecked, CheckboxUnchecked } from 'Icons/Checkbox'

const commonStyles = 'absolute top-0 left-0'

const Checkbox = props => {
  const { children, ...defaultProps } = props
  return (
    <div
      className={`${
        defaultProps.className ? defaultProps.className + ' ' : ''
      }relative flex flex-wrap`}
    >
      <input
        defaultChecked={defaultProps.checked}
        onChange={defaultProps.handleOnChange}
        className='opacity-0'
        type='checkbox'
        {...defaultProps}
      />
      {children ? (
        <label
          className={`${
            defaultProps.labelClasses ? defaultProps.labelClasses + ' ' : ''
          }`}
          htmlFor={defaultProps.id}
        >
          {defaultProps.checked ? (
            <CheckboxChecked
              width={defaultProps.width}
              height={defaultProps.height}
              viewBox={`0 0 ${defaultProps.height} ${defaultProps.width}`}
              className={`${commonStyles}`}
            />
          ) : (
            <CheckboxUnchecked
              width={defaultProps.width}
              height={defaultProps.height}
              viewBox={`0 0 ${defaultProps.height} ${defaultProps.width}`}
              className={`${commonStyles}`}
            />
          )}
          <span className='ml-6 select-none'>{children}</span>{' '}
        </label>
      ) : (
        ''
      )}
    </div>
  )
}

export default Checkbox
