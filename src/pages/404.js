import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const mailTo = 'roman@romansorin.com'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Page not found!' />
    <div className='mx-auto container md:px-32 my-24'>
      <div className='mb-32'>
        <h1 className='text-theme-0 text-center md:text-left text-5xl font-bold leading-snug md:leading-relaxed md:text-6xl'>
          404: Page not found!
        </h1>
        <h2 className='text-text-2 text-center md:text-left text-2xl mt-1 md:mt-3 md:leading-relaxed'>
          Sorry, but that page doesn’t exist.
        </h2>
      </div>
      <h2 className='text-center md:leading-relaxed md:text-left text-text-2 text-2xl'>
        Return to the{' '}
        <Link to='/' className='hover:text-theme-1 text-theme-2'>
          front page
        </Link>
        , or{' '}
        <a
          className='hover:text-theme-1 text-theme-2'
          href={`mailto:${mailTo}`}
        >
          drop a line
        </a>{' '}
        if you can’t find what you’re looking for.
      </h2>
    </div>
  </Layout>
)

export default NotFoundPage
