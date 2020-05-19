import React, { useEffect } from 'react'

import { Database } from 'firebase'

const FinishedPage = ({ doc }) => {
  useEffect(() => {
    Database.collection('users')
      .doc(doc)
      .get()
      .then(res => console.log(res))
  }, [])

  return <div>Finihed</div>
}

export default FinishedPage
