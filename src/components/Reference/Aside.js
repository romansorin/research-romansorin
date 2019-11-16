import React from 'react'

import PrimaryButton from '../Button/PrimaryButton'

const Aside = ({ date }) => {
  return (
    <aside>
      <p className='text-text-2 font-bold'>{date}</p>
      <a href='/'>
        <PrimaryButton variant={0}>DOWNLOAD</PrimaryButton>
      </a>
    </aside>
  )
}

export default Aside
