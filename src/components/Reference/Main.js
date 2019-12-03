import React from 'react'

import Citation from './Citation'

const Main = props => {
  return (
    <main className='w-full'>
      <p className='text-text-2 leading-relaxed text-base md:text-lg mb-16'>
        {props.children ? props.children : 'No summary available.'}
      </p>
      <p className='text-text-2 leading-relaxed text-base md:text-lg mb-8 md:mb-5'>
        Read the paper{' '}
        <a
          className='text-theme-2 cursor-pointer underline'
          href={props.storageUrl}
        >
          here.
        </a>
      </p>
      <Citation>
        {props.citation ? props.citation : 'No citation available.'}
      </Citation>
    </main>
  )
}

export default Main
