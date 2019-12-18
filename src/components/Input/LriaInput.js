import React, { useState } from 'react'
import { Search, ArrowRight } from 'react-feather'

import Input from './Input'

const commonStyles =
  'text-theme-5-.8 hover:text-theme-5 absolute right-0 top-0 mt-3 pt-px -mb-px leading-none uppercase mr-4 font-medium'
const strokeWidth = 3
const size = 18

const LriaInput = props => {
  const [inputClasses, setInputClasses] = useState('')
  return (
    <div className='relative'>
      <Input className={`${inputClasses} pl-10`} {...props} />
      <div>
        <span className='text-text-1-.75 absolute left-0 top-0 mt-3 pt-px -mb-px leading-none ml-4'>
          <Search size={16} />
        </span>
        {props.renderIconAs === 'a' ? (
          <a
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${commonStyles}`}
            href={props.href}
          >
            <ArrowRight strokeWidth={strokeWidth} size={size} />
          </a>
        ) : (
          ''
        )}
        {props.renderIconAs === 'button' ? (
          <button
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${commonStyles}`}
            type={props.buttonType ? props.buttonType : 'button'}
          >
            <ArrowRight strokeWidth={strokeWidth} size={size} />
          </button>
        ) : (
          ''
        )}
        {!props.renderIconAs ? (
          <span
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${commonStyles} cursor-pointer`}
          >
            <ArrowRight strokeWidth={strokeWidth} size={size} />
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default LriaInput
