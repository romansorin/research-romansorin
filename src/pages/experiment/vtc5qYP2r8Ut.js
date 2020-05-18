import { Layout, SEO } from 'Components'
import React from 'react'
import VariantThree from 'Components/variants/three'

const VariantThreePage = () => {
  return (
    <Layout minimal>
      <SEO title='Experiment' />
      <VariantThree />
    </Layout>
  )
}

export default VariantThreePage
