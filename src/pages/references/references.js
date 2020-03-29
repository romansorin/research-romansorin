import React from 'react'
import {
  InstantSearch,
  connectSearchBox,
  connectInfiniteHits
} from 'react-instantsearch-dom'
import { Link } from 'gatsby'

import { Layout, SEO } from 'Components'
import { LiaInput } from 'Components/Input'
import { PrimaryButton } from 'Components/Button'

import { algolia } from 'Firebase'

const columnStyles = {
  left: 'pl-1 w-1/3',
  middle: 'ml-4 md:ml-0 mr-auto',
  right: 'ml-auto mr-3 uppercase font-bold text-theme-2'
}

const ResultsTable = ({ hits }) => (
  <table className='mx-auto w-full mt-10 mb-20'>
    <tbody>
      {hits.map((hit, i) => (
        <tr className='odd:bg-white-1 even:bg-white-0 py-4 w-full flex' key={i}>
          <td className={`${columnStyles.left} text-text-2`}>{hit.title}</td>
          <td className={`${columnStyles.middle} text-text-2`}>
            {hit.authors
              ? hit.authors.map((author, i) => {
                  if (i < hit.authors.length - 1) return `${author}, `
                  else return author
                })
              : ''}
          </td>
          <td className={`${columnStyles.right}`}>
            <Link to={`/references/${hit.slug}`}>View</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

const Search = connectSearchBox(({ currentRefinement, refine }) => (
  <LiaInput
    placeholder='Paper title or author'
    type='search'
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
  />
))

const InfiniteHits = ({ hits, hasMore, refineNext }) => (
  <div>
    <ResultsTable hits={hits} />

    <h2
      className={`${
        hits.length > 0 ? 'hidden ' : ' '
      }text-text-2 font-medium text-3xl text-center my-16`}
    >
      No results found.
    </h2>

    <PrimaryButton
      disabled={!hasMore}
      onClick={refineNext}
      className={`${!hasMore ? 'opacity-50 cursor-default ' : ' '}${
        hits.length === 0 ? 'hidden ' : ' '
      }px-10 mx-auto flex`}
      variant={0}
    >
      Load more
    </PrimaryButton>
  </div>
)

const Results = connectInfiniteHits(InfiniteHits)

const ReferencesPage = () => {
  return (
    <Layout>
      <SEO title='All references' />
      <h1 className='mb-3 text-text-2 text-3xl md:text-4xl leading-snug font-medium'>
        References
      </h1>
      <InstantSearch searchClient={algolia} indexName='references'>
        <Search />
        <Results />
      </InstantSearch>
    </Layout>
  )
}

export default ReferencesPage
