import React, { useEffect } from 'react'

import { PrimaryButton } from 'Components/Button'

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
  useEffect(
    () => {
      download(downloadUrl)
    },
    [download, downloadUrl]
  )

  function download (url) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = function (e) {
      const blobUrl = window.URL.createObjectURL(xhr.response)
      const a = document.getElementById('download_pdf')
      a.href = blobUrl
    }
    xhr.send()
  }

  return (
    <aside className={className}>
      <p className='mb-2 text-text-2 uppercase text-xs md:text-sm font-bold'>
        {formatTimestampDate(date)}
      </p>
      <a
        id='download_pdf'
        className='hidden md:block'
        download={`${title}.pdf`}
      >
        <PrimaryButton variant={0}>DOWNLOAD</PrimaryButton>
      </a>
    </aside>
  )
}

export default Aside
