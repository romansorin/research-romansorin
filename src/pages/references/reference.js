import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'

import { Layout } from 'Components'
import { Database } from 'Firebase'
import Reference from 'Components/Reference'

const PATH = 'references'
const DB = Database.collection(PATH)

const ReferencePage = props => {
  const [data, setData] = useState()
  useEffect(
    () => {
      const data = []
      DB.where('slug', '==', props.reference)
        .limit(1)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.size === 0) navigate('/404')
          else {
            querySnapshot.forEach(doc => data.push(doc.data()))
            setData(data[0])
          }
        })
        .catch(error => {
          console.log(error)
          navigate('/404')
        })
    },
    [props.reference]
  )
  return (
    <Layout>
      <Reference {...data} />
    </Layout>
  )
}

export default ReferencePage
