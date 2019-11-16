import React, { useEffect, useState } from 'react'
import { getAllReferences } from '../../models/Reference'

const ReferencesPage = () => {
  useEffect(() => {
    const refs = getAllReferences().then(res =>
      res.forEach(doc => console.log(doc.data()))
    )
  }, [])
  return <div>Index page</div>
}

export default ReferencesPage
