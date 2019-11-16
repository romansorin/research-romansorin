import React, { useEffect } from 'react'

import Layout from '../../components/layout'

import Reference from '../../components/Reference/Reference'

const ReferencePage = props => {
  useEffect(() => {
    console.log(props.reference)
  }, [])
  return (
    <Layout>
      Requested: {props.reference}
      <Reference />
    </Layout>
  )
}

export default ReferencePage
