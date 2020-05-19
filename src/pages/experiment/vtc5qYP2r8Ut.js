import { Layout, SEO } from 'Components'
import React, { useEffect, useState } from 'react'
import VariantThree from 'Components/variants/three'

const VariantThreePage = props => {
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    setDoc(props.location.search.substring(5))
  }, [])

  return (
    <Layout minimal>
      <SEO title='Experiment' />
      <VariantThree doc={doc} />
    </Layout>
  )
}

export default VariantThreePage
