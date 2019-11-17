import React from 'src/stories/react'

const Wrapper = props => <div className='mx-5 my-5'>{props.children}</div>

const Row = props => (
  <div>
    <h1 className='text-xl font-semibold mb-4'>{props.info}</h1>
    <div className='flex flex-row justify-start mb-8'>{props.children}</div>
  </div>
)

export { Wrapper, Row }
