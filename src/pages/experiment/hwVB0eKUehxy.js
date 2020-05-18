import { Layout, SEO } from 'Components'
import React from 'react'
import VariantTwo from 'Components/variants/two'

const VariantTwoPage = () => {
  return (
    <Layout minimal>
      <SEO title='Variant Two' />
      <VariantTwo />
    </Layout>
  )
}

export default VariantTwoPage
