import React from ''

import { Wrapper, Row } from 'Stories/layout'
import { Table } from 'Components/Table'

export default {
  title: 'Table'
}

const tableData = {
  className: 'w-full',
  rows: [
    {
      className: 'w-full flex',
      columns: [
        { renderAs: 'text', className: 'mr-auto', text: 'Paper' },
        {
          className: 'mr-auto',
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
        { renderAs: 'text', className: 'mr-auto', text: 'Paper' },
        {
          className: 'mr-auto',
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
        { renderAs: 'text', className: 'mr-auto', text: 'Paper' },
        {
          className: 'mr-auto',
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
        { renderAs: 'text', className: 'mr-auto', text: 'Paper' },
        {
          className: 'mr-auto',
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

export const minimal = () => (
  <Wrapper>
    <Row info='Minimal'>
      <Table {...tableData} />
    </Row>
  </Wrapper>
)
