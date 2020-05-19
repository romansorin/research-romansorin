import React, { useEffect } from 'react'

import { Database } from 'Firebase'
import { Layout, SEO } from 'Components/index'

const FinishedPage = props => {
  if (!props.location.search.substring(5).length > 0)
    return <div>Missing document ref.</div>
  useEffect(() => {
    if (props.location.search.substring(5).length > 0) {
      Database.collection('users')
        .doc(props.location.search.substring(5))
        .update({ session_end: new Date() })
    }
  }, [])

  return (
    <Layout>
      <SEO title='Finished' />
      <div className='flex px-3 my-64'>
        <h1 className='mx-auto text-2xl text-center md:text-3xl'>
          Thank you for participating. For inquiries, email{' '}
          <a
            className='text-indigo-500 hover:text-gray-900'
            href='mailto:roman@romansorin.com'
          >
            roman@romansorin.com
          </a>
        </h1>
      </div>
    </Layout>
  )
}

export default FinishedPage
