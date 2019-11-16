import React from 'react'

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
    </main>
  )
}

export default Main
