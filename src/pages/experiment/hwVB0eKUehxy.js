import { Layout, SEO } from 'Components'
import React, { useEffect, useState } from 'react'
import VariantTwo from 'Components/variants/two'

const VariantTwoPage = () => {
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    setDoc(props.location.search.substring(5))
  }, [])

  return (
    <Layout minimal>
      <SEO title='Experiment' />
      <VariantTwo doc={doc} />
    </Layout>
  )
}

export default VariantTwoPage
