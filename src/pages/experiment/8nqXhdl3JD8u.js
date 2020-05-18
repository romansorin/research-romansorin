import { Layout, SEO } from 'Components'
import React from 'react'
import VariantOne from 'Components/variants/one'

const VariantOnePage = () => {
  return (
    <Layout>
      <SEO title='Variant One' />
      <VariantOne />
    </Layout>
  )
}

export default VariantOnePage
