import React from 'react'
import Citation from './Citation'

const Main = props => {
  return (
    <main>
      <p className='text-text-2 leading-relaxed text-lg'>{props.children}</p>
      <p className='text-text-2 leading-relaxed text-lg'>
        Read the paper{' '}
        <a className='text-theme-2 underline' href='/'>
          here.
        </a>
      </p>
      <Citation>Citation of given article in IEEE format...</Citation>
    </main>
  )
}

export default Main
