import { Layout, SEO } from 'Components'
import React from 'react'
import VariantTwo from 'Components/variants/two'

const VariantTwoPage = () => {
  return (
    <Layout minimal>
      <SEO title='Experiment' />
      <VariantTwo />
    </Layout>
  )
}

export default VariantTwoPage
