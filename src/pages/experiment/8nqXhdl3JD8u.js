import { Layout, SEO } from 'Components'
import React, { useEffect, useState } from 'react'
import VariantOne from 'Components/variants/one'

const VariantOnePage = props => {
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    setDoc(props.location.search.substring(5))
  }, [])

  return (
    <Layout minimal>
      <SEO title='Experiment' />
      <VariantOne doc={doc} />
    </Layout>
  )
}

export default VariantOnePage
