import React from 'react'

import PrimaryButton from '../Button/PrimaryButton'

const Aside = () => {
  return (
    <aside>
      <p className='text-text-2 font-bold'>NOV 1, 2019</p>
      <a href='/'>
        <PrimaryButton variant={0}>DOWNLOAD</PrimaryButton>
      </a>
    </aside>
  )
}

export default Aside
