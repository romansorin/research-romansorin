import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Page not found!' />
    <div className='mx-32 container my-24'>
      <div className='mb-32'>
        <h1 className='text-theme-0 font-bold leading-relaxed text-6xl'>
          404: Page not found!
        </h1>
        <h2 className='text-text-2 text-2xl mt-3 leading-relaxed'>
          Sorry, but that page doesn’t exist.
        </h2>
      </div>
      <h2 className='text-text-2 text-2xl'>
        Return to the{' '}
        <Link to='/' className='hover:text-theme-1 text-theme-2'>
          front page
        </Link>
        , or{' '}
        <a
          className='hover:text-theme-1 text-theme-2'
          href='mailto:roman@romansorin.com'
        >
          drop a line
        </a>{' '}
        if you can’t find what you’re looking for.
      </h2>
    </div>
  </Layout>
)

export default NotFoundPage
