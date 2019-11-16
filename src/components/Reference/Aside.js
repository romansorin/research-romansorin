import React from 'react'

import PrimaryButton from '../Button/PrimaryButton'

const Aside = ({ className, date }) => {
  return (
    <aside className={className}>
      <p className='mb-2 text-text-2 text-sm font-bold'>{date}</p>
      <a className='hidden md:block' href='/'>
        <PrimaryButton variant={0}>DOWNLOAD</PrimaryButton>
      </a>
    </aside>
  )
}

export default Aside
