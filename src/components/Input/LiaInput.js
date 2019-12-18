import React from 'react'
import { Search } from 'react-feather'

import Input from './Input'

const LiaInput = props => {
  return (
    <div className='relative'>
      <Input className='pl-10' {...props} />
      <div>
        <span className='text-text-1-.75 absolute left-0 top-0 mt-3 pt-px -mb-px leading-none ml-4'>
          <Search size={16} />
        </span>
      </div>
    </div>
  )
}

export default LiaInput
