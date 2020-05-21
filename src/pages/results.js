import React, { useEffect, useState } from 'react'
import { Database } from 'Firebase/index'

const ResultsPage = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const resultsArr = []
    Database.collection('users')
      .get()
      .then(qs => qs.forEach(doc => resultsArr.push(doc.data())))
    setResults(resultsArr)
  }, [])
  return <div>{JSON.stringify(results)}</div>
}

export default ResultsPage
