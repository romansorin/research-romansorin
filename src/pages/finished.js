import React, { useEffect } from 'react'

import { Database } from 'Firebase'

const FinishedPage = ({ doc }) => {
  useEffect(() => {
    Database.collection('users')
      .doc(doc)
      .get()
      .then(res => console.log(res))
  }, [doc])

  return <div>Finished</div>
}

export default FinishedPage
