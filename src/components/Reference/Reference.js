import React, { useEffect, useState } from 'react'
import { storage } from '../../../firebase'

import Heading from './Heading'
import Aside from './Aside'
import Main from './Main'

const Reference = props => {
  const [referenceUrl, setReferenceUrl] = useState('')
  useEffect(
    () => {
      async function getDownloadUrl () {
        if (props.storage_url) {
          await storage
            .refFromURL(props.storage_url)
            .getDownloadURL()
            .then(url => {
              setReferenceUrl(url)
            })
            .catch(error => console.log(error))
        }
      }

      getDownloadUrl()
    },
    [props.storage_url]
  )
  return (
    <section>
      <Heading
        className='md:mb-24'
        title={props.title}
        authors={props.authors}
      />
      <div className='flex flex-col md:flex-row'>
        <Aside
          title={props.title}
          downloadUrl={referenceUrl}
          className='md:pr-16 md:mb-0 mb-10'
          date={props.date_posted}
        />
        <Main storageUrl={referenceUrl} citation={props.citation}>
          {props.summary}
        </Main>
      </div>
    </section>
  )
}

export default Reference
