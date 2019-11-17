import React, { useState } from 'react'
import { Search } from 'react-feather'

import Input from './Input'

const commonStyles =
  'text-theme-5-.8 hover:text-theme-5 absolute right-0 top-0 mt-3 pt-px -mb-px leading-none uppercase mr-4 font-medium'

const LirtInput = props => {
  const [inputClasses, setInputClasses] = useState('')
  return (
    <div className='relative'>
      <Input className={`${inputClasses} pl-10`} {...props} />
      <div>
        <span className='text-text-1-.75 absolute left-0 top-0 mt-3 pt-px -mb-px leading-none ml-4'>
          <Search size={16} />
        </span>
        {props.renderTextAs === 'a' ? (
          <a
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${commonStyles}`}
            href={props.href}
          >
            {props.text}
          </a>
        ) : (
          ''
        )}
        {props.renderTextAs === 'button' ? (
          <button
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${commonStyles}`}
            type={props.buttonType ? props.buttonType : 'button'}
          >
            {props.text}
          </button>
        ) : (
          ''
        )}
        {!props.renderTextAs ? (
          <p
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${commonStyles}`}
          >
            {props.text}
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default LirtInput
