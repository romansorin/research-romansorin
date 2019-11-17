import React, { useEffect } from 'react'

import { getAllReferences } from 'firebase/Reference'
import Layout from 'Components/layout'
import SEO from 'Components/seo'
import { LiaInput } from 'Components/Input'
import { Table } from 'Components/Table'
import { PrimaryButton } from 'Components/Button'

const tableData = {
  rows: [
    {
      className: 'w-full flex',
      columns: [
        { renderAs: 'text', className: 'pl-1 mr-auto', text: 'Paper' },
        {
          className: 'ml-4 md:ml-0 mr-auto',
          renderAs: 'text',
          text: 'Author'
        },
        {
          className: 'ml-auto mr-3 uppercase font-bold text-theme-2',
          renderAs: 'Link',
          to: 'https://romansorin.com',
          text: 'View'
        }
      ]
    },
    {
      className: 'w-full flex',
      columns: [
        { renderAs: 'text', className: 'pl-1 mr-auto', text: 'Paper' },
        {
          className: 'ml-4 md:ml-0 mr-auto',
          renderAs: 'text',
          text: 'Author'
        },
        {
          className: 'ml-auto mr-3 uppercase font-bold text-theme-2',
          renderAs: 'Link',
          to: 'https://romansorin.com',
          text: 'View'
        }
      ]
    },
    {
      className: 'w-full flex',
      columns: [
        { renderAs: 'text', className: 'pl-1 mr-auto', text: 'Paper' },
        {
          className: 'ml-4 md:ml-0 mr-auto',
          renderAs: 'text',
          text: 'Author'
        },
        {
          className: 'ml-auto mr-3 uppercase font-bold text-theme-2',
          renderAs: 'Link',
          to: 'https://romansorin.com',
          text: 'View'
        }
      ]
    },
    {
      className: 'w-full flex',
      columns: [
        { renderAs: 'text', className: 'pl-1 mr-auto', text: 'Paper' },
        {
          className: 'ml-4 md:ml-0 mr-auto',
          renderAs: 'text',
          text: 'Author'
        },
        {
          className: 'ml-auto mr-3 uppercase font-bold text-theme-2',
          renderAs: 'Link',
          to: 'https://romansorin.com',
          text: 'View'
        }
      ]
    }
  ]
}
const ReferencesPage = () => {
  // useEffect(() => {
  //   const refs = getAllReferences().then(res =>
  //     res.forEach(doc => console.log(doc.data()))
  //   )
  // }, [])
  return (
    <Layout>
      <SEO title='All references' />
      <h1 className='mb-3 text-text-2 text-3xl md:text-4xl leading-snug font-medium'>
        References
      </h1>
      <LiaInput placeholder='Paper title or author' />
      <Table className='mx-auto w-11/12 md:w-full mt-10 mb-20' {...tableData} />
      <PrimaryButton className='px-10 mx-auto flex' variant={0}>
        Load more
      </PrimaryButton>
    </Layout>
  )
}

export default ReferencesPage
