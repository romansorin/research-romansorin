import React from 'react'
import PropTypes from 'prop-types'

import PrimaryButton from '../Button/PrimaryButton'

const formatTimestampDate = timestamp => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const date = new Date('Jan 1 1970')
  if (timestamp) date.setSeconds(timestamp.seconds)
  return `${months[date.getMonth()]}, ${date.getDate()} ${date.getFullYear()}`
}

const Aside = ({ storage_url, className, date }) => {
  return (
    <aside className={className}>
      <p className='mb-2 text-text-2 uppercase text-sm font-bold'>
        {formatTimestampDate(date)}
      </p>
      <a className='hidden md:block' download href={storage_url}>
        <PrimaryButton variant={0}>DOWNLOAD</PrimaryButton>
      </a>
    </aside>
  )
}

Aside.defaultProps = {
  date: 'jan 1, 2019'
}

export default Aside
