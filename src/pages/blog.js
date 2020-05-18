import { Layout, SEO } from 'Components'
import React from 'react'

const BlogPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <div className='flex px-3 my-64'>
        <h1 className='mx-auto text-2xl text-center md:text-3xl'>
          In progress. For inquiries, email
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

export default BlogPage
