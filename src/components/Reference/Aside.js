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

const Aside = ({ downloadUrl, className, date }) => {
  return (
    <aside className={className}>
      <p className='mb-2 text-text-2 uppercase text-sm font-bold'>
        {formatTimestampDate(date)}
      </p>
      <a
        target='_blank'
        className='hidden md:block'
        href={downloadUrl}
        download='pdf.pdf'
      >
        <PrimaryButton variant={0}>DOWNLOAD</PrimaryButton>
      </a>
    </aside>
  )
}

Aside.defaultProps = {
  date: 'jan 1, 2019'
}

export default Aside
