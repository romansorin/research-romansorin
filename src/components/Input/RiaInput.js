import React, { useState } from 'react'
import { ArrowRight, X, Mail } from 'react-feather'

import Input from './Input'

const commonStyles =
  'text-theme-5-.8 hover:text-theme-5 absolute right-0 top-0 mt-3 pt-px -mb-px leading-none uppercase mr-4 font-medium'
const strokeWidth = 3
const size = 18

/* <ArrowRight strokeWidth={props.strokeWidth} size={props.size} /> */

const RiaInput = props => {
  const [inputClasses, setInputClasses] = useState('')

  const {
    handleIconClick,
    iconStrokeWidth,
    iconSize,
    iconWrapperStyles,
    icon,
    ...inputProps
  } = props
  const Icon = () => {
    switch (icon) {
      case 'X':
        return (
          <X
            onClick={handleIconClick}
            strokeWidth={iconStrokeWidth}
            size={iconSize}
          />
        )
      case 'ArrowRight':
        return (
          <ArrowRight
            onClick={handleIconClick}
            strokeWidth={iconStrokeWidth}
            size={iconSize}
          />
        )
      case 'Mail':
        return (
          <Mail
            onClick={handleIconClick}
            strokeWidth={iconStrokeWidth}
            size={iconSize}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className='relative'>
      <Input className={`${inputClasses}`} {...inputProps} />
      <div>
        {props.renderIconAs === 'a' ? (
          <a
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${commonStyles}`}
            href={props.href}
          >
            <Icon />
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
            <Icon />
          </button>
        ) : (
          ''
        )}
        {!props.renderIconAs ? (
          <span
            onMouseEnter={() => setInputClasses('shadow-1')}
            onMouseLeave={() => setInputClasses('shadow-0')}
            className={`${
              iconWrapperStyles ? iconWrapperStyles + ' ' : ''
            }${commonStyles} cursor-pointer`}
          >
            <Icon />
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default RiaInput
