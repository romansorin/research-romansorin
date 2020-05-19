import React, { useEffect } from 'react'

import { Database } from 'Firebase'

const FinishedPage = props => {
  useEffect(() => {
    Database.collection('users')
      .doc(props.location.search.substring(5))
      .update({ session_end: new Date() })
  })

  return <div>Finished</div>
}

export default FinishedPage
