import { Layout, SEO } from 'Components'
import React from 'react'
import VariantOne from 'Components/variants/one'

const VariantOnePage = () => {
  return (
    <Layout minimal>
      <SEO title='Experiment' />
      <VariantOne />
    </Layout>
  )
}

export default VariantOnePage
