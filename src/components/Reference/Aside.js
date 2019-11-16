import React from 'react'

import PrimaryButton from '../Button/PrimaryButton'

const Aside = props => {
  return (
    <aside {...props}>
      <p className='mb-2 text-text-2 font-bold'>{props.date}</p>
      <a href='/'>
        <PrimaryButton variant={0}>DOWNLOAD</PrimaryButton>
      </a>
    </aside>
  )
}

export default Aside
