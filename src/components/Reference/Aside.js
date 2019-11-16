import React, { useEffect, useState } from 'react'

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

const Aside = ({ title, downloadUrl, className, date }) => {
  function download (url) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = function (e) {
      const doc = xhr.response
      const blobUrl = window.URL.createObjectURL(doc)
      const a = document.getElementById('download_pdf')
      a.href = blobUrl
    }
    xhr.send()
  }

  return (
    <aside className={className}>
      <p className='mb-2 text-text-2 uppercase text-sm font-bold'>
        {formatTimestampDate(date)}
      </p>

      <PrimaryButton variant={0}>
        <a
          id='download_pdf'
          className='hidden md:block'
          onClick={() => download(downloadUrl)}
          download={`${title}.pdf`}
        >
          DOWNLOAD
        </a>
      </PrimaryButton>
    </aside>
  )
}

Aside.defaultProps = {
  date: 'jan 1, 2019'
}

export default Aside
