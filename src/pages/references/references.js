import React, { useEffect, useState } from 'react'
import {
  InstantSearch,
  connectSearchBox,
  SearchBox,
  Hits
} from 'react-instantsearch-dom'

import { Layout, SEO } from 'Components'
import { LiaInput } from 'Components/Input'
import { Table } from 'Components/Table'
import { PrimaryButton } from 'Components/Button'

import { Database } from 'Firebase'
import { algolia } from 'Firebase/algolia'

const PATH = 'references'
const DB = Database.collection(PATH)

const columnStyles = {
  left: 'pl-1 w-1/3',
  middle: 'ml-4 md:ml-0 mr-auto',
  right: 'ml-auto mr-3 uppercase font-bold text-theme-2'
}
const renderAs = {
  TEXT: 'text',
  LINK: 'Link'
}

const Search = ({ currentRefinement, refine }) => (
  <LiaInput
    type='search'
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
  />
)

const CustomSearch = connectSearchBox(Search)

const ReferencesPage = () => {
  const [references, setReferences] = useState()

  const setRows = data => {
    const rows = []
    data.map(doc => {
      rows.push({
        columns: [
          {
            renderAs: renderAs.TEXT,
            className: columnStyles.left,
            text: doc.title
          },
          {
            renderAs: renderAs.TEXT,
            className: columnStyles.middle,
            text: doc.authors.map((author, i) => {
              if (i < doc.authors.length - 1) return `${author}, `
              else return author
            })
          },
          {
            renderAs: renderAs.LINK,
            to: `references/${doc.slug}`,
            className: columnStyles.right,
            text: 'View'
          }
        ]
      })
    })
    return setReferences({ rows: rows })
  }

  useEffect(
    () => {
      const data = []
      DB.limit(5)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => data.push(doc.data()))
          setRows(data)
        })
    },
    [renderAs, columnStyles]
  )

  return (
    <Layout>
      <SEO title='All references' />
      <h1 className='mb-3 text-text-2 text-3xl md:text-4xl leading-snug font-medium'>
        References
      </h1>
      <InstantSearch searchClient={algolia} indexName='references'>
        <CustomSearch />
        <Hits />
      </InstantSearch>
      {/* TODO: Search through Algolia to find a row functionality */}
      {references && references.rows.length > 0 ? (
        <Table
          className='mx-auto w-11/12 md:w-full mt-10 mb-20'
          {...references}
        />
      ) : (
        ''
      )}
      {/* TODO: Author ellipsis/truncation when goes over x amount of chars in that column */}
      {/* TODO: Implement display for when no results are found or no rows exist. */}
      {/*
      <PrimaryButton className='px-10 mx-auto flex' variant={0}>
        Load more
      </PrimaryButton> */}
      {/* TODO: Load more functionality */}
    </Layout>
  )
}

export default ReferencesPage
