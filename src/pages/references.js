import React, { useEffect, useState } from 'react'

import { getAllReferences, Reference } from '../models/Reference'

const ReferencesPage = () => {
  useEffect(() => {
    const refs = getAllReferences().then(res =>
      res.forEach(doc => console.log(doc.data()))
    )
  }, [])
  return <div />
}

export default ReferencesPage
